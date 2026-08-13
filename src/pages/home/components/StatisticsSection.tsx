import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  source: string;
  subtext: string;
}

const stats: StatItem[] = [
  {
    value: '64.1%',
    label: 'AI 자소서에 대한 부정적 평가',
    source: '출처: 고용노동부 · 한국고용정보원',
    subtext: '매출 상위 500대 기업 중 챗GPT로 작성된 자소서를 부정적으로 평가한 비율. 42.2%는 감점, 23.2%는 불합격 처리.',
  },
  {
    value: '6.36',
    label: '한국 청소년 삶의 만족도 (10점 만점)',
    source: '출처: PISA 2022',
    subtext: '학생 자살자는 2015년 93명에서 2024년 221명으로 2.4배 증가. 10만 명당 자살률은 1.53에서 4.31로 2.8배 상승.',
  },
  {
    value: '49.37%',
    label: '주도적 업무 수행 비율',
    source: '출처: NYU 아부다비',
    subtext: 'OpenAI 텍스트 탐지기의 오판률. 사람이 직접 작성한 자소서마저 AI 생성물로 잘못 판정되는 사례가 속출하고 있습니다.',
  },
];

function AnimatedNumber({ value, visible }: { value: string; visible: boolean }) {
  const [display, setDisplay] = useState('0');
  const numericPart = value.replace(/[^0-9.]/g, '');
  const suffix = value.replace(/[0-9.]/g, '');
  const target = parseFloat(numericPart);

  useEffect(() => {
    if (!visible || isNaN(target)) {
      setDisplay(value);
      return;
    }
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (target - start) * eased;
      if (numericPart.includes('.')) {
        setDisplay(current.toFixed(2) + suffix);
      } else {
        setDisplay(Math.round(current) + suffix);
      }
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (isNaN(target)) return <span>{value}</span>;
  return <span>{display}</span>;
}

export default function StatisticsSection() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-10 bg-primary-500">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14 md:mb-18">
          <span className="text-xs font-medium text-background-200 uppercase tracking-widest">주요 데이터</span>
          <h2 className="text-xl md:text-3xl font-bold text-background-50 mt-2 mb-3">
            왜 지금 주도성 연구인가
          </h2>
          <p className="text-sm text-background-200 max-w-[560px] mx-auto leading-relaxed">
            AI 시대에 인간의 인지 능력과 주체성이 위기에 처한 실제 데이터를 확인합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`bg-background-50/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-background-50/15 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-background-50 font-mono tracking-tight mb-3">
                <AnimatedNumber value={stat.value} visible={visible} />
              </div>
              <h3 className="text-base font-semibold text-background-50 mb-2">{stat.label}</h3>
              <p className="text-xs text-background-200 leading-relaxed mb-4">{stat.subtext}</p>
              <div className="pt-3 border-t border-background-50/15">
                <p className="text-[11px] text-background-300 font-mono">{stat.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}