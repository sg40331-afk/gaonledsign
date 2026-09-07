import { PageShell, SectionTitle, VisualPanel } from '@/components/site-shell';
import { portfolioItems } from '@/lib/site-data';

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = portfolioItems.find((entry) => entry.slug === slug) ?? portfolioItems[0];
  return (
    <PageShell>
      <section id="top" className="page-hero"><div className="container-narrow"><p>설치사례 상세</p><h1>{item.title}</h1><span>{item.category} · {item.place} · {item.region}</span></div></section>
      <section className="container-section grid gap-8 lg:grid-cols-[1fr_0.9fr]"><VisualPanel label={`${item.title} 설치 완료 사진`} tall /><div><SectionTitle title="현장 요약" description={item.summary} /><div className="grid gap-4">{['설치 전 현장', '고객 요청사항', '적용 제품과 사양', '제작 과정', '설치 과정', '문제 해결 내용'].map((label)=><div key={label} className="card"><h3>{label}</h3><p>[정보 입력 필요] 또는 관리자 입력 항목입니다.</p></div>)}</div><a className="primary-link mt-6" href="/quote">견적문의</a></div></section>
    </PageShell>
  );
}
