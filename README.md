# 가온전광판 홈페이지

LED 전광판 설계·제작·설치 업체인 가온전광판의 다페이지 반응형 홈페이지입니다.

## 기술 구조

- Vinext 기반 React 앱 라우팅
- Tailwind CSS 전역 디자인 토큰
- shadcn/ui 컴포넌트 라이브러리 보존
- lucide-react 아이콘 사용
- 공통 데이터: `lib/site-data.ts`
- 공통 레이아웃: `components/site-shell.tsx`
- 견적문의 폼: `components/quote-form.tsx`

## 주요 경로

- `/` 메인
- `/company` 회사소개
- `/products` 제품소개
- `/products/[slug]` 제품 상세
- `/applications` 적용 분야
- `/portfolio` 설치사례
- `/portfolio/[slug]` 설치사례 상세
- `/process` 제작·설치
- `/blog` 블로그
- `/blog/[slug]` 블로그 상세
- `/admin/blog` 블로그·설치사례 관리자 연결 화면
- `/support` 고객지원
- `/quote` 견적문의
- `/privacy` 개인정보처리방침
- `/terms` 이용약관

## 운영 연결 필요 항목

- 관리자 서버 인증
- 데이터베이스 영구 저장
- 이미지 업로드 저장소
- 문의 저장 및 이메일 알림
- 실제 지도 API
- 대표자명, 사업자등록번호, 운영시간
- 실제 SNS 및 외부 채널 링크
- 실제 설치사례 사진과 제품 사진

## 실행

```bash
pnpm dev
pnpm build
```

`pnpm build` 기준으로 빌드가 통과했습니다.
