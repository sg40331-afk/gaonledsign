import { PageShell, SectionTitle } from '@/components/site-shell';

const editorFeatures = ['새 글 작성', '기존 글 수정', '삭제 전 재확인', '임시저장', '공개·비공개', '예약 발행', '카테고리 선택', '대표 이미지 등록', '본문 이미지 여러 장 삽입', '이미지 크기 조절', '이미지 정렬', '이미지 대체텍스트', '글자 크기', '서체 선택', '굵게', '글자색', '배경색', '밑줄', '제목 1·2·3', '본문 스타일', '정렬', '목록', '표', '링크', '구분선', '유튜브 영상', '관련 제품 연결', '관련 설치사례 연결', '검색용 제목', '검색용 설명', '미리보기', '저장 및 발행'];

export default function AdminBlogPage() {
  return (
    <PageShell>
      <section id="top" className="page-hero"><div className="container-narrow"><p>관리자</p><h1>블로그·설치사례 관리</h1><span>서버 인증, 데이터베이스, 이미지 저장소 연결 필요</span></div></section>
      <section className="container-section grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="card"><h2 className="text-2xl font-black text-[#0b2238]">관리자 로그인</h2><p className="mt-3 text-sm leading-6 text-slate-600">관리자 이메일과 비밀번호는 코드에 직접 넣지 않았습니다. 실제 운영 시 환경변수 기반 서버 인증을 연결해야 합니다.</p><div className="mt-6 grid gap-3"><input className="rounded-md border border-slate-200 px-4 py-3" placeholder="관리자 이메일" /><input className="rounded-md border border-slate-200 px-4 py-3" placeholder="비밀번호" type="password" /><button className="primary-link" type="button">로그인 연결 필요</button></div></aside>
        <div><SectionTitle title="리치 텍스트 편집 기능" description="현재 복사본에는 실제 편집기와 저장소가 없어서 기능 명세와 확장 지점을 보존했습니다." /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{editorFeatures.map((item)=><div key={item} className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">{item}</div>)}</div></div>
      </section>
      <section className="bg-[#f3f8ff] py-16"><div className="mx-auto max-w-[1200px] px-5 lg:px-0"><div className="grid gap-5 md:grid-cols-3">{['블로그 글 관리', '설치사례 사진 관리', '문의내역 확인'].map((item)=><article key={item} className="card"><h3>{item}</h3><p>데이터 및 이미지 영구 저장은 D1/R2 또는 기존 저장소 연결 후 활성화됩니다.</p></article>)}</div></div></section>
    </PageShell>
  );
}
