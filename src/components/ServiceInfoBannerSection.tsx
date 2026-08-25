import React from 'react';

export default function ServiceInfoBannerSection() {
  return (
    /* 최상단 section 태그에 id="service-guide"를 적용하여 이용 가이드 메뉴와 연결합니다 */
    <section id="service-guide" className="w-full bg-[#0d1b2a] py-20 text-white space-y-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 상단 3개 안내 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* 아이템 1 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-md p-2.5">
              <img src="/service/service_1.png" alt="사전신청 접수" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              사전신청 접수 <span className="text-red-400 cursor-pointer hover:underline">바로가기</span>
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              *최소 여행하는 1일 전까지 신청<br />
              *예산 소진시 마감
            </p>
          </div>

          {/* 아이템 2 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-md p-2.5">
              <img src="/service/service_2.png" alt="사전신청 승인 받기" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              사전신청 승인 받기
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              *1일이내 카카오톡으로<br />
              심사결과 및 회원번호 발송
            </p>
          </div>

          {/* 아이템 3 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-md p-2.5">
              <img src="/service/service_3.png" alt="반값여행 반값쇼핑" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              반값여행! 반값쇼핑!
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              *사전 승인된 기간에 여행
            </p>
          </div>

        </div>

      </div>

      {/* 중간 구분선 영역 */}
      <div className="w-full border-t border-neutral-800"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 하단 3개 안내 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* 아이템 4 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-md p-2.5">
              <img src="/service/service_4.png" alt="정산신청" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              정산신청 <span className="text-red-400 cursor-pointer hover:underline">바로가기</span>
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              *여행 종료 다음날부터 7일 이내 신청<br />
              *예산 소진시 지원금 지급 불가<br />
              *사전승인된 여행기간에 대해 1회만<br />
              정산신청 가능(2회 이상 신청불가)
            </p>
          </div>

          {/* 아이템 5 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-md p-2.5">
              <img src="/service/service_5.png" alt="반할지도 전용 포인트" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              반할지도 전용 포인트
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              *정산신청 승인후 3일 이내 지급<br />
              *예산 소진시 지원금 지급 불가<br />
              *신청자 명의의 반할지도 포인트 지급
            </p>
          </div>

          {/* 아이템 6 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-md p-2.5">
              <img src="/service/service_6.png" alt="지역 가맹점 사용방법" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              지역 가맹점 사용방법
            </h3>
            <div className="text-xs text-neutral-400 leading-relaxed space-y-1">
              <p><strong className="text-neutral-300 font-medium">[현장 사용]</strong><br />
              전국 반할지도 가맹점 <span className="text-red-400 cursor-pointer hover:underline">바로가기</span></p>
              <p className="pt-1"><strong className="text-neutral-300 font-medium">[온라인 몰 사용]</strong><br />
              반할지도 전용 포인트 <span className="text-red-400 cursor-pointer hover:underline">바로가기</span></p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}