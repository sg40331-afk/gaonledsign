import { PageShell, SectionTitle } from '@/components/site-shell';

export default function TermsPage() {
  return <PageShell><section id="top" className="page-hero"><div className="container-narrow"><p>이용약관</p><h1>이용약관</h1><span>[정보 입력 필요]</span></div></section><section className="container-section max-w-[900px]"><SectionTitle title="서비스 이용 안내" description="홈페이지 정보와 견적문의 이용 조건은 실제 운영 정책에 맞춰 관리자 입력 또는 정식 약관 문서로 보완해야 합니다." /></section></PageShell>;
}
