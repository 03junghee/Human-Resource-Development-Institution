import { useEffect, useRef, useState } from 'react';

const historyItems = [
  {
    year: '2023',
    title: '연구회 발족 및 학술 기반 구축',
    items: [
      { month: '09', content: '인적자원개발연구협회 설립 준비위원회 발족 (빅테크 HR 실무진, OECD 정책분석관, 인지과학 박사 참여)' },
      { month: '11', content: 'OECD 2030 프레임워크 연계 \'AI 시대 청년층 인지능력 및 주체성 실태 조사\' 연구 개시' },
      { month: '12', content: '4대 주도성 핵심 연구 프레임워크 확립' },
    ],
  },
  {
    year: '2024',
    title: '법인 설립 및 진단 도구 개발',
    items: [
      { month: '03', content: '\'인적자원개발연구협회\' 비영리법인 설립 등기 및 부설 연구소 개소' },
      { month: '06', content: 'AI 자소서 방지 및 주도적 사고력 평가를 위한 \'People Analytics 기반 HR 채용 진단 도구 v1.0\' 개발' },
      { month: '09', content: '국내 주요 기업 HRD 담당자 대상 \'AI 시대 진짜 인재 가려내기\' 특별 포럼 개최' },
      { month: '11', content: '청년층 주도성 강화를 위한 교육 프로그램 런칭' },
    ],
  },
  {
    year: '2025',
    title: '도약 및 글로벌 협력 확장',
    items: [
      { month: '02', content: '정부 지원 R&D 및 국책 교육 정책 연구 과제 최종 사업자 선정' },
      { month: '05', content: '글로벌 OECD 정책 자문단 및 AI 기업 APAC 채용 네트워크 합동 정기 학술 세미나 개최' },
      { month: '08', content: '\'주도성 역량 진단 솔루션\' 공식 웹사이트 오픈' },
    ],
  },
];

export default function HistorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalHeight = el.offsetHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const scrolled = Math.max(0, Math.min(1, -rect.top / totalHeight));
      setProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-10 bg-background-50">
      <div className="max-w-[900px] mx-auto">
        <div className="mb-2">
          <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">History</span>
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-primary-600 mb-12 md:mb-16">연혁</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[18px] md:left-[140px] top-4 bottom-4 w-[1px] bg-background-200">
            <div
              className="absolute top-0 left-0 right-0 bg-primary-400 transition-all duration-300 ease-out"
              style={{ height: `${progress * 100}%` }}
            ></div>
          </div>

          <div className="space-y-10 md:space-y-12">
            {historyItems.map((group, groupIdx) => (
              <div
                key={group.year}
                className="relative pl-12 md:pl-0"
              >
                {/* Year */}
                <div className="md:absolute md:left-0 md:top-0 md:w-[120px] md:text-right md:pr-8">
                  <span className="text-lg md:text-2xl font-bold font-mono text-primary-500">
                    {group.year}
                  </span>
                  <p className="hidden md:block text-xs text-foreground-400 mt-1">{group.title}</p>
                </div>

                <div className="md:hidden mb-2">
                  <p className="text-xs text-foreground-400">{group.title}</p>
                </div>

                {/* Dot */}
                <div
                  className={`absolute left-[11px] md:left-[134px] top-1.5 w-[15px] h-[15px] rounded-full border-2 transition-all duration-500 ${
                    progress >= (groupIdx / historyItems.length)
                      ? 'bg-primary-500 border-primary-500'
                      : 'bg-background-50 border-background-300'
                  }`}
                ></div>

                {/* Events */}
                <div className="md:ml-[160px] space-y-4">
                  {group.items.map((item, itemIdx) => (
                    <div
                      key={item.month}
                      className={`transition-all duration-700 ease-out ${
                        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${300 + groupIdx * 200 + itemIdx * 100}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-mono font-medium text-accent-500 mt-0.5 min-w-[24px]">
                          {item.month}월
                        </span>
                        <p className="text-sm md:text-base text-foreground-600 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}