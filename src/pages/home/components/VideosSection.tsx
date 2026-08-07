import { useEffect, useRef, useState } from 'react';

const videos = [
  {
    id: 1,
    title: 'How AI Could Save (Not Destroy) Education',
    speaker: 'Sal Khan',
    year: '2023',
    core: '생성형 AI가 학생에게 답을 쉽게 주어 사고를 멈추게 하는 부정행위 도구가 아니라, 질문을 던져 스스로 답을 찾도록 유도하는 소크라테스식 튜터가 될 수 있음을 제시합니다.',
    connection: 'What & Why 중심의 주도적 사고력',
    tag: 'Career Autonomy',
    color: 'accent',
  },
  {
    id: 2,
    title: 'How AI can enhance education',
    speaker: 'Rose Luckin',
    year: 'TEDxLondon',
    core: '교육공학자 로즈 러킨 교수는 AI 기술이 고도화될수록 인간이 가져야 할 가장 중요한 지능은 지식 암기가 아닌 \'메타인지(Metacognition)\'임을 강조합니다.',
    connection: 'AI가 대신해 줄 수 없는 인간 고유의 영역인 \'자신의 사고 과정과 감정 상태를 객관적으로 인식하고 조절하는 힘\'',
    tag: 'Resilient Autonomy',
    color: 'secondary',
  },
  {
    id: 3,
    title: 'Reinventing Education in the Age of AI',
    speaker: 'Yuval Noah Harari',
    year: '',
    core: '역사학자 유발 하라리는 AI가 인간의 기술적 직무를 빠르게 대체하는 시대에 청년들에게 가르쳐야 할 최고의 역량은 특정 직업 기술이 아니라 \'정서적 유연성(Mental Resilience)\'과 \'자기인식(Self-awareness)\'이라고 역설합니다.',
    connection: '알고리즘과 외부 환경이 삶을 설계해 주는 시대에, 타인과 기술에 휘둘리지 않고 자기 삶의 중심과 가치 기반 의사결정력을 확립',
    tag: 'Existential & Career Autonomy',
    color: 'primary',
  },
  {
    id: 4,
    title: 'Education for the Artificial Intelligence Age',
    speaker: 'Charles Fadel',
    year: 'TEDx',
    core: '커리큘럼 재설계 재단(CCR) 설립자인 찰스 파델은 기존의 정답 암기식 교육은 AI 시대에 완전히 무용지물이며, 미래 인재 교육은 \'지식·기술·인성·메타학습\'을 다루는 방향으로 재편되어야 한다고 말합니다.',
    connection: 'OECD 2030 프레임워크가 강조하는 \'주체성(Agency)\'을 교육과 채용 현장에 어떻게 적용해야 하는지',
    tag: 'OECD 연계 및 정책',
    color: 'accent',
  },
  {
    id: 5,
    title: 'The power of believing that you can improve',
    speaker: 'Carol Dweck',
    year: '2014',
    core: '캐롤 드윅 교수는 실패와 불확실성 앞에서 \'아직 능력이 부족할 뿐(Not Yet)\'이라 믿고 과정 중심의 성장을 이어가는 \'성장 마인드셋(Growth Mindset)\'을 제안합니다.',
    connection: '예측 불가능한 변화와 실패 속에서도 무너지지 않는 정서 조절력과 회복탄력성',
    tag: 'Resilient Autonomy',
    color: 'secondary',
  },
];

const tagColors: Record<string, string> = {
  accent: 'bg-accent-100/80 text-accent-700',
  secondary: 'bg-secondary-100/80 text-secondary-700',
  primary: 'bg-primary-100 text-primary-700',
};

export default function VideosSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.03 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 md:px-10 bg-background-50">
      <div className="max-w-[1080px] mx-auto">
        <div className="mb-2">
          <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">Research Insight</span>
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-primary-600 mb-2">영상</h2>
        <p className="text-sm text-foreground-400 mb-12 md:mb-16">AI 시대의 교육, 인지, 주체성을 이해하기 위한 주요 강연</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {videos.map((video, idx) => (
            <div
              key={video.id}
              className={`group bg-background-50 border border-background-200/70 rounded-lg overflow-hidden transition-all duration-600 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative bg-background-100 h-36 md:h-40 flex items-center justify-center cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-background-50/90 flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <i className="ri-play-fill text-2xl text-primary-500 ml-0.5"></i>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${tagColors[video.color] || tagColors.accent}`}>
                    {video.tag}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-foreground-800 mb-1.5 leading-snug">{video.title}</h4>
                <p className="text-xs text-foreground-400 mb-3">
                  {video.speaker}{video.year ? `, ${video.year}` : ''}
                </p>
                <p className="text-xs text-foreground-500 leading-relaxed line-clamp-2 mb-2">{video.core}</p>
                <div className="pt-2 border-t border-background-100">
                  <p className="text-[11px] text-foreground-400 leading-relaxed">
                    <span className="text-foreground-300">연계: </span>
                    {video.connection}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}