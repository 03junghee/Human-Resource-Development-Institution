import { useEffect, useRef, useState } from 'react';

const researchTopics = [
  { num: '01', text: '자신의 업(業)에 대한 명확한 정의와 방향을 설정하고, 이를 달성하기 위해 AI 자원을 동원하는 것' },
  { num: '02', text: '개인의 메타인지 수준이 진로 주도성에 어떤 영향을 미치는가?' },
  { num: '03', text: 'AI와의 위임 비율(Tuning) 조절 능력은 진로 성과에 어떤 영향을 미치는가' },
  { num: '04', text: '진로 주도성은 예상치 못한 변화에 적응하고 실패로부터 학습하는 것을 수반한다' },
  { num: '05', text: '진로 주도성은 자율성, 성장, 의미 실현 등의 가치를 실현하는 데 어떤 역할을 하는가?' },
  { num: '06', text: '진로 주도성은 산업 및 기술 환경과 동향에 어떻게 적응하고 영향을 미치는가?' },
  { num: '07', text: '진로 주도성은 효율성과 정체성, 속도와 깊이 등 경쟁적 가치와 이익 사이의 균형을 요구한다' },
];

const references = [
  { source: 'Stanford University', title: 'Planned Happenstance Learning Theory', author: 'John Krumboltz' },
  { source: 'World Economic Forum', title: 'Future of Jobs Report — Core Skills for 2030', author: '' },
  { source: 'Harvard Business Review', title: 'Agentic Careers and the Future of Work', author: '' },
];

export default function ResearchCareerSection() {
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
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-10 bg-background-100 border-b border-background-200/50">
      <div className="max-w-[900px] mx-auto">
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-medium text-primary-600 uppercase tracking-widest">Career Autonomy</span>
          <h2 className="text-xl md:text-3xl font-bold text-primary-600 mt-2 mb-3">진로 주도성 연구</h2>
          <p className="text-sm md:text-base text-foreground-500 leading-relaxed">
            Career Autonomy is Not About Following a Job, But About Owning One&apos;s Work.
          </p>
        </div>

        {/* Core Concept */}
        <div
          className={`bg-background-50 rounded-lg p-6 md:p-8 border border-background-200/70 mb-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm md:text-base text-foreground-700 leading-relaxed mb-4">
            진로 주도성은 직업(Job)이 아닌 업(Work)을 중심으로, AI라는 수많은 도구를 부리는 주체적 관리자로서 자신의 진로를 설계하는 힘을 의미한다. 이는 실제로 <strong className="text-primary-600">AI에게 끌려다니는 것이 아닌, AI를 부리는 것</strong>으로 정의된다.
          </p>
          <p className="text-sm text-foreground-500 leading-relaxed">
            AI가 정답을 대신 내놓는 시대, 특정 직함이나 조직에 의존하는 진로는 더 이상 안정적이지 않다. 대신 개인이 창출하는 본질적 가치, 즉 업을 중심으로 진로를 설계하고 확장해 나가는 능력이 핵심이 된다.
          </p>
        </div>

        {/* 5 Research Themes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            { title: '직이 아닌 업 중심의 진로 전환', desc: '특정 직무가 사라질 수 있지만, 개인이 보유한 핵심 가치와 기술은 지속된다. 자신이 추구하는 업의 본질을 정의하는 능력이 중요하다.', icon: 'ri-briefcase-line' },
            { title: 'Tuning 최적화', desc: '업무의 효율성을 위해 AI에게 위임할 영역과 인간의 창의성 및 윤리적 판단이 개입해야 할 지점을 정교하게 설계하여 생산성을 극대화한다.', icon: 'ri-slideshow-line' },
            { title: '디지털 자원 관리', desc: '여러 개의 AI 에이전트를 동시에 운용하며 복합적인 프로젝트를 완수하는 능력을 연구한다. 개인이 하나의 기업처럼 기능할 수 있게 한다.', icon: 'ri-server-line' },
            { title: '감흥력과 의미 창출', desc: '정답이 정해진 효율적인 일은 AI에게 맡기되, 사람의 마음을 움직이고 새로운 의미를 부여하는 인간만의 감흥력을 진로 경쟁력의 핵심으로 삼는다.', icon: 'ri-heart-pulse-line' },
            { title: '메타인지 기반 자기 이해', desc: '세상이 말하는 트렌드나 연봉 같은 외부 소음에 흔들리지 않기 위해, 자신이 무엇을 좋아하고 잘하는지 스스로 객관적으로 파악하는 능력을 다룬다.', icon: 'ri-brain-line' },
          ].map((item, idx) => (
            <div
              key={item.title}
              className={`bg-background-50 rounded-lg p-5 border border-background-200/50 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${100 + idx * 100}ms` }}
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-md bg-primary-50 mb-3">
                <i className={`${item.icon} text-lg text-primary-500`}></i>
              </div>
              <h4 className="text-sm font-semibold text-foreground-800 mb-2">{item.title}</h4>
              <p className="text-xs text-foreground-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Planned Career Autonomy */}
        <div
          className={`mb-10 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h3 className="text-base font-semibold text-foreground-800 mb-4">Planned Career Autonomy</h3>
          <div className="bg-primary-50 rounded-lg p-5 md:p-6 border border-primary-100">
            <p className="text-sm text-foreground-600 leading-relaxed mb-4">
              스탠퍼드 대학의 존 크럼볼츠(John Krumboltz) 교수는 예상치 못한 변화를 진로의 기회로 전환하는 <strong className="text-primary-600">계획된 우연(Planned Happenstance)</strong> 이론을 제안하였다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-semibold text-primary-600 mb-2">메타인지의 중요성</h4>
                <p className="text-xs text-foreground-500 leading-relaxed">
                  진로 주체성 확립의 가장 기본은 나를 알아가는 것, 즉 메타인지이다. 메타인지가 높을수록 AI라는 도구를 자신에게 맞게 맞춤형으로 학습시키고(Personalizing), 자신만의 고유한 서사(Storytelling)를 만들어갈 수 있다.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-primary-600 mb-2">미래 문해력</h4>
                <p className="text-xs text-foreground-500 leading-relaxed">
                  미래 문해력(Future Literacy)은 미래를 예측하는 것이 아니라, 다양한 가능성을 탐색해 최선의 선택을 내리는 역량이다. 이는 기술 복제 시대에 나다움이란 무엇인가라는 본질적 질문에 답하며 스스로의 이야기를 써나가는 힘이 된다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Topics Table */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-foreground-400 uppercase tracking-wider mb-5">진로 주도성 연구 주제</h3>
          <div className="space-y-3">
            {researchTopics.map((topic, idx) => (
              <div
                key={topic.num}
                className={`flex items-start gap-3 bg-background-50 rounded-lg p-4 border border-background-200/50 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: `${400 + idx * 80}ms` }}
              >
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary-50 text-primary-600 text-xs font-bold">
                  {topic.num}
                </span>
                <p className="text-sm text-foreground-600 leading-relaxed pt-0.5">{topic.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* References */}
        <div>
          <h3 className="text-sm font-semibold text-foreground-400 uppercase tracking-wider mb-4">해외 연구 기관 사례</h3>
          <div className="space-y-2">
            {references.map((ref) => (
              <div key={ref.title} className="flex items-center gap-3 text-sm">
                <span className="text-xs font-medium text-accent-600 min-w-[140px]">{ref.source}</span>
                <span className="text-foreground-600">{ref.title}</span>
                {ref.author && <span className="text-xs text-foreground-400">({ref.author})</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}