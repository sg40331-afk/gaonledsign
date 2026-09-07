import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
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

const requestedOutput = resolve('.output');

if (!existsSync(requestedOutput)) {
  console.error('Build completed, but .output was not generated.');
  process.exit(1);
}

process.exit(0);
