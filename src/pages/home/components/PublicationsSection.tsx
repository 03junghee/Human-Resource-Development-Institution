import { useEffect, useRef, useState } from 'react';
import ResearchJoinModal from './ResearchJoinModal'; // 모달 컴포넌트 임포트

interface Publication {
  id: string;
  title: string;
  englishTitle?: string;
  type: 'paper' | 'report' | 'column';
  typeLabel: string;
  date: string;
  preview: string;
  coverImage: string;
  locked: boolean;
}

const publications: Publication[] = [
  {
    id: 'pub-1',
    title: 'AI 시대 청년층 인지능력 및 주체성 실태 조사 연구보고서',
    type: 'report',
    typeLabel: '연구보고서',
    date: '2024.12',
    preview: 'OECD 2030 프레임워크 연계 AI 시대 청년층 인지능력 및 주체성 실태 조사 결과를 담은 최초 연구보고서입니다. 4대 주도성 측정 지표와 진단 도구 개발의 학술적 기초를 제시합니다.',
    coverImage: 'https://readdy.ai/api/search-image?query=Minimalist%20academic%20research%20report%20cover%20with%20abstract%20human%20brain%20cognition%20network%20visualization%20in%20soft%20teal%20and%20mint%20green%20tones%2C%20clean%20white%20background%2C%20professional%20scholarly%20Korean%20publication%20design%2C%20modern%20geometric%20data%20patterns&width=800&height=500&seq=pub-cover-01&orientation=landscape',
    locked: true,
  },
  {
    id: 'pub-2',
    title: 'Gen Z 세대의 역(逆)플린 효과 극복을 위한 인지적 자율성 회복 프로그램 개발',
    type: 'paper',
    typeLabel: '학술논문',
    date: '2025.02',
    preview: '국책 R&D 연구 과제 결과물로, Gen Z 세대의 지능 하락 현상과 이를 극복하기 위한 메타인지 기반 회복 프로그램의 효과를 검증한 학술 논문입니다.',
    coverImage: 'https://readdy.ai/api/search-image?query=Academic%20journal%20paper%20cover%20design%20featuring%20abstract%20neural%20resilience%20and%20recovery%20concept%20with%20flowing%20organic%20shapes%20in%20soft%20sage%20green%20and%20teal%20color%20palette%2C%20minimalist%20professional%20layout%2C%20clean%20white%20background%2C%20scholarly%20aesthetic&width=800&height=500&seq=pub-cover-02&orientation=landscape',
    locked: true,
  },
  {
    id: 'pub-3',
    title: 'AI 자소서 시대의 종말과 주도성 중심 채용 패러다임 전환',
    type: 'column',
    typeLabel: '칼럼',
    date: '2026.09',
    preview: '제1회 정기 학술 심포지엄 발표 내용을 정리한 칼럼으로, AI 작성 자소서 범람 시대에 기업 채용이 어떻게 변화해야 하는지 제시합니다.',
    coverImage: 'https://readdy.ai/api/search-image?query=Modern%20academic%20column%20publication%20cover%20with%20abstract%20AI%20and%20human%20agency%20concept%20illustration%2C%20geometric%20circuit%20patterns%20merging%20with%20human%20silhouette%2C%20soft%20mint%20teal%20color%20scheme%2C%20clean%20professional%20design&width=800&height=500&seq=pub-cover-03&orientation=landscape',
    locked: true,
  },
  {
    id: 'pub-4',
    title: '주도적 사고력 기반 B2B 교육 솔루션 효과성 분석',
    type: 'report',
    typeLabel: '연구보고서',
    date: '2025.11',
    preview: '기업 맞춤형 B2B 교육 프로그램의 효과성을 분석한 보고서입니다. 참여 기업의 임직원 주도성 지표 변화와 조직 성과 간의 상관관계를 다룹니다.',
    coverImage: 'https://readdy.ai/api/search-image?query=Research%20report%20cover%20design%20with%20abstract%20business%20analytics%20and%20education%20visualization%2C%20bar%20charts%20and%20human%20figures%20in%20soft%20green%20teal%20tones%2C%20professional%20Korean%20academic%20publication%20layout%2C%20clean%20modern%20aesthetic&width=800&height=500&seq=pub-cover-04&orientation=landscape',
    locked: true,
  },
  {
    id: 'pub-5',
    title: 'AI 시대 청년의 역경적응성과 메타인지 메커니즘에 관한 연구',
    englishTitle: 'Adaptive Resilience and Metacognitive Dynamics among Young Adults in the Age of Artificial Intelligence',
    type: 'paper',
    typeLabel: '학술논문',
    date: '2025.11',
    preview: '인공지능 기술의 급속한 발전으로 인해 청년들이 경험하는 기술적 소외감과 직업 대체 및 도태에 대한 불안을 완화하는 회복탄력성 요인과 메타인지 메커니즘을 탐색한 학술 논문입니다.',
    coverImage: 'https://readdy.ai/api/search-image?query=Academic%20paper%20cover%20design%20for%20psychology%20and%20metacognition%20research%2C%20abstract%20brain%20with%20adaptive%20network%20nodes%20and%20resilience%20pathways%2C%20soft%20teal%20mint%20green%20color%20palette%2C%20clean%20white%20background%2C%20professional%20bilingual%20scholarly%20layout&width=800&height=500&seq=pub-cover-05&orientation=landscape',
    locked: true,
  },
  {
    id: 'pub-6',
    title: 'AI 시대의 진로 자기결정성과 문제중심 진로 설계에 관한 연구',
    englishTitle: 'Career Self-Determination and Purpose Architecture in the Age of Artificial Intelligence',
    type: 'paper',
    typeLabel: '학술논문',
    date: '2026.02',
    preview: 'AI 기술의 급속한 발전으로 변화하고 있는 직업 및 산업 환경 속에서 청년의 진로 자기결정성과 문제중심 진로 설계의 필요성을 탐색한 학술 논문입니다.',
    coverImage: 'https://readdy.ai/api/search-image?query=Academic%20journal%20cover%20for%20career%20development%20research%2C%20abstract%20human%20figure%20with%20branching%20career%20pathway%20nodes%20and%20decision%20points%2C%20soft%20sage%20green%20and%20teal%20tones%2C%20clean%20minimalist%20professional%20design%2C%20white%20background&width=800&height=500&seq=pub-cover-06&orientation=landscape',
    locked: true,
  },
];

