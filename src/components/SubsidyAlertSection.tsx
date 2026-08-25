"use client"; // 이 줄을 반드시 추가해주세요!

import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function SubsidyAlertSection() {
  const [selectedRegion, setSelectedRegion] = useState('강원');
  const [agreeRequired, setAgreeRequired] = useState(true);
  const [agreeOptional, setAgreeOptional] = useState(false);

  const regions = ['전체', '강원', '제주', '경주/포항', '부산/남해', '전주/군산'];

  return (
    /* 최상단 section 태그에 id="subsidy-alert"를 추가하여 상단 오픈 알림 메뉴 및 예약 버튼과 연결합니다 */
    <section id="subsidy-alert2" className="w-full py-24 bg-white border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* 상단 타이틀 */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-neutral-900">
            원하는 지역의 지원금이 열릴 때, 가장 먼저 알려 드릴까요?
          </h2>
        </div>

        {/* 메인 컨테이너 박스 */}
        <div className="bg-white border border-neutral-300 rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
          
          {/* 1. [지역 선택칩] */}
          <div>
            <span className="text-xs font-bold text-neutral-500 mb-3 block">
              [지역 선택칩]
            </span>
            <div className="flex flex-wrap gap-2">
              {regions.map((region, idx) => {
                const isSelected = selectedRegion === region;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedRegion(region)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                      isSelected
                        ? 'bg-[#d97762] text-white border-[#d97762] shadow-sm'
                        : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
                    }`}
                  >
                    {region}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. [심플한 입력] */}
          <div>
            <span className="text-xs font-bold text-neutral-500 mb-3 block">
              [심플한 입력]
            </span>
            <div className="flex items-center w-full max-w-2xl border border-neutral-400 bg-white rounded overflow-hidden">
              <input
                type="text"
                placeholder="핸드폰 번호 또는 이메일 입력 (ex. 010-1234-5678)"
                className="w-full px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none bg-transparent"
              />
              <button
                type="button"
                className="bg-black text-white text-xs font-bold px-6 py-3 hover:bg-neutral-800 transition-colors flex-shrink-0"
              >
                입력완료
              </button>
            </div>
            <p className="mt-2 text-xs text-neutral-500">
              *현재 <strong className="text-neutral-900 font-bold">{selectedRegion}도</strong> 알림 대기자 <span className="text-red-500 font-bold">1,240명</span>
            </p>
          </div>

          {/* 3. [마케팅 동의 체크] 및 예약 버튼 영역 */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col md:flex-row md:items-end justify-between gap-6">
            
            {/* 체크박스 그룹 */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-neutral-500 block">
                [마케팅 동의 체크]
              </span>
              
              {/* 필수 동의 */}
              <label className="flex items-center gap-2.5 cursor-pointer text-xs md:text-sm text-neutral-800">
                <input
                  type="checkbox"
                  checked={agreeRequired}
                  onChange={(e) => setAgreeRequired(e.target.checked)}
                  className="hidden"
                />
                <div className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${agreeRequired ? 'bg-red-500 border-red-500 text-white' : 'border-neutral-300 bg-white'}`}>
                  {agreeRequired && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span><strong className="text-neutral-900">[필수]</strong> 개인정보 수집 및 알림 전송 동의</span>
              </label>

              {/* 선택 동의 */}
              <label className="flex items-center gap-2.5 cursor-pointer text-xs md:text-sm text-neutral-800">
                <input
                  type="checkbox"
                  checked={agreeOptional}
                  onChange={(e) => setAgreeOptional(e.target.checked)}
                  className="hidden"
                />
                <div className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${agreeOptional ? 'bg-red-500 border-red-500 text-white' : 'border-neutral-300 bg-white'}`}>
                  {agreeOptional && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span><strong className="text-neutral-500">[선택]</strong> 야간(21시~08시) 혜택 알림 동의</span>
              </label>
            </div>

            {/* 우측 하단 반값 오픈 알림 예약하기 버튼 */}
            <button
              type="button"
              className="bg-[#3a4f66] text-white text-sm font-bold px-8 py-4 rounded-xl shadow-md hover:bg-[#2c3e50] transition-colors flex-shrink-0"
            >
              반값 오픈 알림 예약하기
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}