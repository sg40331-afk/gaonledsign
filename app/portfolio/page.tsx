import { PageShell, SectionTitle, VisualPanel } from '@/components/site-shell';
import { portfolioItems } from '@/lib/site-data';

export default function PortfolioPage() {
  return (
    <PageShell>
      <section id="top" className="page-hero"><div className="container-narrow"><p>설치사례</p><h1>현장 조건에 맞춰 완성한 LED 전광판 사례</h1><span>실제 거래처가 확인되지 않은 항목은 임시 표시를 사용했습니다.</span></div></section>
      <section className="container-section"><div className="mb-8 flex flex-wrap justify-center gap-2">{['전체','옥외 전광판','실내 전광판','문자·정보 전광판','미니·소형 전광판'].map((item)=><span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold">{item}</span>)}</div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{portfolioItems.map((item)=><a key={item.slug} href={`/portfolio/${item.slug}`} className="card"><VisualPanel label={`${item.title} 대표 이미지`} /><p className="mt-4 text-xs font-black text-[#0b7cff]">{item.category}</p><h3>{item.title}</h3><p>{item.place} · {item.region}</p><p>{item.summary}</p></a>)}</div></section>
    </PageShell>
  );
}
