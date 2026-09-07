import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    ok: true,
    feature: 'image-upload',
    configured: false,
    required: ['UPLOAD_STORAGE', 'UPLOAD_MAX_SIZE_MB', 'UPLOAD_ALLOWED_TYPES'],
  });
}
