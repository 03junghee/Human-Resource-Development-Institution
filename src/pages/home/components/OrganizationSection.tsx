import { useState, useEffect, useRef } from 'react';

const orgData = [
  {
    id: 'research',
    shortTitle: '주도성 역량 연구부',
    title: '1. 주도성 역량 연구부',
    role: 'OECD 2030 프레임워크 기준에 맞춘 4대 주도성 이론 정립, 지표 개발 및 학술 연구',
    teams: [
      { name: '회복 주도성 연구팀', detail: '메타인지, 정서 조절력, 회복탄력성, 삶의 의미 형성 연구' },
      { name: '진로 주도성 연구팀', detail: '자기결정성, 가치 기반 의사결정, 비대면 소통 및 관계 주체성 연구' },
    ],
    personnel: '교육학과 교수, 교육대학원 인지과학 박사, 교육 전문가',
  },
  {
    id: 'hr-tools',
    shortTitle: 'HR 진단도구 연구개발부',
    title: '2. HR 진단도구 연구개발부',
    role: 'AI 자소서 범람 및 서류 무용지물화에 대응하는 기업용 HR 채용 진단 도구 및 실무 평가 도구 개발',
    teams: [
      { name: 'HR 진단도구 개발팀', detail: '꼬리질문 면접 가이드라인, 실시간 실무 과제 평가 프레임워크 구축' },
      { name: '데이터 분석 & AI 역량 평가팀', detail: '구직자의 주도적 사고력 데이터 분석 및 진단 툴 검증' },
    ],
    personnel: '인지과학 박사, 연구진',
  },
  {
    id: 'b2b',
    shortTitle: 'B2B 교육·사업개발본부',
    title: '3. B2B 교육&사업개발본부',
    role: '수동화된 청년층과 기업 현장 요구 간의 격차를 해소하는 기업 맞춤형 교육 프로그램 운영',
    teams: [
      { name: '기업 교육 프로그램 개발팀', detail: '주도적 문제 해결 능력 강화 교육 솔루션 설계' },
      { name: 'B2B 영업 & 컨설팅팀', detail: '삼성, SK 등 대기업 및 주요 기업 대상 HRD 컨설팅 및 솔루션 판매' },
    ],
    personnel: '스타트업·빅테크 HR 실무진',
  },
  {
    id: 'admin',
    shortTitle: '경영기획실',
    title: '4. 경영기획실',
    role: '법인 주소지 관리, 법정 고유번호/세무 처리, 웹사이트 운영, 회원 관리 및 협회 행정 총괄',
    teams: [
      { name: '행정·재정팀', detail: '회계, 법인 등기, 비상주/상주 사무실 관리, PG 연동 및 후원금 관리' },
      { name: '대외협력·홍보팀', detail: '웹사이트 관리, 정관 및 법인 정보 공시, 미디어 대응' },
    ],
    personnel: '경영학 석사, 행정·재무 전문가, 대외협력 담당자',
  },
];

