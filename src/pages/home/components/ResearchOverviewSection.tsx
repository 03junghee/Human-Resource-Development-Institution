import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const areaBorderHover: Record<string, string> = {
  accent: 'hover:border-accent-300',
  primary: 'hover:border-primary-300',
  secondary: 'hover:border-secondary-300',
};

const areaBg: Record<string, string> = {
  accent: 'bg-accent-50',
  primary: 'bg-primary-50',
  secondary: 'bg-secondary-50',
};

const areaBgHover: Record<string, string> = {
  accent: 'group-hover:bg-accent-100',
  primary: 'group-hover:bg-primary-100',
  secondary: 'group-hover:bg-secondary-100',
};

const areaText: Record<string, string> = {
  accent: 'text-accent-500',
  primary: 'text-primary-500',
  secondary: 'text-secondary-500',
};

const areaTagBg: Record<string, string> = {
  accent: 'bg-accent-50',
  primary: 'bg-primary-50',
  secondary: 'bg-secondary-50',
};

const areaTagText: Record<string, string> = {
  accent: 'text-accent-700',
  primary: 'text-primary-700',
  secondary: 'text-secondary-700',
};

const researchAreas = [
  {
    id: 'resilient',
    title: '회복 주도성',
    subtitle: 'Resilient Autonomy',
    icon: 'ri-mental-health-line',
    color: 'accent',
    summary: '예측 불가능한 변화와 실패 속에서 자기인식과 정서 조절을 통해 다시 일어서는 힘. WEF 미래 일자리 보고서 2025, 핵심 스킬 1위인 회복탄력성을 연구합니다.',
    keywords: ['Self-awareness', 'Metacognition', 'Emotional Regulation', 'Resilience'],
  },
  {
    id: 'career',
    title: '진로 주도성',
    subtitle: 'Career Autonomy',
    icon: 'ri-compass-3-line',
    color: 'primary',
    summary: '직업(Job)이 아닌 업(Work)을 중심으로, AI라는 수많은 도구를 부리는 주체적 관리자로서 자신의 진로를 설계하는 힘. 에이전틱 진로 소유권을 연구합니다.',
    keywords: ['Tuning', 'Desking', 'Meta-cognition', 'Purpose Architecture'],
  },
  {
    id: 'relational',
    title: '관계 주도성',
    subtitle: 'Relational Autonomy',
    icon: 'ri-team-line',
    color: 'secondary',
    summary: '타인과의 연결에 앞서 자기 자신과의 관계를 먼저 확립하고, 소통과 거리두기의 기술을 쌓아가는 단계적 구조를 연구합니다. 4층 피라미드 모델.',
    keywords: ['Self-Relationship', 'Communication', 'Social Desking', 'Fade-out'],
  },
  {
    id: 'existential',
    title: '실존 주도성',
    subtitle: 'Existential Autonomy',
    icon: 'ri-user-search-line',
    color: 'accent',
    summary: '알고리즘과 정보 과잉 환경에서 자신의 삶과 습관, 방향성에 대한 주도권을 확립하는 것. 핵개인으로서의 삶의 양식을 연구합니다.',
    keywords: ['Meaning-making', 'Self-control', 'Nuclear Individual', 'Memento Mori'],
  },
];

export default function ResearchOverviewSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-10 bg-background-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div>
            <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">4 Domains of Autonomy</span>
            <h2 className="text-xl md:text-3xl font-bold text-primary-600 mt-2">
              4대 주도성 연구
            </h2>
          </div>
          <Link
            to="/research"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            전체 연구 보기
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {researchAreas.map((area, idx) => (
            <Link
              key={area.id}
              to={`/research#${area.id}`}
              className={`group bg-background-50 border border-background-200/70 rounded-lg p-6 transition-all duration-500 ${areaBorderHover[area.color]} hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] cursor-pointer ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-md ${areaBg[area.color]} mb-4 ${areaBgHover[area.color]} transition-colors duration-300`}>
                <i className={`${area.icon} text-lg ${areaText[area.color]}`}></i>
              </div>
              <h3 className="text-base font-semibold text-foreground-800 mb-1">{area.title}</h3>
              <p className="text-xs text-foreground-400 font-medium mb-3">{area.subtitle}</p>
              <p className="text-sm text-foreground-500 leading-relaxed mb-4">{area.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {area.keywords.map((kw) => (
                  <span
                    key={kw}
                    className={`text-[11px] px-2 py-1 rounded-full ${areaTagBg[area.color]} ${areaTagText[area.color]} font-medium`}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}