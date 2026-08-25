import React from 'react';
import { Instagram, Facebook, MessageCircle, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d1b2a] text-neutral-300 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* 좌측: 로고 및 기업 정보 */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          
          {/* 브랜드 로고 이미지 영역 */}
          <div className="flex-shrink-0">
            <img 
              src="/hero/footer_logo.png" 
              alt="반할지도" 
              className="h-10 object-contain" 
            />
          </div>

          {/* 사업자 정보 텍스트 (텍스트 크기 확대) */}
          <div className="text-sm space-y-1.5 text-neutral-300 leading-relaxed font-medium">
            <p className="text-white font-bold">상호: (주)반할지도</p>
            <p>대표자: 은00</p>
            <p>주소: 서울특별시 00구 00로 00, 0층</p>
            <p>사업자등록번호: 000-00-00000</p>
            <p>통신판매업 신고번호: 제 2026-서울00-0000호</p>
          </div>

        </div>

        {/* 우측: 고객센터 및 소셜 아이콘 */}
        <div className="flex flex-col items-start md:items-end gap-4">
          
          {/* 고객센터 정보 (텍스트 크기 확대) */}
          <div className="text-left md:text-right space-y-1">
            <span className="text-xs text-neutral-400 block font-semibold">고객센터</span>
            <p className="text-2xl font-black text-white tracking-tight">1677-0000</p>
            <p className="text-xs text-neutral-300 leading-tight">
              서울 종로구 (상세주소)<br />
              평일 09:00 - 18:00
            </p>
          </div>

          {/* 소셜 미디어 아이콘 4종 (크기 확대) */}
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-8 h-8 rounded-lg bg-[#1b2a3a] flex items-center justify-center text-white cursor-pointer hover:bg-neutral-700 transition-colors">
              <Instagram className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-[#1b2a3a] flex items-center justify-center text-white cursor-pointer hover:bg-neutral-700 transition-colors">
              <Facebook className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-[#1b2a3a] flex items-center justify-center text-white cursor-pointer hover:bg-neutral-700 transition-colors">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-[#1b2a3a] flex items-center justify-center text-white cursor-pointer hover:bg-neutral-700 transition-colors">
              <Youtube className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}