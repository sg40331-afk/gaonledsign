import { PageShell, SectionTitle } from '@/components/site-shell';
import { processSteps } from '@/lib/site-data';

export default function ProcessPage() {
  return (
    <PageShell>
      <section id="top" className="page-hero"><div className="container-narrow"><p>제작·설치</p><h1>상담부터 사후관리까지 이어지는 제작 과정</h1><span>전광판 사양 선택법, 설치 전 확인사항, 송출 방법, 유지관리 안내</span></div></section>
      <section className="container-section"><SectionTitle title="제작·설치 과정" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{processSteps.map((step,index)=><article key={step} className="card"><span className="text-sm font-black text-[#0b7cff]">0{index+1}</span><h3>{step}</h3><p>필요 자료와 확인 항목을 단계별로 안내합니다.</p></article>)}</div></section>
      <section className="bg-[#f3f8ff] py-16"><div className="mx-auto max-w-[1200px] px-5 lg:px-0"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">{['전광판 사양 선택법','설치 전 확인사항','콘텐츠 송출 방법','유지관리 안내','자주 묻는 질문'].map((item)=><article key={item} className="card"><h3>{item}</h3><p>관리자가 내용을 추가할 수 있는 정보 구조입니다.</p></article>)}</div></div></section>
    </PageShell>
  );
}
