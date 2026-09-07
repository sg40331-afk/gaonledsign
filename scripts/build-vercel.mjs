import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const viteCli = resolve('node_modules', 'vite', 'bin', 'vite.js');

if (!existsSync(viteCli)) {
  console.error('Vite CLI was not found. Run npm install before building.');
  process.exit(1);
}

const result = spawnSync(process.execPath, [viteCli, 'build'], {
  stdio: 'inherit',
  shell: false,
  env: {
    ...process.env,
    NITRO_PRESET: process.env.NITRO_PRESET || 'vercel',
  },
});

if (result.error) {
  console.error(result.error);
}

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const requestedOutput = resolve('.vercel', 'output');

if (!existsSync(requestedOutput)) {
  console.error('Build completed, but .vercel/output was not generated.');
  process.exit(1);
}

const ssrEntry = resolve(
  '.vercel',
  'output',
  'functions',
  '__server.func',
  '_ssr',
  'ssr.mjs',
);

if (existsSync(ssrEntry)) {
  const source = readFileSync(ssrEntry, 'utf8');
  const brokenCall = "let t=await(await import(`./rsc.mjs`)).default(e);";
  const fixedCall =
    "let n=await import(`./rsc.mjs`),t=await(n.default?.fetch?n.default.fetch(e):n.default(e));";

  if (source.includes(brokenCall)) {
    writeFileSync(ssrEntry, source.replace(brokenCall, fixedCall));
    console.log('Patched Vinext SSR entry for Vercel runtime.');
  }
}

process.exit(0);
