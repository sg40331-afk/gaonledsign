import { PageShell, SectionTitle, VisualPanel } from '@/components/site-shell';
import { productGroups } from '@/lib/site-data';

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productGroups.find((item) => item.slug === slug) ?? productGroups[0];
  return (
    <PageShell>
      <section id="top" className="page-hero"><div className="container-narrow"><p>제품 상세</p><h1>{product.title}</h1><span>{product.summary}</span></div></section>
      <section className="container-section grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"><VisualPanel label={`${product.title} 대표 이미지`} tall /><div className="space-y-6"><SectionTitle title="핵심 설명" description={product.summary} /><div className="grid gap-4 sm:grid-cols-2">{product.items.map((item)=><div key={item} className="card"><h3>{item}</h3><p>추천 설치 장소와 세부 사양은 현장 확인 후 안내합니다.</p></div>)}</div></div></section>
      <section className="bg-[#f3f8ff] py-16"><div className="mx-auto max-w-[1200px] px-5 lg:px-0"><SectionTitle title="제품 사양표" description="크기, 해상도, 실내·옥외 구분, 설치 방법, 송출 방식, 가격은 [정보 입력 필요] 항목입니다." /><div className="grid gap-4 md:grid-cols-3">{['크기와 해상도', '설치 방법', '콘텐츠 송출 방식', '관련 설치사례', '주문·제작 과정', 'FAQ'].map((item)=><div key={item} className="card"><h3>{item}</h3><p>[정보 입력 필요]</p></div>)}</div><div className="mt-8 flex gap-3"><a className="primary-link" href="/quote">맞춤 견적문의</a><a className="secondary-link" href="tel:032-428-4033">전화상담</a></div></div></section>
    </PageShell>
  );
}
