import React from 'react';

export default function SearchBar() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      {/* 검색 입력 및 버튼 박스 */}
      <div className="w-full max-w-2xl flex items-center border border-neutral-400 bg-white">
        <input
          type="text"
          placeholder="예: 강릉, 경주, 제주, 부산 등"
          className="w-full px-5 py-4 text-neutral-800 placeholder-neutral-400 focus:outline-none text-base bg-transparent"
        />
        <button 
          type="button"
          className="bg-black text-white px-8 py-4 font-medium hover:bg-neutral-800 transition-colors flex-shrink-0"
        >
          목적지(지역)
        </button>
      </div>

      {/* 하단 안내 텍스트 */}
      <p className="mt-3 text-neutral-600 text-sm">
        목적지(지역)을 검색해보세요
      </p>
    </div>
  );
}