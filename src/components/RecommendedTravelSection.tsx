import React from 'react';
import { Star } from 'lucide-react';

export default function RecommendedTravelSection() {
  // 6개의 추천 상품 데이터 (시안 내용 반영)
  const products = [
    { title: '강원 (대관령 하늘목장)', image: '/Guide/product_1.png', tag: '[오늘마감]' },
    { title: '강원 (평창 삼양목장)', image: '/Guide/product_2.png', tag: '[오늘마감]' },
    { title: '전남 (강진 석문공원)', image: '/Guide/product_3.png', tag: '[오늘마감]' },
    { title: '남해 (보물섬전망대)', image: '/Guide/product_4.png', tag: '[오늘마감]' },
    { title: '밀양 위양지관광농원', image: '/Guide/product_5.png', tag: null },
    { title: '경남 (남해독일마을)', image: '/Guide/product_6.png', tag: '[오늘마감]' },
  ];

  return (
    /* 최상단 section 태그에 id="subsidy-alert"를 추가하여 상단 메뉴와 연결합니다 */
    <section id="subsidy-alert" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 상단 타이틀 영역 */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-neutral-900 tracking-tight">
            세 가지 힘으로 완성된, 오늘만 이 가격! 추천 반값 여행
          </h2>
        </div>

        {/* 2행 3열 상품 카드 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-neutral-300 rounded-xl p-4 flex items-center gap-4 shadow-sm"
            >
              {/* 왼쪽 이미지 영역 (정적 소스 방식) */}
              <div className="relative w-36 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.tag && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* 오른쪽 상세 텍스트 및 가격 영역 */}
              <div className="flex flex-col justify-between flex-grow h-full py-1">
                <div>
                  <h3 className="font-bold text-sm text-neutral-900 mb-0.5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 mb-2">
                    지원이 포함된 선착순 반값 특가!
                  </p>
                  
                  <div className="flex items-center gap-1.5 text-xs mb-1">
                    <span className="line-through text-neutral-400 text-[11px]">₩280,000</span>
                    <span className="text-red-500 font-bold">50% ↓</span>
                    <div className="flex items-center text-amber-500 font-bold ml-auto text-[11px]">
                      <Star className="w-3 h-3 fill-current mr-0.5" /> 4.8
                    </div>
                  </div>
                </div>

                {/* 가격 및 상세보기 버튼 */}
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-100">
                  <span className="text-base font-black text-neutral-900">₩140,000</span>
                  <button className="bg-[#0b2742] text-white text-[11px] font-bold px-3 py-1.5 rounded hover:bg-black transition-colors">
                    상세보기 &gt;
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 하단 페이지네이션 인디케이터 (점 4개) */}
        <div className="flex items-center justify-center gap-2.5 mt-12">
          <span className="w-3 h-3 rounded-full bg-neutral-300"></span>
          <span className="w-3 h-3 rounded-full bg-neutral-400"></span>
          <span className="w-3 h-3 rounded-full bg-neutral-300"></span>
          <span className="w-3 h-3 rounded-full bg-neutral-300"></span>
        </div>

      </div>
    </section>
  );
}