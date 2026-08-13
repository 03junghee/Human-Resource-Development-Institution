import { useEffect, useRef, useState } from 'react';

const pyramidLevels = [
  {
    level: 1,
    title: '자기 이해와 메타인지',
    subtitle: 'Self-Relationship',
    desc: '가장 중요한 관계는 나 자신과의 관계다. 타인과 잘 지내기 위해서는 먼저 자기 자신과 잘 지내야 하며, 혼자 있는 시간을 견디고 즐길 줄 아는 능력이 관계 주도성의 출발점이다. 자기 이해가 선행되지 않으면 타인을 명료하게 볼 수 없고, 자신의 좁은 그릇으로 남을 평가하게 된다.',
    color: 'bg-primary-500',
  },
  {
    level: 2,
    title: '관계의 주도권과 환경 조성',
    subtitle: 'Relational Autonomy',
    desc: '스스로 하루를 효율적으로 관리하고 있다는 확신이 있을 때, 상대방의 조건에 흔들리지 않는 당당한 관계가 가능해진다. 핵심은 잉여 감정의 배풂 — 외로움에 목말라 타인에게 의존하는 것이 아니라, 나를 먼저 채우고 남는 감정을 나누는 여유다.',
    color: 'bg-accent-500',
  },
  {
    level: 3,
    title: '소통의 기술과 맥락 관리',
    subtitle: 'Communication Strategy',
    desc: '솔직함과 무례함은 한 끗 차이다. 자신의 욕구를 정확히 전달하되, 그것이 타인을 해치는 칼이 되지 않도록 정제하는 훈련이 관계 주도성의 핵심 기술이다. 스몰토크로 물꼬를 트고, 빅토크로 깊이를 더하는 전략적 소통을 연구한다.',
    color: 'bg-secondary-500',
  },
  {
    level: 4,
    title: '갈등 관리와 선별적 관계 유지',
    subtitle: 'Social Desking',
    desc: '모든 사람과 잘 지내려 애쓰기보다, 결이 맞지 않는 관계에는 차가운 예의로 거리를 유지한다. 모든 관계에 마침표를 찍으려 싸우기보다, 에너지를 소모하지 않고 자연스럽게 멀어지는 페이드아웃의 기술 또한 연구 대상이다.',
    color: 'bg-primary-600',
  },
];

const problems = [
  {
    title: '고립의 심화',
    desc: 'AI와의 정서적 관계가 늘수록, 관계의 결핍을 AI로 채우려다 실제 관계에서는 더 멀어지는 역설이 발생한다.',
  },
  {
    title: '인간 고유 영역의 축소',
    desc: 'AI는 승패를 가릴 수 있어도, 패배의 절망과 승리의 환희 같은 감정의 깊이에는 닿지 못한다. 공감과 사회적 유대는 인간다움을 지키는 최후의 보루다.',
  },
  {
    title: '판단 주도권의 상실',
    desc: 'AI가 최적의 답을 제시해도, 어떤 관계를 맺고 어떤 문제를 풀지는 결국 인간의 경험과 판단에 달려 있다.',
  },
];

export default function ResearchRelationalSection() {
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
          <span className="text-xs font-medium text-secondary-600 uppercase tracking-widest">Relational Autonomy</span>
          <h2 className="text-xl md:text-3xl font-bold text-primary-600 mt-2 mb-3">관계 주도성 연구</h2>
          <p className="text-sm md:text-base text-foreground-500 leading-relaxed">
            Before You Can Own a Relationship, You Must Own Yourself First.
          </p>
        </div>

        {/* Concept Intro */}
        <div
          className={`bg-background-100 rounded-lg p-6 md:p-8 mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm md:text-base text-foreground-700 leading-relaxed">
            관계 주도성은 타인과의 연결에 앞서 자기 자신과의 관계를 먼저 확립하고, 그 위에서 소통과 거리두기의 기술을 쌓아가는 <strong className="text-primary-600">단계적 구조(Layered Structure)</strong>로 정의된다. 이는 실제로 <strong className="text-primary-600">관계는 수평이 아니라 수직으로 쌓인다</strong>는 관점에 기반한다.
          </p>
        </div>

        {/* Why Now */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-foreground-400 uppercase tracking-wider mb-5">왜 지금 관계 주도성인가</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {problems.map((p, idx) => (
              <div
                key={p.title}
                className={`bg-background-50 rounded-lg p-5 border border-background-200/50 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${100 + idx * 100}ms` }}
              >
                <h4 className="text-sm font-semibold text-foreground-800 mb-2">{p.title}</h4>
                <p className="text-xs text-foreground-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Layer Pyramid */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-foreground-400 uppercase tracking-wider mb-6">관계 주도성의 4단계 피라미드 구조</h3>
          <div className="space-y-4">
            {pyramidLevels.map((level, idx) => (
              <div
                key={level.level}
                className={`transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
              >
                <div className="flex items-start gap-4 bg-background-50 rounded-lg p-5 border border-background-200/50">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${level.color} text-background-50 font-bold text-sm flex-shrink-0`}>
                    {level.level}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground-800 mb-1">{level.title}</h4>
                    <p className="text-xs text-foreground-400 font-medium mb-2">{level.subtitle}</p>
                    <p className="text-xs md:text-sm text-foreground-500 leading-relaxed">{level.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-foreground-400 mt-4 text-center">
            1층이 무너지면 2, 3, 4층은 성립하지 않는다. 관계 주도성 연구는 이 네 층이 어떻게 순차적으로 형성되고, AI 시대 왜 1층부터 다시 다져야 하는지를 다룬다.
          </p>
        </div>

        {/* Communication Table */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-foreground-400 uppercase tracking-wider mb-5">소통 전략 비교</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-background-200/50 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-background-100">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-foreground-500">구분</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-foreground-500">미숙한 소통</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-primary-600">주도적 소통</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { category: '대화의 시작', bad: '대화 자체를 회피한다', good: '스몰토크로 물꼬를 트고, 빅토크로 깊이를 더한다' },
                  { category: '자기표현', bad: '침묵하거나 날을 세운다', good: '솔직하되 정제된 언어로 욕구를 전달한다' },
                  { category: '오해 발생 시', bad: '혼자 추측하고 거리를 둔다', good: '"3분만 시간 내줄래?"라고 먼저 다가간다' },
                ].map((row, idx) => (
                  <tr key={row.category} className={idx % 2 === 0 ? 'bg-background-50' : 'bg-background-100'}>
                    <td className="px-4 py-3 text-xs font-medium text-foreground-700">{row.category}</td>
                    <td className="px-4 py-3 text-xs text-foreground-400">{row.bad}</td>
                    <td className="px-4 py-3 text-xs text-primary-600 font-medium">{row.good}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}