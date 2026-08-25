import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ThreePowersSection() {
  const cards = [
    {
      image: '/Powers/power_1.jpg', // public/ 폴더에 넣을 이미지 경로
      title: '똑똑한 소비가 만드는 여유로운 삶.',
      desc: '지자체와 함께 만드는 반값 혜택으로, 당신의 자산은 지키고 여행의 격은 높이세요. 합리적인 소비가 곧 경제적 자유의 시작입니다.',
      badgeText: '지원금 활용 결제',
      subText: '₩140,000(-50%)',
    },
    {
      image: '/Powers/power_2.jpg',
      title: '"익숙한 지도를 접고, 진짜 로컬을 만나는 시간"',
      desc: '"검색창엔 나오지 않는 숨은 명소와 현지인의 정성이 담긴 특산물. 우리가 몰랐던 대한민국 지역의 빛나는 가치를 반할지도에서 가장 먼저 발견해 보세요."',
      badgeText: '현지 이야기',
      subText: '농장의 생생한 수확 현장 조회 1,240회',
    },
    {      image: '/Powers/power_3.jpg',
      title: '커뮤니티가 전하는 여행의 지혜',
      desc: '"먼저 경험한 여행자들의 생생한 꿀팁과 역 주민이 전하는 진심 어린 한마디. 혼자라면 몰랐을 여행의 지혜를 커뮤니티와 함께 나누며 상생의 기쁨"',
      badgeText: '★ 4.8 / 5',
      subText: '더 많은 후기 확인하기',
    },
  ];

  return (
    /* 최상단 section 태그에 id="service-info"를 추가하여 상단 메뉴와 연결합니다 */
    <section id="service-info" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 상단 타이틀 영역 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight mb-3">
            반값 여행의 세 가지 힘
          </h2>
          <p className="text-neutral-500 text-base md:text-lg">
            당신이 찾던 여행의 새로운 방식
          </p>
        </div>

        {/* 3단 카드 컨테이너 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-[#f2f2f2] p-8 rounded-xl flex flex-col justify-between border border-neutral-200"
            >
              <div>
                {/* 상단 이미지 영역 (정적 소스 방식) */}
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-sm bg-white">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* 타이틀 및 설명 텍스트 */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-8">
                  {card.desc}
                </p>
              </div>

              {/* 하단 회색 액션 바 (배지와 화살표 버튼) */}
              <div className="w-full bg-[#d9d9d9] px-5 py-4 rounded-lg flex items-center justify-between text-neutral-900">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-neutral-700">{card.badgeText}</span>
                  <span className="text-sm font-black text-neutral-900 mt-0.5">{card.subText}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-neutral-900 flex-shrink-0" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}