import { useEffect, useRef, useState } from 'react';

const trafficLightItems = [
  {
    color: 'bg-green-500',
    label: '초록불 — 주체적 욕구',
    items: ['내가 진짜 원해서 선택했다', '하고 나서 심장이 뛰었다', '서열이나 비교와 무관한 만족', '나만의 애호(좋아함)에서 나온 행동'],
  },
  {
    color: 'bg-red-500',
    label: '빨간불 — 강요된 환경',
    items: ['남에게 잘 보이려고 선택했다', '하고 나서 허탈함(현타)이 남았다', '남과의 비교에서 오는 안도감', '서열 사회의 관습을 답습한 행동'],
  },
];

const dailyRoutine = [
  { time: '아침', task: '오늘 단 하나, 온전히 나의 주관이 담긴 자유 실천 과제를 정한다' },
  { time: '낮', task: 'AI 도구를 부리되(Agent Boss), 최종 판단과 완결은 내가 짓는다' },
  { time: '저녁', task: '오늘의 결정들을 초록불/빨간불로 회고하고 기록한다' },
];

const references = [
  { num: '1', author: 'Karl Friston', title: '자유 에너지 원칙 및 베이지안 뇌 모델' },
  { num: '2', author: 'Hannah Arendt', title: '노동(Labor), 작업(Work), 행위(Act/Practice)의 구분' },
  { num: '3', author: '송길영', title: '핵개인의 시대 및 시대 예보' },
  { num: '4', author: 'John Krumboltz', title: '계획된 우연 이론(Planned Happenstance)' },
];

