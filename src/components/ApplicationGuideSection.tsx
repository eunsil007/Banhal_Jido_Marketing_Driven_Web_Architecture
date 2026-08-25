import React from 'react';

export default function ApplicationGuideSection() {
  const steps = [
    {
      stepNum: '1',
      title: '1. 각 지자체 홈페이지 접수',
      desc: '세금으로 떠나는 반값 여행,\n지자체 홈페이지에서 접수 중!',
      image: 'Guide/guide_1.png',
    },
    {
      stepNum: '2',
      title: '2. 신청기간내 여행경비 지출',
      desc: '기간 내 즐겁게 지출하고,\n영수증 챙겨 지원금 받으세요!',
      image: 'Guide/guide_2.png',
    },
    {
      stepNum: '3',
      title: '3. 여행경비 50% 환급페이 지원',
      desc: '증빙 서류만 제출하면 끝!\n실제 지출 50% 환급 혜택을 누리세요.',
      image: 'Guide/guide_3.png',
    },
  ];

  return (
    /* 최상단 section 태그에 id="guide-section"을 추가했습니다 */
    <section id="guide-section" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* 상단 타이틀 */}
        <h2 className="text-2xl md:text-4xl font-black text-neutral-900 tracking-tight mb-8">
          &quot;대한민국 반값여행&quot; 이렇게 신청하세요!
        </h2>

        {/* 상단 신청방법 / 신청자격 박스 (두 줄/세로 배치) */}
        <div className="flex flex-col items-center justify-center gap-3 mb-16 text-sm font-bold">
          {/* 신청방법 줄 */}
          <div className="flex items-center bg-white border border-neutral-200 rounded-lg shadow-sm overflow-hidden w-full max-w-xl">
            <span className="bg-red-600 text-white px-5 py-3 text-xs font-black flex-shrink-0">신청방법</span>
            <span className="px-5 py-3 text-neutral-800 text-xs md:text-sm font-medium text-left w-full">4월~8월 각 지자체 홈페이지 접수</span>
          </div>
          
          {/* 신청자격 줄 */}
          <div className="flex items-center bg-white border border-neutral-200 rounded-lg shadow-sm overflow-hidden w-full max-w-xl">
            <span className="bg-red-600 text-white px-5 py-3 text-xs font-black flex-shrink-0">신청자격</span>
            <span className="px-5 py-3 text-neutral-800 text-xs md:text-sm font-medium text-left w-full flex flex-wrap items-center gap-1">
              <span>해당 지자체 관외거주자</span>
              <span className="text-neutral-500 font-normal text-[11px]">(지자체와 행정구역상 인접한 지역주민은 참여불가)</span>
            </span>
          </div>
        </div>

        {/* 3단계 카드 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#f5f5f5] border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* 일러스트 이미지 영역 (원형 rounded-full 적용) */}
                <div className="w-36 h-36 mx-auto mb-6 flex items-center justify-center overflow-hidden bg-white rounded-full shadow-inner border border-neutral-200">
                  <img
                    src={item.image}
                    alt={`단계 ${item.stepNum}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 단계 타이틀 */}
                <h3 className="font-bold text-lg text-neutral-900 mb-3">
                  {item.title}
                </h3>

                {/* 설명 텍스트 (줄바꿈 반영) */}
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed whitespace-pre-line mb-8">
                  {item.desc}
                </p>
              </div>

              {/* 하단 더보기 버튼 */}
              <button className="w-full bg-[#11263c] text-white text-xs font-bold py-3.5 rounded-xl hover:bg-black transition-colors flex items-center justify-center gap-1">
                더보기 &gt;
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}