const typeColors: Record<string, string> = {
  paper: 'bg-primary-50 text-primary-700',
  report: 'bg-accent-50 text-accent-700',
  column: 'bg-secondary-50 text-secondary-700',
};

export default function PublicationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  
  // 모달 제어 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-10 bg-background-100">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-14">
          <div>
            <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">Publications</span>
            <h2 className="text-xl md:text-3xl font-bold text-primary-600 mt-2">논문 · 보고서 · 칼럼</h2>
            <p className="text-sm text-foreground-500 mt-2">
              인적자원개발연구협회의 학술 성과와 연구 결과물을 확인하세요.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-foreground-400">
            <i className="ri-lock-line text-accent-500"></i>
            <span>전체 보기는 연구회원 가입 후 가능합니다</span>
          </div>
        </div>

        {/* 1번~6번 논문 목록 (전부 회원전용 버튼 적용) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {publications.map((pub, idx) => (
            <div
              key={pub.id}
              className={`group bg-background-50 border border-background-200/70 rounded-lg overflow-hidden hover:border-primary-200 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="relative h-40 md:h-48 overflow-hidden bg-background-100">
                <img
                  src={pub.coverImage}
                  alt={pub.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${typeColors[pub.type]}`}>
                    {pub.typeLabel}
                  </span>
                </div>
                {pub.locked && (
                  <div className="absolute top-3 right-3 w-7 h-7 bg-background-50/90 rounded-full flex items-center justify-center">
                    <i className="ri-lock-line text-xs text-foreground-400"></i>
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] text-foreground-400 font-mono">{pub.date}</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground-800 mb-1.5 leading-snug group-hover:text-primary-600 transition-colors">
                  {pub.title}
                </h3>
                {pub.englishTitle && (
                  <p className="text-[11px] text-foreground-400 italic mb-2 leading-relaxed">{pub.englishTitle}</p>
                )}
                <p className="text-xs text-foreground-500 leading-relaxed line-clamp-3 mb-4">{pub.preview}</p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-background-100 hover:bg-primary-50 text-foreground-500 hover:text-primary-600 rounded-md text-xs font-medium transition-colors cursor-pointer"
                  >
                    <i className="ri-lock-line"></i>
                    회원 전용
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Membership CTA */}
        <div className="mt-10 p-5 md:p-6 bg-primary-50 rounded-lg border border-primary-100">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 flex-shrink-0">
              <i className="ri-user-follow-line text-xl text-primary-500"></i>
            </div>
            <div className="text-center md:text-left flex-1">
              <h4 className="text-sm font-semibold text-foreground-800 mb-1">연구회원이 되어 전체 콘텐츠를 열람하세요</h4>
              <p className="text-xs text-foreground-500">
                연구회원 가입 시 논문 전문, 연구보고서, 칼럼 등 모든 학술 자료를 열람할 수 있습니다.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-shrink-0 px-5 py-2.5 bg-primary-500 text-background-50 rounded-md text-sm font-medium whitespace-nowrap hover:bg-primary-600 transition-colors cursor-pointer"
            >
              연구회원 신청
            </button>
          </div>
        </div>
      </div>

      {/* 모달 연동 */}
      <ResearchJoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}