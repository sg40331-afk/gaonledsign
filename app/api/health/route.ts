import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    ok: true,
    runtime: 'vercel-nitro',
    service: 'gaon-signage-site',
  });
}
