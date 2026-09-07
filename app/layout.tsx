import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '가온전광판 | LED 전광판 설계·제작·설치',
  description: '인천 중심 수도권 LED 전광판 설계, 제작, 설치, 유지관리와 빠른 견적문의를 제공하는 가온전광판 홈페이지입니다.',
  openGraph: {
    title: '가온전광판',
    description: '시선을 멈추는 빛, 매출을 움직이는 전광판',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
