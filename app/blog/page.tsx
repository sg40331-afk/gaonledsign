import { CalendarDays } from 'lucide-react';
import { PageShell, SectionTitle, VisualPanel } from '@/components/site-shell';
import { blogPosts } from '@/lib/site-data';

export default function BlogPage() {
  return (
    <PageShell>
      <section id="top" className="page-hero">
        <div className="container-narrow">
          <p>블로그</p>
          <h1>전광판 기초정보와 제작·설치 이야기</h1>
          <span>제품 선택, 설치 준비, 운영 관리까지 실제 상담에 도움이 되는 글을 정리했습니다.</span>
        </div>
      </section>
      <section className="container-section">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {['전체 글','전광판 기초정보','제품 선택 가이드','제작·설치 이야기','설치사례 이야기','미니전광판·기획상품','전광판 관리방법','가온전광판 소식'].map((item)=><span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold">{item}</span>)}
        </div>
        <div className="mb-8"><input className="w-full rounded-md border border-slate-200 px-4 py-3" placeholder="제목과 본문 검색" /></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post)=><a key={post.slug} href={`/blog/${post.slug}`} className="card"><VisualPanel label={`${post.title} 대표 이미지`} src={post.image} showLabel={false} /><p className="mt-4 text-xs font-bold font-[Pretendard] text-[#0b7cff]">{post.category}</p><h3>{post.title}</h3><p>{post.summary}</p><p className="mt-4 flex items-center gap-2 text-xs font-bold text-slate-500"><CalendarDays className="h-4 w-4" />{post.date}</p></a>)}
        </div>
      </section>
    </PageShell>
  );
}

