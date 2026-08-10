import { useEffect, useRef, useState } from 'react';

const coreValues = [
  {
    icon: 'ri-focus-2-line',
    title: 'Autonomy',
    subtitle: '주체성',
    description: 'AI나 타인의 기준에 휘둘리지 않고 스스로 삶과 일의 방향을 결정하는 힘',
  },
  {
    icon: 'ri-user-heart-line',
    title: 'Human-Centric',
    subtitle: '인간 중심 사고',
    description: '도구의 활용을 넘어 문제의 본질을 정의하는 사고력',
  },
  {
    icon: 'ri-mental-health-line',
    title: 'Resilience',
    subtitle: '회복력',
    description: '변화와 실패 앞에서도 무너지지 않고 스스로를 정립하는 메타인지 역량',
  },
  {
    icon: 'ri-global-line',
    title: 'Global Excellence',
    subtitle: '글로벌 표준',
    description: 'OECD 정책 및 빅테크 HR 현장과 연계된 세계적 수준의 전문성',
  },
];

const strategicGoals = [
  {
    number: '01',
    title: '4대 주도성 연구 체계화',
    description: '회복·진로·관계·실존 주도성 기반의 학술 모델 및 평가 지표 확립',
  },
  {
    number: '02',
    title: '학술 연구 성과 확산',
    description: '학술 포럼, 국제 세미나, 정책 보고서 발간을 통한 연구 성과의 사회적 환원 및 글로벌 학술 네트워크 구축',
  },
  {
    number: '03',
    title: '글로벌·국책 연구 과제 수주',
    description: 'OECD 교육 프레임워크 연계 정부 지원 연구 사업 추진 및 국가적 위상 제고',
  },
];

export default function MissionVisionSection() {
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

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-10 bg-background-100">
      <div className="max-w-[1080px] mx-auto">
        <div className="mb-2">
          <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">Mission & Vision</span>
        </div>

        {/* Mission */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-sm font-semibold text-primary-500 tracking-wider mb-6 uppercase">Mission</h3>
          <p
            className={`text-lg md:text-2xl font-medium text-foreground-700 leading-[1.7] max-w-[880px] transition-all duration-1000 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            &quot;AI 시대, 인류의 인지적 주체성을 회복하고 스스로 삶과 문제를 이끄는 주도적 인재를 양성하여 기업과 사회의 미래 가치를 창출한다.&quot;
          </p>
        </div>

        {/* Vision */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-sm font-semibold text-primary-500 tracking-wider mb-6 uppercase">Vision</h3>
          <div
            className={`transition-all duration-1000 ease-out delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <p className="text-xl md:text-3xl font-bold text-primary-600 mb-4">
              &quot;Global Top-tier HRD &amp; Human Agency Think Tank&quot;
            </p>
            <p className="text-sm md:text-base text-foreground-500 leading-relaxed max-w-[720px]">
              2030년까지 OECD 기준에 부합하는 &lsquo;주도성 역량 진단 및 교육 표준&rsquo;을 수립하고, 글로벌 기업과 국가 정책의 핵심 HRD 파트너로 도약한다.
            </p>
          </div>
        </div>

        <div className="border-t border-background-200/70 my-14 md:my-16"></div>

        {/* Core Values */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-sm font-semibold text-primary-500 tracking-wider mb-10 uppercase">Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {coreValues.map((value, idx) => (
              <div
                key={value.title}
                className={`group p-6 md:p-7 bg-background-50 rounded-lg border border-background-200/50 transition-all duration-400 ease-out hover:bg-background-100 cursor-default ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${400 + idx * 150}ms` }}
              >
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <i className={`${value.icon} text-2xl text-accent-500 transition-all duration-500`}></i>
                </div>
                <h4 className="text-base font-semibold text-foreground-800 mb-1">{value.title}</h4>
                <p className="text-xs text-foreground-400 mb-2.5">{value.subtitle}</p>
                <p className="text-sm text-foreground-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Goals */}
        <div>
          <h3 className="text-sm font-semibold text-primary-500 tracking-wider mb-10 uppercase">Strategic Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {strategicGoals.map((goal, idx) => (
              <div
                key={goal.number}
                className={`relative p-6 md:p-8 bg-background-50 border border-background-200/50 md:border-r-0 last:border-r transition-all duration-700 ease-out ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${800 + idx * 200}ms` }}
              >
                <span className="text-3xl font-bold font-mono text-secondary-300 tracking-tight">{goal.number}</span>
                <h4 className="text-base font-semibold text-foreground-800 mt-3 mb-2.5">{goal.title}</h4>
                <p className="text-sm text-foreground-500 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}