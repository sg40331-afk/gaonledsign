import { PageShell, SectionTitle } from '@/components/site-shell';
import { supportCards, faqs } from '@/lib/site-data';

export default function SupportPage() {
  return (
    <PageShell>
      <section id="top" className="page-hero"><div className="container-narrow"><p>고객지원</p><h1>공지, 자료, FAQ, A/S 문의를 한곳에서 확인</h1><span>관리자 관리 기능으로 확장 가능한 구조입니다.</span></div></section>
      <section className="container-section"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{supportCards.map((item)=><article key={item.title} className="card"><item.icon className="h-8 w-8 text-[#0b7cff]"/><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>
      <section className="bg-[#f3f8ff] py-16"><div className="mx-auto max-w-[1200px] px-5 lg:px-0"><SectionTitle title="자주 묻는 질문" /><div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">{faqs.map((faq)=><details key={faq} className="p-5"><summary className="cursor-pointer font-black">{faq}</summary><p className="mt-3 text-sm text-slate-600">상세 답변은 관리자 FAQ 데이터로 추가할 수 있습니다.</p></details>)}</div></div></section>
    </PageShell>
  );
}
