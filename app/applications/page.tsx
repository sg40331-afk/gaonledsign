import { PageShell, SectionTitle } from '@/components/site-shell';
import { applications } from '@/lib/site-data';

export default function ApplicationsPage() {
  return (
    <PageShell>
      <section id="top" className="page-hero"><div className="container-narrow"><p>적용 분야</p><h1>공간별로 달라지는 전광판 활용 방식</h1><span>추천 제품과 설치 전 확인사항을 함께 정리했습니다.</span></div></section>
      <section className="bg-[#08243f] py-16"><div className="mx-auto max-w-[1200px] px-5 lg:px-0"><SectionTitle light title="적용 분야" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{applications.map((item)=><article key={item.slug} className="rounded-lg border border-white/10 bg-white/8 p-6 text-white"><item.icon className="h-8 w-8 text-[#5fb6ff]"/><h3 className="mt-4 text-xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/70">활용 방법: {item.detail}</p><p className="mt-3 text-sm leading-6 text-white/70">추천 제품: {item.products}</p><p className="mt-3 text-sm leading-6 text-white/70">설치 시 확인사항: 시야각, 전원, 고정 방식, 콘텐츠 송출 환경</p><a href="/quote" className="mt-5 inline-flex rounded-md bg-[#0b7cff] px-4 py-3 text-sm font-black text-white">견적문의</a></article>)}</div></div></section>
    </PageShell>
  );
}
