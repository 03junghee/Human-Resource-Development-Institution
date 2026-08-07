import { useState, useEffect, useRef } from 'react';

const orgData = [
  {
    id: 'research',
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
    title: '4. 경영기획실',
    role: '법인 주소지 관리, 법정 고유번호/세무 처리, 웹사이트 운영, 회원 관리 및 협회 행정 총괄',
    teams: [
      { name: '행정·재정팀', detail: '회계, 법인 등기, 비상주/상주 사무실 관리, PG 연동 및 후원금 관리' },
      { name: '대외협력·홍보팀', detail: '웹사이트 관리, 정관 및 법인 정보 공시, 미디어 대응' },
    ],
    personnel: '',
  },
];

export default function OrganizationSection() {
  const [expanded, setExpanded] = useState<string | null>(null);
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

  const toggle = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-10 bg-background-100">
      <div className="max-w-[900px] mx-auto">
        <div className="mb-2">
          <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">Organization</span>
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-primary-600 mb-12 md:mb-16">인적자원개발연구협회 조직도</h2>

        {/* Top Level Hierarchy */}
        <div className="flex flex-col items-center">
          {/* 이사회 */}
          <div
            className={`w-full max-w-[320px] bg-primary-500 text-background-50 px-6 py-3.5 rounded-lg text-sm font-semibold text-center transition-all duration-700 ${
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            이사회
          </div>

          <div className="w-[1px] h-6 bg-primary-300"></div>

          {/* 2nd Row - 감사 + 협회장 */}
          <div className="flex items-start gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <div
                className={`bg-background-50 border border-primary-200 px-5 py-2.5 rounded-lg text-xs text-foreground-600 text-center min-w-[100px] transition-all duration-700 delay-100 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                <span className="font-medium">감사</span>
                <span className="block text-[10px] text-foreground-400 mt-0.5">회원 감시</span>
              </div>
              <div className="w-[1px] h-10 bg-primary-200"></div>
              <div className="w-8 h-[1px] bg-primary-200 absolute" style={{ marginTop: '40px' }}></div>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`bg-accent-500 text-background-50 px-6 py-3 rounded-lg text-sm font-semibold text-center min-w-[160px] transition-all duration-700 delay-200 ${
                  visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                협회장 (연구소장)
              </div>
              <div className="w-[1px] h-8 bg-primary-200"></div>
            </div>
          </div>

          {/* 자문위원회 */}
          <div
            className={`bg-background-50 border border-accent-300 px-5 py-2.5 rounded-lg text-xs font-medium text-foreground-600 text-center min-w-[120px] transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            자문위원회
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-2 mb-8 text-center">
            <span className="text-[11px] text-foreground-400 bg-background-50 px-3 py-1.5 rounded-full border border-background-200">
              글로벌 정책 자문단
            </span>
            <span className="text-[11px] text-foreground-400 bg-background-50 px-3 py-1.5 rounded-full border border-background-200">
              AI·HR 산업 자문단
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-background-200 mb-10"></div>

        {/* Departments - Unified Card Style */}
        <div className="space-y-3">
          {orgData.map((dept, idx) => (
            <div
              key={dept.id}
              className={`bg-background-50 border border-background-200/70 rounded-lg overflow-hidden transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${400 + idx * 120}ms` }}
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 md:py-5 text-left cursor-pointer hover:bg-background-50/80 transition-colors"
                onClick={() => toggle(dept.id)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-md flex-shrink-0 ${
                    expanded === dept.id ? 'bg-primary-50' : 'bg-background-100'
                  }`}>
                    <span className="text-xs font-bold text-primary-500">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground-800">{dept.title}</h4>
                    <p className="text-xs text-foreground-400 mt-0.5 hidden sm:block">{dept.role}</p>
                  </div>
                </div>
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 ml-4">
                  <i
                    className={`ri-arrow-down-s-line text-lg text-foreground-400 transition-transform duration-300 ${
                      expanded === dept.id ? 'rotate-180' : ''
                    }`}
                  ></i>
                </div>
              </button>

              {expanded === dept.id && (
                <div className="px-5 pb-5 border-t border-background-100">
                  <p className="text-xs text-foreground-500 mt-3 mb-4 sm:hidden">{dept.role}</p>

                  <div className="mb-3">
                    <h5 className="text-[11px] font-semibold text-foreground-400 uppercase tracking-wider mb-2">구성 하위팀</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {dept.teams.map((team) => (
                        <div key={team.name} className="bg-background-100 rounded-md p-3">
                          <p className="text-xs font-medium text-foreground-700">{team.name}</p>
                          <p className="text-[11px] text-foreground-400 mt-1 leading-relaxed">{team.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {dept.personnel && (
                    <div className="mt-3 pt-3 border-t border-background-200">
                      <h5 className="text-[11px] font-semibold text-foreground-400 uppercase tracking-wider mb-1.5">핵심배치 인력</h5>
                      <p className="text-xs text-foreground-500">{dept.personnel}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}