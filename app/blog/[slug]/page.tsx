import { CalendarDays } from 'lucide-react';
import { PageShell, SectionTitle, VisualPanel } from '@/components/site-shell';
import { blogPosts } from '@/lib/site-data';

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug) ?? blogPosts[0];

  return (
    <PageShell>
      <section id="top" className="page-hero">
        <div className="container-narrow">
          <p>{post.category}</p>
          <h1>{post.title}</h1>
          <span>{post.date}</span>
        </div>
      </section>
      <article className="container-section max-w-[900px]">
        <VisualPanel label={`${post.title} 대표 이미지`} src={post.image} tall showLabel={false} />
        <div className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-500"><CalendarDays className="h-4 w-4" />{post.date}</div>
        <p className="mt-5 text-xl font-bold leading-8 text-[#0b2238]">{post.summary}</p>
        <SectionTitle title="목차" description={post.sections.map((section, index) => `${index + 1}. ${section.heading}`).join('  ')} />
        <div className="prose-area">
          {post.sections.map((section) => (
            <section key={section.heading} className="mt-9">
              <h2 className="text-2xl font-black text-[#0b2238]">{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-10 rounded-lg bg-[#f3f8ff] p-6">
          <h2 className="text-xl font-black text-[#0b2238]">상담이 필요하신가요?</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">현장 사진과 설치 목적을 알려주시면 적합한 제품군과 확인사항을 안내해 드립니다.</p>
          <div className="mt-5 flex flex-wrap gap-3"><a className="primary-link" href="/quote">견적문의</a><a className="secondary-link" href="tel:032-811-5916">전화상담</a></div>
        </div>
      </article>
    </PageShell>
  );
}
