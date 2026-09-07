import { PageShell, SectionTitle } from '@/components/site-shell';
import { QuoteForm } from '@/components/quote-form';

export default function QuotePage() {
  return (
    <PageShell>
      <section id="top" className="page-hero"><div className="container-narrow"><p>견적문의</p><h1>빠른 견적문의</h1><span>설치 위치와 원하는 제품을 남겨주시면 상담 흐름을 확인할 수 있습니다.</span></div></section>
      <section className="bg-[#08243f] py-16 text-white"><div className="mx-auto max-w-[900px] px-5 lg:px-0"><SectionTitle light title="견적 정보 입력" description="실제 저장과 이메일 알림은 연결 필요 상태입니다." /><QuoteForm /></div></section>
    </PageShell>
  );
}
