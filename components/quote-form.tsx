'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export function QuoteForm() {
  const [detail, setDetail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input required name="name" className="form-input" placeholder="고객명 또는 업체명" />
        <input required name="phone" className="form-input" pattern="^[0-9\-+\s]{8,}$" placeholder="연락처" />
        <input name="email" className="form-input" type="email" placeholder="이메일" />
        <input required name="region" className="form-input" placeholder="설치 지역" />
        <select required name="product" className="form-input">
          <option value="">문의 제품을 선택하세요.</option>
          <option>옥외 풀컬러 전광판</option>
          <option>실내용 LED 전광판</option>
          <option>문자·정보 전광판</option>
          <option>기획상품</option>
        </select>
        <button type="button" className="h-12 rounded-md border border-white/20 px-4 text-sm font-black text-white" onClick={() => setDetail((value) => !value)}>
          상세 견적 작성
        </button>
      </div>
      {detail ? (
        <div className="grid gap-4 rounded-lg border border-white/15 bg-white/6 p-4 md:grid-cols-2">
          {['설치 장소', '예상 가로 크기', '예상 세로 크기', '실내·옥외', '단면·양면', '희망 설치일', '예산 범위'].map((label) => (
            <input key={label} className="form-input" placeholder={label} />
          ))}
          <label className="form-input flex cursor-pointer items-center text-white/58">현장 사진 <input type="file" accept="image/*" className="ml-3 text-xs" /></label>
          <label className="form-input flex cursor-pointer items-center text-white/58">참고 이미지 <input type="file" accept="image/*" className="ml-3 text-xs" /></label>
        </div>
      ) : null}
      <textarea required name="message" className="form-input min-h-32 resize-y" placeholder="문의 내용을 입력하세요." />
      <label className="flex items-start gap-3 text-sm text-white/72">
        <input required type="checkbox" className="mt-1 h-4 w-4" />
        개인정보 수집 및 견적 상담을 위한 연락에 동의합니다.
      </label>
      <button type="submit" className="inline-flex h-13 items-center justify-center gap-2 rounded-md bg-[#0b7cff] px-5 font-black text-white shadow-lg transition hover:bg-[#2393ff]">
        <Send className="h-4 w-4" aria-hidden="true" />
        견적 문의하기
      </button>
      {submitted ? (
        <p className="rounded-md bg-white px-4 py-3 text-sm font-bold text-[#08243f]">
          문의 저장과 이메일 알림은 연결 필요 상태입니다. 현재 입력값 검증과 접수 화면 흐름까지 확인되었습니다.
        </p>
      ) : null}
      <p className="text-xs text-white/55">첨부 가능 파일: jpg, png, pdf. 실제 저장소 연결 시 용량 제한과 관리자 알림을 적용합니다.</p>
    </form>
  );
}
