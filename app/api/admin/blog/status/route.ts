import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    ok: true,
    feature: 'blog-admin',
    configured: false,
    required: ['ADMIN_EMAIL', 'ADMIN_PASSWORD_HASH', 'DATABASE_URL', 'UPLOAD_STORAGE'],
  });
}
