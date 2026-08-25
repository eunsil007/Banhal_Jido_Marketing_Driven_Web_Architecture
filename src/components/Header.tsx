'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Lock, User, ShoppingCart, Bell, Menu, X as CloseIcon } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // 메뉴 항목 및 링크 설정 (반값 혜택 링크를 #subsidy-alert로 변경)
  const menuItems = [
    { name: '반값 혜택', href: '#service-info' },
    { name: '오픈 알림', href: '#subsidy-alert' },
    { name: '신청 가이드', href: '#guide-section' },
    { name: '여행 스토리', href: '#community-section' },
    { name: '이용 가이드', href: '#service-guide' },
  ];

  return (
    <header className="w-full bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* 1. 로고 */}
        <Link href="/" className="flex items-center">
          <img
            src="/hero/top_logo.jpg" 
            alt="반할지도" 
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* 2. PC 버전 중앙 네비게이션 메뉴 */}
        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              style={{ fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif' }}
              className="text-neutral-900 font-bold text-lg tracking-tight hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 3. 우측 아이콘 그룹 및 알림 예약 버튼 + 모바일 햄버거 버튼 */}
        <div className="flex items-center gap-4 text-neutral-800">
          <div className="hidden sm:flex items-center gap-4">
            <button aria-label="검색" className="hover:text-black transition-colors">
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button aria-label="보안/인증" className="hover:text-black transition-colors">
              <Lock className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button aria-label="마이페이지" className="hover:text-black transition-colors">
              <User className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button aria-label="장바구니" className="hover:text-black transition-colors">
              <ShoppingCart className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* 반값 오픈 알림 예약하기 버튼 (PC/태블릿) */}
          <Link
            href="#subsidy-alert2"
            className="hidden xl:flex items-center gap-2 bg-[#3b4e68] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#0b2742] transition-colors shadow-sm ml-2"
          >
            <Bell className="w-4 h-4" />
            <span>반값 오픈 알림 예약하기</span>
          </Link>

          {/* 모바일 햄버거 메뉴 토글 버튼 (화면이 줄어들면 노출됨) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="모바일 메뉴 열기"
            className="lg:hidden p-2 text-neutral-900 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <CloseIcon className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

      </div>

      {/* 4. 모바일 화면용 드롭다운 메뉴 */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-b border-neutral-200 shadow-lg px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setIsOpen(false)} // 메뉴 클릭 시 모바일 메뉴 자동 닫힘
              className="text-neutral-900 font-bold text-lg py-2 border-b border-neutral-100 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          {/* 모바일 전용 알림 예약 버튼 */}
          <Link
            href="#subsidy-alert"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#3b4e68] text-white text-sm font-bold px-4 py-3 rounded-lg hover:bg-[#0b2742] transition-colors shadow-sm mt-2"
          >
            <Bell className="w-4 h-4" />
            <span>반값 오픈 알림 예약하기</span>
          </Link>
        </div>
      )}
    </header>
  );
}