import { useState, useEffect, useRef, useCallback } from 'react';

const articlesData = [
  {
    id: 'chapter1',
    chapter: '제1장 총칙',
    articles: [
      {
        id: 'article1',
        number: '제1조',
        title: '(명칭)',
        content: '본 회는 \'인적자원개발연구협회\'(영문명: Human Resource Development Institute, 이하 \'본 협회\'라 한다)라 칭한다.',
      },
      {
        id: 'article2',
        number: '제2조',
        title: '(목적)',
        content: '본 협회는 생성형 AI 기술 발전과 환경 변화에 따른 인류의 인지 능력 위기 및 주체성 저하 문제를 진단하고, OECD 2030 프레임워크에 부합하는 주도적 문제 해결 능력을 갖춘 미래 인재를 양성하는 것을 목적으로 한다. 이를 위해 4대 주도성(회복·진로·관계·실존) 중심의 인적자원 개발 연구를 수행하고, 기업의 HR 채용 문제 해결과 국가적 정책 과제 수주 및 B2B 교육 솔루션을 제공함으로써 사회적 가치 창출과 국가적 위상 제고에 기여한다.',
      },
      {
        id: 'article3',
        number: '제3조',
        title: '(소재지)',
        content: '본 협회의 주사무소는 서울특별시에 두며, 필요에 따라 이사회의 의결을 거쳐 국내외에 지부 또는 연구소를 둘 수 있다.',
      },
      {
        id: 'article4',
        number: '제4조',
        title: '(사업의 범위)',
        content: '본 협회는 제2조의 목적을 달성하기 위하여 다음 각 호의 사업을 추진한다.',
        list: [
          'AI 시대의 인지 능력 및 주체성 회복을 위한 4대 핵심 역량 연구',
          '기업 현장 맞춤형 B2B 교육 프로그램 개발 및 HR 채용 진단 도구 제공',
          'OECD 등 글로벌 교육 프레임워크 연계 정책 연구 및 정부 지원 연구 과제 수주·수행',
          'AI 활용 역량 재정의 및 청년층 주도적 사고(What & Why) 강화를 위한 세미나, 포럼, 학술행사 개최',
          '기타 본 협회의 목적 달성에 필요한 부대사업',
        ],
      },
    ],
  },
  {
    id: 'chapter2',
    chapter: '제2장 연구 분야 및 학술 활동',
    articles: [
      {
        id: 'article5',
        number: '제5조',
        title: '(핵심 연구 영역)',
        content: '본 협회 부설 연구소는 다음 각 호의 4대 주도성(Autonomy)을 중심 연구 분야로 설정하고 세부 연구 및 프로그램 개발을 진행한다.',
        subArticles: [
          {
            title: '회복 주도성 (Resilient Autonomy) 연구',
            content: '연구 내용: 예측 불가능한 변화와 실패 속에서 자기인식(메타인지)과 정서 조절을 통해 스스로를 회복하는 역량 연구',
            indicators: '주요 지표: 자기인식력(Self-awareness), 정서 조절력, 회복탄력성',
          },
          {
            title: '진로 주도성 (Career Autonomy) 연구',
            content: '연구 내용: 타인이나 알고리즘의 기준이 아닌 자신만의 가치관과 기준에 따라 진로를 결정하는 역량 연구',
            indicators: '주요 지표: 자기결정성(Self-determination), 내재적 동기, 가치 기반 의사결정력',
          },
          {
            title: '관계 주도성 (Relational Autonomy) 연구',
            content: '연구 내용: 디지털·비대면 환경에서 타인의 평가에 휘둘리지 않고 중심을 지키며 신뢰와 연대를 구축하는 역량 연구',
            indicators: '주요 지표: 관계 주체성, 정서적 수용력, 설득력 및 리더십',
          },
          {
            title: '실존 주도성 (Existential Autonomy) 연구',
            content: '연구 내용: 알고리즘과 정보 과잉 환경에서 자신의 삶과 습관, 방향성에 대한 주도권을 확립하는 역량 연구',
            indicators: '주요 지표: 삶의 주도권, 자기 통제력, 의미 형성 능력(Meaning-making)',
          },
        ],
      },
    ],
  },
  {
    id: 'chapter3',
    chapter: '제3장 구성원 및 조직',
    articles: [
      {
        id: 'article6',
        number: '제6조',
        title: '(연구진 및 전문가 인력풀)',
        content: '본 협회는 학술적 엄밀성과 산업 현장성을 동시에 확보하기 위해 다음 각 호의 전문가로 전문 연구진 및 자문단을 구성한다.',
        list: [
          '글로벌 AI 및 빅테크 기업 HR 실무진 (前 AI 기업 APAC 채용 총괄, 前 메타 People Analytics 매니저 등)',
          '교육학 및 인지과학 전문가 (교육학과 교수, 교육대학원 인지과학 박사 등)',
          '글로벌 교육 정책 전문가 (前 OECD Education 정책분석관 등)',
        ],
      },
      {
        id: 'article7',
        number: '제7조',
        title: '(회원의 자격 및 구분)',
        content: '본 협회의 회원은 본 협회의 취지에 동의하고 입회 절차를 마친 자로서 다음과 같이 구분한다.',
        subArticles: [
          { title: '정회원', content: '인적자원개발, 교육학, 인지과학, HR 분야의 전문 연구자 및 실무자' },
          { title: '특별회원', content: '본 협회의 목적에 찬동하여 사업을 지원하는 기업, 기관 및 단체' },
          { title: '자문위원', content: '학계, 산업계, 글로벌 정책 기구의 전문가로서 이사회의 위촉을 받은 자' },
        ],
      },
    ],
  },
  {
    id: 'chapter4',
    chapter: '제4장 임원 및 이사회',
    articles: [
      {
        id: 'article8',
        number: '제8조',
        title: '(임원 구성)',
        content: '본 협회는 다음의 임원을 둔다.',
        list: ['이사장 1인', '협회장(연구소장) 1인', '이사 5인 이내 (이사장, 협회장 포함)', '감사 1인'],
      },
      {
        id: 'article9',
        number: '제9조',
        title: '(이사회의 기능)',
        content: '이사회는 최고 의결기관으로서 다음 사항을 심의·의결한다.',
        list: [
          '정관의 변경 및 협회 운영에 관한 제반 규정의 제·개정',
          '사업 계획 수립, 예산 확정 및 결산 승인',
          '주요 연구 과제 및 B2B 사업 방향 설정',
        ],
      },
    ],
  },
  {
    id: 'chapter5',
    chapter: '제5장 자산 및 회계',
    articles: [
      {
        id: 'article10',
        number: '제10조',
        title: '(재정 및 수익)',
        content: '본 협회의 운영 및 연구 재정은 다음 각 호의 수익으로 충당한다.',
        list: [
          '기업 B2B 교육 솔루션 제공 및 HR 진단 도구 라이선스 수익',
          '정부 및 공공기관 연구 과제 수행 지원금',
          '회원 연회비, 후원금 및 기타 기부금',
          '학술행사 및 컨설팅 수익금',
        ],
      },
      {
        id: 'article11',
        number: '제11조',
        title: '(회계연도)',
        content: '본 협회의 회계연도는 매년 1월 1일에 시작하여 12월 31일에 종료한다.',
      },
    ],
  },
  {
    id: 'chapter6',
    chapter: '제6장 부칙',
    articles: [
      {
        id: 'article12',
        number: '제1조',
        title: '(시행일)',
        content: '본 정관은 이사회의 의결을 거쳐 설립 등기를 마친 날로부터 시행한다.',
      },
    ],
  },
];

