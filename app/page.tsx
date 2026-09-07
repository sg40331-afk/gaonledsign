import { ArrowRight, BookOpenCheck, CalendarDays, ClipboardList, FileText, Paintbrush, Phone, Ruler, Search, Settings, Wrench } from 'lucide-react';
import { ContactMapSection, PageShell, SectionTitle, VisualPanel } from '@/components/site-shell';
import { QuoteForm } from '@/components/quote-form';
import { applications, blogPosts, company, faqs, portfolioItems, processSteps, productGroups, reasons } from '@/lib/site-data';

const reasonImages = ['/mockup-assets/reason-design.png', '/mockup-assets/reason-production.png', '/mockup-assets/reason-install.png', '/mockup-assets/reason-maintenance.png'];
const productImages = ['/mockup-assets/product-outdoor.png', '/mockup-assets/product-indoor.png', '/mockup-assets/product-text-info.png', '/mockup-assets/product-special.png'];
const portfolioImages = ['/mockup-assets/portfolio-outdoor-clean.png', '/mockup-assets/portfolio-factory-clean.png', '/mockup-assets/portfolio-indoor-clean.png', '/mockup-assets/portfolio-small-clean.png'];
const processIcons = [Phone, Search, FileText, Paintbrush, Settings, BookOpenCheck, Wrench];

export default function Home() {
  return (
    <PageShell>
      <section id="top" className="full-bleed-hero hero-background-style">
        <div className="hero-led-motion" aria-hidden="true" />
        <div className="mx-auto flex min-h-[640px] max-w-[1200px] items-center px-5 py-16 lg:px-0">
          <div className="max-w-[660px] text-white">
            <p className="mb-5 inline-flex w-fit rounded-md border border-white/15 bg-white/8 px-3 py-2 text-sm font-bold text-[#93d5ff]">{company.founded} · {company.region}</p>
            <h1 className="max-w-2xl text-[2.25rem] font-medium leading-[1.22] tracking-normal sm:text-[2.9rem] lg:text-[3.55rem]">시선을 멈추는 빛,<br />매출을 움직이는 전광판</h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-white/78">현장에 맞춘 설계부터 제작·설치·관리까지</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/portfolio" className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 px-5 font-black text-white hover:bg-white/10">설치사례 보기</a>
              <a href="/quote" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0b7cff] px-5 font-black text-white hover:bg-[#2393ff]">빠른 견적문의 <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
              {['2002년 설립', '인천·수도권', '상담부터 설치까지'].map((item) => <span key={item} className="rounded-md border border-white/15 bg-black/20 px-4 py-3 text-sm font-bold">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16 lg:px-0">
        <SectionTitle title="가온전광판이 다른 이유" description="기획부터 유지관리까지, 오랜 현장 경험을 작은 의사결정에 담습니다." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <item.icon className="h-8 w-8 text-[#0b7cff]" />
              <h3 className="mt-4 text-lg font-black text-[#0b2238]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              <div className="mt-5"><VisualPanel label={item.imageLabel} src={reasonImages[index]} showLabel={false} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f8ff] py-16">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionTitle title="제품소개" description="용도와 공간에 맞는 LED 전광판 제품군을 제공합니다." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {productGroups.map((group, index) => (
              <a key={group.slug} href={`/products/${group.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <VisualPanel label={`${group.title} 제품 사진`} src={productImages[index]} showLabel={false} />
                <h3 className="mt-5 text-xl font-black text-[#0b2238]">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{group.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#08243f] py-16">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionTitle light title="다양한 공간에 최적화된 전광판 솔루션" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {applications.slice(0, 6).map((item) => (
              <a key={item.slug} href="/applications" className="rounded-lg border border-white/10 bg-white/8 p-5 text-white">
                <item.icon className="h-8 w-8 text-[#5fb6ff]" />
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/68">{item.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16">
        <SectionTitle title="설치사례" description="가온전광판의 설치사례는 관리자 등록 구조로 확장할 수 있습니다." />
        <div className="mb-7 flex flex-wrap justify-center gap-2">
          {['전체', '옥외 전광판', '실내 전광판', '문자·정보 전광판', '기획'].map((item) => <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">{item}</span>)}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <a key={item.slug} href={`/portfolio/${item.slug}`} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <VisualPanel label={`${item.title} 완료 사진`} src={portfolioImages[index]} showLabel={false} />
              <p className="mt-4 text-xs font-bold font-[Pretendard] text-[#0b7cff]">{item.category}</p>
              <h3 className="mt-2 font-black text-[#0b2238]">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f8ff] py-16">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionTitle title="제작·설치 진행과정" description="상담부터 운영 안내까지 차례대로 진행합니다." />
          <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-7">
            {processSteps.map((step, index) => <div key={step} className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm"><span className="mx-auto grid h-8 w-8 place-items-center rounded-full bg-[#0b7cff] text-sm font-black text-white">{index + 1}</span><p className="mt-4 text-sm font-black text-[#0b2238]">{step}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16 lg:px-0">
        <SectionTitle title="블로그 최신 글" description="공개 글 중 최신 글이 메인에 노출되는 구조입니다." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => <a key={post.slug} href={`/blog/${post.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><VisualPanel label={`${post.title} 대표 이미지`} src={post.image} showLabel={false} /><p className="mt-4 text-xs font-bold font-[Pretendard] text-[#0b7cff]">{post.category}</p><h3 className="mt-2 text-xl font-black text-[#0b2238]">{post.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{post.summary}</p><p className="mt-4 flex items-center gap-2 text-xs font-bold text-slate-500"><CalendarDays className="h-4 w-4" />{post.date}</p></a>)}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionTitle title="자주 묻는 질문" />
          <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
            {faqs.map((faq) => <details key={faq} className="group p-5"><summary className="flex cursor-pointer list-none items-center justify-between font-bold text-[#0b2238]">{faq}<span>+</span></summary><p className="mt-3 text-sm leading-6 text-slate-600">현장 조건과 제품 사양에 따라 달라질 수 있어 상담 시 자료를 확인한 뒤 안내드립니다.</p></details>)}
          </div>
        </div>
      </section>

      <section className="bg-[#08243f] py-16 text-white">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-0">
          <div>
            <p className="text-sm font-black text-[#5fb6ff]">상담 및 견적 문의</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">필요한 조건을 남겨주시면 확인 후 연락드립니다.</h2>
            <div className="mt-8 space-y-4 text-lg font-bold"><p className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#5fb6ff]" />{company.phone}</p><p>{company.email}</p><p>{company.address}</p></div>
          </div>
          <QuoteForm />
        </div>
      </section>
      <ContactMapSection />
    </PageShell>
  );
}







