import { useEffect, useRef, useState } from 'react';

const fourActions = [
  {
    title: 'Deciding to Recover',
    subtitle: '무너짐을 인정하고 다시 결정하는 힘',
    desc: '회복탄력성이 높은 사람은 실패 앞에서 무너지지 않으려 애쓰지 않는다. 무너졌다는 사실을 인정하고, 그 감정을 인식한 채로 다음 걸음을 스스로 선택한다.',
  },
  {
    title: 'Reframing Setbacks',
    subtitle: '좌절을 정보로 재해석하는 힘',
    desc: '빠르게 회복하는 사람들의 공통점은 좌절을 위협이 아니라 다음 행동을 위한 정보로 다루는 태도이다. 현타의 순간에도 감정에 잠식되지 않는다.',
  },
  {
    title: 'Delegating with Judgment',
    subtitle: 'AI에게 위임하되 주도권은 지키는 힘',
    desc: 'AI에게 일을 맡기되, 어디까지 위임하고 어디서부터 인간의 판단이 개입해야 하는지를 결정하는 능력. 주도권은 항상 인간에게 남아 있어야 한다.',
  },
  {
    title: 'Sustaining Identity',
    subtitle: '속도가 아닌 깊이로 자신을 지키는 힘',
    desc: 'AI는 지치지 않고 실수하지 않으려 하지만, 인간은 실수와 지침 속에서 의미를 발견하고 다시 일어선다. 이 다시 시작하는 마음이 기계가 가질 수 없는 인간만의 품격이다.',
  },
];

export default function ResearchResilientSection() {
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
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-10 bg-background-50 border-b border-background-200/50">
      <div className="max-w-[900px] mx-auto">
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">Resilient Autonomy</span>
          <h2 className="text-xl md:text-3xl font-bold text-primary-600 mt-2 mb-3">회복 주도성 연구</h2>
          <p className="text-sm md:text-base text-foreground-500 leading-relaxed max-w-[680px]">
            예측 불가능한 변화와 실패 속에서 자기인식과 정서 조절을 통해 자신의 상태를 인식하고 다시 방향을 설정하는 능력을 연구합니다.
          </p>
        </div>

        {/* WEF Quote */}
        <div
          className={`bg-primary-500 rounded-lg p-6 md:p-8 mb-12 text-background-50 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-start gap-3">
            <i className="ri-double-quotes-l text-2xl text-background-200 flex-shrink-0 mt-1"></i>
            <div>
              <p className="text-base md:text-lg font-medium leading-relaxed mb-3">
                AI 시대, 진짜 경쟁력은 속도가 아니라 회복력이다.
              </p>
              <p className="text-sm text-background-200">
                True Competitiveness in the AI Era Is Not Speed, but the Capacity to Recover.
              </p>
              <p className="text-xs text-background-300 mt-2 font-mono">World Economic Forum, Future of Jobs Report 2025</p>
            </div>
          </div>
        </div>

        {/* Step 01 */}
        <div
          className={`mb-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-100 text-accent-600 text-xs font-bold">01</div>
            <h3 className="text-base md:text-lg font-semibold text-foreground-800">기술 변화와 인간 감정의 불일치</h3>
          </div>
          <p className="text-sm text-foreground-600 leading-relaxed pl-11">
            AI 기술은 인간의 계산과 판단보다 훨씬 빠르게 발전하며, 새로운 도구가 등장하면 어렵게 익힌 기존 기술이 순식간에 무용지물이 되기도 한다. 이러한 기술 변화 속도와 인간 감정 속도의 불일치는 피로, 불안, 자존감의 붕괴로 이어지며, 이른바 현타(허탈감)를 만들어낸다. 이때 낙심하지 않고 다시 일어서는 회복탄력성이 없으면 도태될 수밖에 없다.
          </p>
        </div>

        {/* Step 02 */}
        <div
          className={`mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-100 text-accent-600 text-xs font-bold">02</div>
            <h3 className="text-base md:text-lg font-semibold text-foreground-800">산업 분야를 막론한 회복의 중요성</h3>
          </div>
          <p className="text-sm text-foreground-600 leading-relaxed pl-11">
            AI와의 공존이 요구하는 것은 기술을 더 잘 다루는 능력이 아니라, 충격을 받았을 때 얼마나 빠르게 회복하고 다시 움직이는가이다. 세계경제포럼(WEF)의 미래 일자리 보고서 2025에 따르면 2030년까지 필요한 핵심 스킬 1위는 회복탄력성이었다. AI는 지치지 않고 실수하지 않으려 하지만, 인간은 실수와 지침 속에서 의미를 발견하고 다시 일어선다.
          </p>
        </div>

        {/* 4 Actions */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-foreground-400 uppercase tracking-wider mb-5">
            AI 대전환기 시대에 청년에게 중요한 4가지 회복 주도성 행동
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fourActions.map((action, idx) => (
              <div
                key={action.title}
                className={`bg-background-100 rounded-lg p-5 border border-background-200/50 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                <h4 className="text-sm font-semibold text-primary-600 mb-1">{action.title}</h4>
                <p className="text-xs text-accent-600 font-medium mb-2">{action.subtitle}</p>
                <p className="text-xs text-foreground-500 leading-relaxed">{action.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Indicators */}
        <div>
          <h3 className="text-sm font-semibold text-foreground-400 uppercase tracking-wider mb-5">핵심 연구 지표</h3>
          <div className="flex flex-wrap gap-2">
            {['Self-awareness', 'Metacognition', 'Emotional Regulation', 'Resilience', 'Meaning-making'].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-accent-50 text-accent-700 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}