export default function ResearchExistentialSection() {
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
      <div className="max-w-[900px] mx-auto">
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">Existential Autonomy</span>
          <h2 className="text-xl md:text-3xl font-bold text-primary-600 mt-2 mb-3">실존 주도성 연구</h2>
          <p className="text-sm md:text-base text-foreground-500 leading-relaxed">
            The Real Question Is Not &quot;What Can AI Do for Me,&quot; But &quot;What Do I Want, Underneath It All.&quot;
          </p>
        </div>

        {/* Core Concept */}
        <div
          className={`bg-background-50 rounded-lg p-6 md:p-8 border border-background-200/70 mb-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm md:text-base text-foreground-700 leading-relaxed">
            실존적 주도성은 AI가 인간의 지능과 정서를 흉내 내는 시대에, 인간만이 가진 고유한 본질을 정의하고 타인의 욕망이나 알고리즘의 예측에 종속되지 않는 자기 결정권을 확보하는 것을 의미한다. 이는 남들이 하는 대로 따라가는 부자유의 삶에서 벗어나, 내면의 진짜 욕구인 <strong className="text-primary-600">욕동</strong>을 발견하고 실천하는 <strong className="text-primary-600">핵개인(Nuclear Individual)</strong>으로서의 삶의 양식에 관한 연구다.
          </p>
        </div>

        {/* Why AI Makes Humans Passive */}
        <div className="mb-10">
          <h3 className="text-base font-semibold text-foreground-800 mb-4">왜 AI가 인간을 더 수동적으로 만드는가</h3>
          <p className="text-sm text-foreground-600 leading-relaxed mb-5">
            AI는 인간의 행동 패턴을 데이터로 학습해 &quot;다음 1초 후&quot;를 예측하는 <strong className="text-primary-600">베이지안 머신(Bayesian Machine)</strong>의 원리로 작동한다. 문제는 이 예측에 의존할수록 인간이 스스로 판단하는 내부 모델을 강화할 기회를 잃는다는 데 있다 — 결국 알고리즘이 설계한 타인의 욕망을, 자신의 욕망이라 착각하며 살아가게 되는 것이다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background-50 rounded-lg p-5 border border-background-200/50">
              <h4 className="text-xs font-semibold text-foreground-400 uppercase tracking-wider mb-2">AI가 찾는 것</h4>
              <p className="text-sm text-foreground-600 leading-relaxed">
                확률과 계산이 도출하는 <strong className="text-primary-600">정답(Answer)</strong>
              </p>
            </div>
            <div className="bg-primary-50 rounded-lg p-5 border border-primary-100">
              <h4 className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">인간이 찾는 것</h4>
              <p className="text-sm text-foreground-700 leading-relaxed">
                실수와 고통, 승리의 환희를 통과하며 얻는 <strong className="text-primary-600">의미(Meaning)</strong>와 <strong className="text-primary-600">재미(Fun)</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Traffic Light Self-Diagnosis */}
        <div className="mb-10">
          <h3 className="text-base font-semibold text-foreground-800 mb-4">자가진단 도구 — 오늘의 선택은 초록불인가, 빨간불인가</h3>
          <p className="text-sm text-foreground-500 leading-relaxed mb-5">
            실존적 주도성 연구가 제안하는 메타인지 기록법은 하루의 결정들을 신호등으로 분류하는 것에서 출발한다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trafficLightItems.map((item, idx) => (
              <div
                key={idx}
                className={`bg-background-50 rounded-lg p-5 border border-background-200/50 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${100 + idx * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <h4 className="text-sm font-semibold text-foreground-800">{item.label}</h4>
                </div>
                <ul className="space-y-1.5">
                  {item.items.map((text, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-foreground-500">
                      <i className="ri-check-line text-xs text-primary-400 mt-0.5 flex-shrink-0"></i>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-foreground-400 mt-4">
            매일 저녁, 오늘 내린 결정들을 두 칸 중 어디에 놓을지 기록하는 것만으로도 자신이 얼마나 자기 욕동에 따라 살고 있는지를 객관적으로 볼 수 있다.
          </p>
        </div>

        {/* Daily Routine */}
        <div className="mb-10">
          <h3 className="text-base font-semibold text-foreground-800 mb-4">하루 속 실천 — 주체적 근육을 만드는 루틴</h3>
          <div className="space-y-3">
            {dailyRoutine.map((r, idx) => (
              <div
                key={r.time}
                className={`flex items-start gap-4 bg-background-50 rounded-lg p-4 border border-background-200/50 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                <span className="flex-shrink-0 w-16 text-xs font-semibold text-primary-600 uppercase">{r.time}</span>
                <p className="text-sm text-foreground-600 leading-relaxed">{r.task}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-foreground-400 mt-4 leading-relaxed">
            이 루틴이 누적되며 형성되는 것이 적극적 절약과 경제적 자립이다 — 무분별한 소비와 보상 심리에서 벗어나 자원을 주체적으로 관리함으로써, 싫은 일을 거절할 수 있는 자유의 기반을 마련하는 것이다.
          </p>
        </div>

        {/* Memento Mori */}
        <div className="mb-10">
          <div className="bg-primary-500 rounded-lg p-6 md:p-8 text-background-50">
            <h3 className="text-base font-semibold mb-3">삶의 유한성이라는 출발점</h3>
            <p className="text-sm leading-relaxed mb-4">
              <strong>Memento Mori</strong>(죽음을 기억하라) — 주체적인 삶은 삶의 유한성을 깨닫는 데서 시작된다. 한정된 시간을 어떻게 하면 가장 나답게 쓸 것인가를 자각할 때, 남의 욕망을 따라 사는 삶과 결별할 수 있다.
            </p>
            <p className="text-sm font-medium italic">
              &quot;나의 일은 스스로 할 수 있을 만큼의 역량을 갖추는 것.&quot;
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-10">
          <p className="text-sm md:text-base text-foreground-700 leading-relaxed">
            기술이라는 엔진을 장착하되 운전대는 내가 쥐고, 알고리즘이 추천하는 길이 아닌 내가 의미를 느끼는 길을 선택하는 것 — 이것이 AI 시대에 인간이 인간답게 살아남는 유일한 정답이다.
          </p>
        </div>
      </div>
    </section>
  );
}