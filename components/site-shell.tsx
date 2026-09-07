import { ArrowRight, Menu, X, MapPin } from 'lucide-react';
import { company, contactItems, navItems } from '@/lib/site-data';

type VisualPanelProps = { label: string; tall?: boolean; src?: string; animated?: boolean; showLabel?: boolean };

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#061626]/96 text-white shadow-[0_8px_30px_rgb(0_0_0/18%)] backdrop-blur">
      <div className="mx-auto flex h-18 max-w-[1320px] items-center px-5 xl:px-0">
        <a href="/" className="flex shrink-0 items-center gap-3" aria-label="가온전광판 홈">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-[#0b7cff] font-black text-white">G</span>
          <span className="leading-none">
            <span className="block text-lg font-black tracking-normal">GAON</span>
            <span className="block text-xs font-semibold text-white/78">가온전광판</span>
          </span>
        </a>
        <nav className="ml-auto hidden items-center justify-end gap-5 text-sm font-semibold text-white/78 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f8cff]">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="/quote" className="ml-5 hidden h-11 shrink-0 items-center gap-2 rounded-md bg-[#0b7cff] px-4 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition hover:bg-[#2393ff] lg:inline-flex">
          빠른 견적문의 <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <details className="mobile-menu ml-auto lg:hidden">
          <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-md border border-white/15 bg-white/5" aria-label="모바일 메뉴 열기">
            <Menu className="open-icon h-5 w-5" aria-hidden="true" />
            <X className="close-icon hidden h-5 w-5" aria-hidden="true" />
          </summary>
          <div className="fixed inset-x-0 top-18 border-t border-white/10 bg-[#061626] px-5 py-5 shadow-2xl">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded-md px-3 py-3 text-base font-bold text-white/86 hover:bg-white/8">
                  {item.label}
                </a>
              ))}
              <a href="/quote" className="mt-3 rounded-md bg-[#0b7cff] px-3 py-3 text-center text-base font-black text-white">빠른 견적문의</a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#061626] text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-0">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#0b7cff] font-black">G</span>
            <div><p className="text-lg font-black">GAON</p><p className="text-xs font-semibold text-white/68">가온전광판</p></div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/68">{company.tagline}</p>
          <p className="mt-8 text-xs text-white/46">© 2026 가온전광판. All rights reserved.</p>
        </div>
        <div className="text-sm leading-7 text-white/70"><p className="mb-3 font-bold text-white">회사정보</p><p>대표자명: {company.owner}</p><p>사업자등록번호: {company.businessNumber}</p><p>운영시간: {company.hours}</p><p>주소: {company.address}</p><p>전화번호: {company.phone}</p><p>이메일: {company.email}</p></div>
        <div><p className="mb-3 text-sm font-bold">바로가기</p><div className="grid grid-cols-2 gap-2 text-sm text-white/70">{navItems.map((item) => <a key={item.href} href={item.href} className="hover:text-white">{item.label}</a>)}<a href="/privacy" className="hover:text-white">개인정보처리방침</a><a href="/terms" className="hover:text-white">이용약관</a></div></div>
        <div><p className="mb-3 text-sm font-bold">팔로우</p><div className="space-y-2 text-sm text-white/70">{['유튜브 [링크 입력 필요]', '인스타그램 [링크 입력 필요]', '네이버 블로그 [링크 입력 필요]', '스마트스토어 [링크 입력 필요]'].map((item) => <p key={item}>{item}</p>)}</div></div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-background text-foreground"><Header />{children}<Footer /><a href="#top" className="fixed bottom-5 right-5 z-30 grid h-11 w-11 place-items-center rounded-full bg-[#0b7cff] text-sm font-black text-white shadow-xl" aria-label="최상단으로 이동">↑</a></main>;
}

export function SectionTitle({ eyebrow, title, description, light = false }: { eyebrow?: string; title: string; description?: string; light?: boolean }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center">{eyebrow ? <p className={`text-sm font-black ${light ? 'text-[#5fb6ff]' : 'text-[#0b7cff]'}`}>{eyebrow}</p> : null}<h2 className={`mt-3 text-3xl font-black tracking-normal sm:text-4xl ${light ? 'text-white' : 'text-[#0b2238]'}`}>{title}</h2>{description ? <p className={`mt-4 leading-7 ${light ? 'text-white/72' : 'text-slate-600'}`}>{description}</p> : null}</div>;
}

export function VisualPanel({ label, tall = false, src, animated = false, showLabel = true }: VisualPanelProps) {
  return (
    <div className={`visual-panel relative overflow-hidden rounded-md border border-slate-200 bg-[#071d31] ${tall ? 'min-h-[320px]' : 'h-42'} ${animated ? 'hero-led-panel' : ''}`} role="img" aria-label={label}>
      {src ? <img src={src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /> : <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#1ea7ff_0_12%,transparent_26%),linear-gradient(135deg,#071d31,#0b3160_45%,#02111f)]" />}
      {src ? <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /> : null}
      {!src ? <div className="absolute inset-x-5 top-1/2 h-16 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,#0b7cff,#47e4ff,#ff7a1a)] blur-md opacity-80" /> : null}
      {!src ? <div className="absolute inset-x-7 top-1/2 h-10 -translate-y-1/2 rounded-md border border-white/20 bg-black/35 shadow-[0_0_28px_rgb(47_228_255/35%)]" /> : null}
      {animated ? <div className="animated-led-screen" aria-hidden="true" /> : null}
      {showLabel ? <p className="absolute bottom-4 left-4 rounded bg-black/55 px-3 py-1 text-xs font-bold text-white">{label}</p> : null}
    </div>
  );
}

export function ContactMapSection() {
  const encodedAddress = '%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EB%8F%99%EA%B5%AC%20%ED%98%B8%EA%B5%AC%ED%8F%AC%EB%A1%9C%2050%20513-2';
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const googleEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&z=16&output=embed`;

  return (
    <section className="bg-white py-16" id="map">
      <div className="mx-auto grid max-w-[1200px] gap-5 px-5 lg:grid-cols-[320px_1fr] lg:px-0">
        <aside className="rounded-lg bg-[#08243f] p-8 text-white shadow-xl">
          <h2 className="text-3xl font-black">오시는 길</h2>
          <div className="mt-8 space-y-6">
            {contactItems.map((item) => (
              <div key={item.label} className="flex gap-3">
                <item.icon className="mt-1 h-5 w-5 text-[#5fb6ff]" aria-hidden="true" />
                <div>
                  <p className="text-xs font-black text-white/55">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold leading-6">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <a href={`tel:${company.phone}`} className="rounded-md bg-white px-3 py-2 text-sm font-black text-[#08243f]">전화 연결</a>
            <a href={`mailto:${company.email}`} className="rounded-md border border-white/20 px-3 py-2 text-sm font-black">메일 작성</a>
          </div>
        </aside>
        <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-slate-200 bg-[#eef6ff] shadow-sm">
          <iframe
            title="가온전광판 구글지도"
            src={googleEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-4 right-4 flex flex-wrap justify-end gap-2">
            <a href={googleMapUrl} target="_blank" rel="noreferrer" className="rounded-md bg-white px-3 py-2 text-sm font-black text-[#08243f] shadow">구글지도 크게보기</a>
            <button type="button" className="rounded-md bg-[#0b7cff] px-3 py-2 text-sm font-black text-white shadow">주소 복사</button>
          </div>
        </div>
      </div>
    </section>
  );
}
