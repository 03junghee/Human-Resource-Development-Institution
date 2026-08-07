import { useEffect, useRef, useState } from 'react';

interface Publication {
  id: string;
  title: string;
  type: 'paper' | 'report' | 'column';
  typeLabel: string;
  date: string;
  preview: string;
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
    locked: true,
  },
  {
    id: 'pub-2',
    title: 'Gen Z 세대의 역(逆)플린 효과 극복을 위한 인지적 자율성 회복 프로그램 개발',
    type: 'paper',
    typeLabel: '학술논문',
    date: '2025.02',
    preview: '국책 R&D 연구 과제 결과물로, Gen Z 세대의 지능 하락 현상과 이를 극복하기 위한 메타인지 기반 회복 프로그램의 효과를 검증한 학술 논문입니다.',
    locked: true,
  },
  {
    id: 'pub-3',
    title: 'AI 자소서 시대의 종말과 주도성 중심 채용 패러다임 전환',
    type: 'column',
    typeLabel: '칼럼',
    date: '2026.09',
    preview: '제1회 정기 학술 심포지엄 발표 내용을 정리한 칼럼으로, AI 작성 자소서 범람 시대에 기업 채용이 어떻게 변화해야 하는지 제시합니다.',
    locked: true,
  },
  {
    id: 'pub-4',
    title: '주도적 사고력(What & Why) 기반 B2B 교육 솔루션 효과성 분석',
    type: 'report',
    typeLabel: '연구보고서',
    date: '2025.11',
    preview: '기업 맞춤형 B2B 교육 프로그램의 효과성을 분석한 보고서입니다. 참여 기업의 임직원 주도성 지표 변화와 조직 성과 간의 상관관계를 다룹니다.',
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
      <div className="max-w-[1000px] mx-auto">
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

        <div className="space-y-4">
          {publications.map((pub, idx) => (
            <div
              key={pub.id}
              className={`group bg-background-50 border border-background-200/70 rounded-lg p-5 md:p-6 transition-all duration-500 hover:border-primary-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-background-100 group-hover:bg-primary-50 transition-colors">
                  <i className={`ri-file-text-line text-lg text-foreground-400 group-hover:text-primary-500 transition-colors`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${typeColors[pub.type]}`}>
                      {pub.typeLabel}
                    </span>
                    <span className="text-[11px] text-foreground-400 font-mono">{pub.date}</span>
                    {pub.locked && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-accent-500">
                        <i className="ri-lock-line"></i>
                        회원 전용
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-xs md:text-sm text-foreground-500 leading-relaxed">{pub.preview}</p>
                </div>
                <div className="flex-shrink-0 hidden sm:flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-background-100 text-foreground-400 group-hover:bg-primary-50 group-hover:text-primary-500 transition-colors">
                    <i className="ri-lock-line"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-primary-50 rounded-lg border border-primary-100">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 flex-shrink-0">
              <i className="ri-user-follow-line text-xl text-primary-500"></i>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-sm font-semibold text-foreground-800 mb-1">연구회원이 되어 전체 콘텐츠를 열람하세요</h4>
              <p className="text-xs text-foreground-500">
                연구회원 가입 시 논문 전문, 연구보고서, 칼럼 등 모든 학술 자료를 열람할 수 있습니다.
              </p>
            </div>
            <button className="flex-shrink-0 px-5 py-2.5 bg-primary-500 text-background-50 rounded-md text-sm font-medium whitespace-nowrap hover:bg-primary-600 transition-colors cursor-pointer">
              연구회원 신청
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}