export default function OrganizationSection() {
  // 여러 부서의 열림/닫힘 상태를 다중 관리하기 위한 상태 (배열 형태)
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 토글 클릭 시 기존 열린 목록에 포함되어 있으면 제거, 없으면 추가
  const toggle = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-4 md:px-10 bg-background-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-2">
          <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">Organization</span>
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-primary-600 mb-12 md:mb-16">인적자원개발연구협회 조직도</h2>

        {/* Org Chart Tree */}
        <div className="mb-14">
          {/* Level 1: 이사회 */}
          <div className="flex justify-center mb-0">
            <div
              className={`bg-primary-500 text-background-50 px-8 py-3 rounded-lg text-sm font-semibold text-center min-w-[200px] transition-all duration-700 ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              이사회
            </div>
          </div>

          {/* Connector down */}
          <div className="flex justify-center">
            <div className="w-[1px] h-8 bg-primary-300"></div>
          </div>

          {/* Level 2: 감사 / 협회장 / 자문위원회 */}
          <div className="relative max-w-[600px] mx-auto pt-8">
            {/* Horizontal line */}
            <div className="absolute top-0 left-[16%] right-[16%] h-[1px] bg-primary-300"></div>

            <div className="grid grid-cols-3 gap-2 md:gap-4 min-w-[340px]">
              {/* 감사 */}
              <div className="relative flex flex-col items-center">
                <div className="w-[1px] h-6 md:h-8 bg-primary-300 absolute bottom-full left-1/2 -translate-x-1/2"></div>
                <div
                  className={`bg-background-50 border-2 border-primary-200 px-2 md:px-4 py-2.5 md:py-3 rounded-lg text-[11px] md:text-xs text-center w-full transition-all duration-700 delay-100 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <span className="font-semibold text-foreground-700 block">감사</span>
                </div>
              </div>

              {/* 협회장 */}
              <div className="relative flex flex-col items-center">
                <div className="w-[1px] h-6 md:h-8 bg-primary-300 absolute bottom-full left-1/2 -translate-x-1/2"></div>
                <div
                  className={`bg-accent-500 text-background-50 px-2 md:px-4 py-2.5 md:py-3 rounded-lg text-[11px] md:text-sm font-semibold text-center w-full transition-all duration-700 delay-200 ${
                    visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  협회장
                </div>
              </div>

              {/* 자문위원회 */}
              <div className="relative flex flex-col items-center">
                <div className="w-[1px] h-6 md:h-8 bg-primary-300 absolute bottom-full left-1/2 -translate-x-1/2"></div>
                <div
                  className={`bg-background-50 border-2 border-accent-300 px-2 md:px-4 py-2.5 md:py-3 rounded-lg text-[11px] md:text-xs text-center w-full transition-all duration-700 delay-300 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <span className="font-semibold text-foreground-700 block">자문위원회</span>
                </div>
              </div>
            </div>
          </div>

          {/* 협회장에서 하단 4개 부서로 이어지는 연결선 */}
          <div className="relative max-w-[1000px] mx-auto">
            {/* 협회장 아래 중앙 수직선 */}
            <div className="flex justify-center">
              <div className="w-[1px] h-8 bg-primary-300"></div>
            </div>

            {/* 데스크톱/태블릿(2열 이상)용 연결 가로선 */}
            <div className="hidden sm:block absolute top-8 left-[12.5%] right-[12.5%] h-[1px] bg-primary-300"></div>

            {/* 하단 4개 부서 연결 수직선 (데스크톱) */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 h-6">
              <div className="flex justify-center">
                <div className="w-[1px] h-full bg-primary-300"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-[1px] h-full bg-primary-300"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-[1px] h-full bg-primary-300"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-[1px] h-full bg-primary-300"></div>
              </div>
            </div>
          </div>

          {/* Level 3: 펼쳐지는 4개 주요 부서 카드 Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1000px] mx-auto items-start transition-all duration-700 delay-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {orgData.map((dept, idx) => {
              const isOpen = expandedIds.includes(dept.id);
              return (
                <div
                  key={dept.id}
                  className={`bg-background-50 border rounded-xl overflow-hidden transition-all duration-300 shadow-sm ${
                    isOpen ? 'border-primary-400 ring-2 ring-primary-100' : 'border-background-200 hover:border-primary-300'
                  }`}
                >
                  {/* 카드 헤더 (클릭 시 토글) */}
                  <button
                    type="button"
                    onClick={() => toggle(dept.id)}
                    className="w-full p-4 flex flex-col justify-between text-left cursor-pointer transition-colors bg-primary-500 text-white hover:bg-primary-600"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded text-white">
                        0{idx + 1}
                      </span>
                      <i
                        className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      ></i>
                    </div>
                    <h4 className="text-sm md:text-base font-bold mt-3 leading-snug">
                      {dept.shortTitle}
                    </h4>
                  </button>

                  {/* 카드 세부 내용 (독립적으로 펼쳐짐) */}
                  {isOpen && (
                    <div className="p-4 bg-white border-t border-background-100 space-y-4 text-left animate-fadeIn">
                      <div>
                        <h5 className="text-[11px] font-semibold text-primary-600 uppercase tracking-wider mb-1">
                          부서 역할
                        </h5>
                        <p className="text-xs text-foreground-600 leading-relaxed">{dept.role}</p>
                      </div>

                      <div>
                        <h5 className="text-[11px] font-semibold text-primary-600 uppercase tracking-wider mb-2">
                          구성 하위팀
                        </h5>
                        <div className="space-y-2">
                          {dept.teams.map((team) => (
                            <div key={team.name} className="bg-background-100 rounded-md p-2.5">
                              <p className="text-xs font-bold text-foreground-800">{team.name}</p>
                              <p className="text-[11px] text-foreground-500 mt-0.5 leading-relaxed">
                                {team.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {dept.personnel && (
                        <div className="pt-2 border-t border-background-100">
                          <h5 className="text-[11px] font-semibold text-primary-600 uppercase tracking-wider mb-1">
                            핵심배치 인력
                          </h5>
                          <p className="text-xs text-foreground-500 leading-relaxed">{dept.personnel}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}