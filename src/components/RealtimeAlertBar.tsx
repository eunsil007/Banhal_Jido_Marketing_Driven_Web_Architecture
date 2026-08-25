import React from 'react';
import { Timer, Users, MapPin, Tag } from 'lucide-react';

export default function RealtimeAlertBar() {
  const alerts = [
    {
      icon: <Timer className="w-6 h-6 text-white stroke-[1.5]" />,
      title: '강릉 정동진 해돋이 투어',
      highlight: '잔여 3석!',
    },
    {
      icon: <Users className="w-6 h-6 text-white stroke-[1.5]" />,
      title: '경주야경투어보고있음!',
      highlight: '현재 128명이',
      isPrefix: true, // 강조 텍스트가 앞에 오는 경우
    },
    {
      icon: <MapPin className="w-6 h-6 text-white stroke-[1.5]" />,
      title: '오늘만 지자체 지원금 W45,000잔여!',
      highlight: '제주오름&해녀체험',
      isPrefix: true,
    },
    {
      icon: <Tag className="w-6 h-6 text-white stroke-[1.5]" />,
      title: '전국 숙소 반값 쿠폰',
      highlight: '10분 후 마감',
      suffix: ' 예정!',
    },
  ];

  return (
    <section className="w-full bg-[#0d1b2a] py-8 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 4분할 그리드 레이아웃 (모바일 1단 -> PC 4단) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          {alerts.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 pt-6 lg:pt-0 lg:px-4 first:pt-0 first:lg:pl-0">
              {/* 아이콘 영역 */}
              <div className="flex-shrink-0">
                {item.icon}
              </div>

              {/* 텍스트 영역 */}
              <div className="flex flex-col text-sm">
                {item.isPrefix ? (
                  <>
                    <span className="text-red-400 font-bold">{item.highlight}</span>
                    <span className="text-neutral-200">{item.title}</span>
                  </>
                ) : (
                  <>
                    <span className="text-neutral-200">{item.title}</span>
                    <span className="text-red-400 font-bold">
                      {item.highlight}
                      {item.suffix && <span className="text-neutral-200 font-normal">{item.suffix}</span>}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}