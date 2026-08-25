import React from 'react';
import { Linkedin, X, Globe } from 'lucide-react';

export default function CommunityProfileSection() {
  const members = [
    {
      name: '이영수',
      desc: '커뮤니티 덕분에 꿈에 그리던 로컬여행! 여행 문화 전문가로서 누구나 저렴하게 여행할 수 있는 세상을 꿈꾼다.',
      image: '/team/team_1.png',
    },
    {
      name: '최한열',
      desc: '먼저 다녀온 팁 지원으로 잊지 못할 추억! 여행 문화 전문가로서 누구나 저렴하게 여행할 수 있는 세상을 꿈꾼다.',
      image: '/team/team_2.png',
    },
    {
      name: '정수정',
      desc: '반값이라 두 번 갔어요! 여행 문화 전문가로서 누구나 저렴하게 여행할 수 있는 세상을 꿈꾼다.',
      image: '/team/team_3.png',
    },
    {
      name: '서동준',
      desc: '로컬 재발견! 새로운 여행의미를 느꼈어요! 여행 문화 전문가로서 누구나 저렴하게 여행할 수 있는 세상을 꿈꾼다.',
      image: '/team/team_4.png',
    },
    {
      name: '강호진',
      desc: '여행 문화마켓에서 만난 로컬의 지혜! 전문가로서 누구나 저렴하게 여행할 수 있는 세상을 꿈꾼다.',
      image: '/team/team_5.png',
    },
    {
      name: '윤하윤',
      desc: '먼저 다녀온 팁 지원으로 잊지 못할 추억! 여행 문화 전문가로서 누구나 저렴하게 여행할 수 있는 세상을 꿈꾼다.',
      image: '/team/team_6.png',
    },
    {
      name: '김민준',
      desc: '반값 지원으로 맛있게! 여행 문화전문가로서 누구나 저렴하게 여행할 수 있는 세상을 꿈꾼다.',
      image: '/team/team_7.png',
    },
    {
      name: '정수미',
      desc: '먼저 다녀온 팁 지원으로 잊지 못할 추억! 여행 문화 전문가로서 누구나 저렴하게 여행할 수 있는 세상을 꿈꾼다.',
      image: '/team/team_8.png',
    },
  ];

  return (
    /* 최상단 section 태그에 id="community-section"을 추가하여 상단 메뉴와 연결합니다 */
    <section id="community-section" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 상단 타이틀 영역 */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-neutral-900 mb-3 tracking-tight">
            &quot;나도 가고 싶다!&quot;
          </h2>
          <p className="text-neutral-500 text-xs md:text-sm">
            여행을 사랑하는 사람들이 모여 반값 여행의 꿈을 현실로 만들고 있습니다.
          </p>
        </div>

        {/* 2행 4열 프로필 카드 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <div key={idx} className="flex flex-col">
              
              {/* 상단 이미지 영역 (정적 소스 방식) */}
              <div className="w-full h-72 rounded-xl overflow-hidden bg-neutral-200 mb-4 shadow-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 이름 및 소개 텍스트 */}
              <h3 className="font-bold text-base text-neutral-900 mb-1.5">
                {member.name}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                {member.desc}
              </p>

              {/* 하단 소셜/링크 아이콘 3종 */}
              <div className="flex items-center gap-3 text-neutral-700">
                <Linkedin className="w-4 h-4 cursor-pointer hover:text-black transition-colors" />
                <X className="w-4 h-4 cursor-pointer hover:text-black transition-colors" />
                <Globe className="w-4 h-4 cursor-pointer hover:text-black transition-colors" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}