import { PageShell, SectionTitle, VisualPanel } from '@/components/site-shell';
import { productGroups } from '@/lib/site-data';

export default function ProductsPage() {
  return (
    <PageShell>
      <section id="top" className="page-hero"><div className="container-narrow"><p>제품소개</p><h1>공간과 목적에 맞춘 LED 전광판 제품군</h1><span>마지막 제품군은 기획상품으로 관리됩니다.</span></div></section>
      <section className="container-section"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{productGroups.map((group)=><a key={group.slug} href={`/products/${group.slug}`} className="card"><VisualPanel label={`${group.title} 제품 이미지`} /><h3>{group.title}</h3><p>{group.summary}</p><ul className="mt-4 space-y-2 text-sm text-slate-600">{group.items.map((item)=><li key={item}>· {item}</li>)}</ul></a>)}</div></section>
    </PageShell>
  );
}
