import { PageShell, SectionTitle, VisualPanel, ContactMapSection } from '@/components/site-shell';
import { company, reasons } from '@/lib/site-data';

export default function CompanyPage() {
  return (
    <PageShell>
      <section id="top" className="page-hero"><div className="container-narrow"><p>회사소개</p><h1>현장에 맞는 빛을 설계하는 가온전광판</h1><span>{company.founded} · {company.region}</span></div></section>
      <section className="container-section grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div><SectionTitle title="대표 인사말" description="가온전광판은 제품을 크게 보이게 만드는 일보다, 현장에서 오래 잘 쓰이는 전광판을 만드는 일을 더 중요하게 생각합니다." /></div>
        <div className="space-y-5 text-base leading-8 text-slate-600"><p>매장, 기업, 공장, 관공서, 학교, 교회, 행사장마다 필요한 밝기와 크기, 송출 방식은 다릅니다. 가온전광판은 상담 단계에서 사용 목적과 설치 환경을 먼저 확인합니다.</p><p>확인되지 않은 연혁, 장비, 인증, 수상내역은 임의로 표시하지 않습니다. 해당 정보는 관리자 설정과 콘텐츠 관리 구조로 추가할 수 있습니다.</p></div>
      </section>
      <section className="bg-[#f3f8ff] py-16"><div className="mx-auto max-w-[1200px] px-5 lg:px-0"><SectionTitle title="가온전광판의 경쟁력" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{reasons.map((item)=><article key={item.title} className="card"><item.icon className="h-8 w-8 text-[#0b7cff]"/><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
      <section className="container-section"><SectionTitle title="회사 연혁·보유 장비·제작시설" description="설립연도 외 세부 연혁, 장비 목록, 인증 정보는 [정보 입력 필요] 상태입니다." /><VisualPanel label="가온전광판 제작시설과 장비 이미지" src="/mockup-assets/company-facility-equipment.svg" tall /></section>
      <ContactMapSection />
    </PageShell>
  );
}