export default function ArticlesSection() {
  const [activeSection, setActiveSection] = useState('chapter1');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.02 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handleScroll = () => {
      const articleIds = articlesData.map((a) => a.id);
      for (let i = articleIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(articleIds[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(articleIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-10 bg-background-50">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-2">
          <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">Articles of Association</span>
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-primary-600 mb-4">인적자원개발연구협회 정관</h2>
        <p className="text-sm text-foreground-400 mb-12 md:mb-16">Articles of Association</p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Sticky Sidebar */}
          <div className="md:w-[200px] flex-shrink-0">
            <nav className="md:sticky md:top-[100px]">
              <ul className="flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                {articlesData.map((chapter) => (
                  <li key={chapter.id} className="flex-shrink-0">
                    <button
                      onClick={() => scrollTo(chapter.id)}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-md whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeSection === chapter.id
                          ? 'text-primary-500 bg-primary-50 font-medium'
                          : 'text-foreground-500 hover:text-primary-500 hover:bg-background-100'
                      }`}
                    >
                      {chapter.chapter}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {articlesData.map((chapter, chIdx) => (
              <div
                key={chapter.id}
                id={chapter.id}
                className={`mb-12 md:mb-16 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${chIdx * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-primary-600 mb-6 pb-3 border-b border-background-200/70">
                  {chapter.chapter}
                </h3>

                {chapter.articles.map((article) => (
                  <div key={article.id} className="mb-8">
                    <h4 className="text-base font-medium text-foreground-800 mb-3">
                      {article.number}<span className="text-foreground-500 font-normal">{article.title}</span>
                    </h4>

                    {article.content && (
                      <p className="text-sm text-foreground-600 leading-[1.85] mb-3">{article.content}</p>
                    )}

                    {article.list && (
                      <ol className="list-decimal list-inside space-y-1.5 mb-3 ml-1">
                        {article.list.map((item, i) => (
                          <li key={i} className="text-sm text-foreground-600 leading-relaxed">{item}</li>
                        ))}
                      </ol>
                    )}

                    {article.subArticles && article.subArticles.map((sub, si) => (
                      <div key={si} className="ml-3 mb-3 pl-4 border-l-2 border-background-200">
                        <p className="text-sm font-medium text-foreground-700 mb-1">{sub.title}</p>
                        <p className="text-sm text-foreground-500 leading-relaxed mb-1">{sub.content}</p>
                        {sub.indicators && (
                          <p className="text-xs text-foreground-400">{sub.indicators}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}