import React from 'react';


export default function HeroSection() {
  return (
    <section id="hero" className="w-full pt-20 pb-20 bg-neutral-900 text-white">
      {/* 
        - 분기점 1024px (lg): 모바일에서는 세로로 쌓이고, 1024px 이상에서는 가로 2단 레이아웃으로 변경
        - items-center: 수직 중앙 정렬
      */}
      <div className="max-w-7xl mx-auto   flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* 좌측 텍스트 영역 */}
        <div className="w-full lg:w-1/2 text-center lg:text-left ">
          <span className="inline-block bg-[#ffea00] text-black font-black px-3 py-1 rounded-md text-xs md:text-sm mb-4 transform -rotate-2">
            대한민국 반값여행
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
            설레는 여행에 반하고,<br />
            <span className="text-[#ffea00]">착한 가격에 또 반하다!</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8">
            지자체 지원금과 함께하는 합리적인 여행. 
            익숙한 지도를 접고 진짜 로컬을 만나는 새로운 방식을 경험하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto bg-[#ffea00] text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors">
              사전신청 바로가기
            </button>
            <button className="w-full sm:w-auto bg-neutral-800 text-white font-bold px-8 py-4 rounded-xl hover:bg-neutral-700 transition-colors border border-neutral-700">
              가맹점 보기
            </button>
          </div>
        </div>

        {/* 우측 단일 이미지 영역 (반응형 적용) */}
        <div className="w-full  flex justify-center">
          <div className="relative w-full  ">
            {/* 
              Next.js 최적화 이미지 태그 사용 
              - fill 속성을 주어 부모 박스 크기에 반응형으로 꽉 차게 조절됩니다.
            */}
            <img
              src="/hero/mainStaticBanner.jpg" 
              alt="반할지도 메인 이미지"            
              className="w-full h-auto relative"
            />
          </div>
        </div>

      </div>
    </section>
  );
}