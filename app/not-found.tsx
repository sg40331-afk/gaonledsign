import { PageShell } from '@/components/site-shell';

export default function NotFound() {
  return <PageShell><section id="top" className="page-hero"><div className="container-narrow"><p>404</p><h1>페이지를 찾을 수 없습니다</h1><span>원하는 정보를 찾지 못했다면 견적문의나 전화상담을 이용해 주세요.</span><div className="mt-8 flex justify-center gap-3"><a className="primary-link" href="/quote">견적문의</a><a className="secondary-link" href="/">메인으로</a></div></div></section></PageShell>;
}
