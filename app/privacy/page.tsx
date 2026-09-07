import { PageShell, SectionTitle } from '@/components/site-shell';

export default function PrivacyPage() {
  return <PageShell><section id="top" className="page-hero"><div className="container-narrow"><p>개인정보처리방침</p><h1>개인정보처리방침</h1><span>[정보 입력 필요]</span></div></section><section className="container-section max-w-[900px]"><SectionTitle title="수집 및 이용 안내" description="견적 상담에 필요한 이름, 연락처, 이메일, 설치 지역, 문의 내용을 수집할 수 있습니다. 실제 저장소와 알림 연결 전 세부 보관 기간과 처리 위탁 정보는 [정보 입력 필요]입니다." /></section></PageShell>;
}
