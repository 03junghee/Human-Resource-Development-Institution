import { useEffect, useRef, useState } from 'react';

const articles = [
  {
    source: 'LG경영연구원',
    sourceShort: 'LG경영연구원',
    date: '2002.09.04',
    title: '주도성을 갖춘 인재가 중요하다',
    url: 'https://www.lgbr.co.kr/report/view.do?idx=1786',
    author: '황인경',
    category: '리포트',
    summary:
      '주도성(Personal Initiative)은 구성원 개개인이 자신에게 주어진 업무를 ‘왜’ 하는지, ‘무엇’을 해야 하는지, ‘바람직한 결과’가 무엇인지를 파악하여 책임감을 가지고 일을 완수하는 의지와 행동을 의미한다. 미국의 Rath & Strong 조사에 따르면, 주도적으로 업무를 수행하는 구성원은 30%에 미치지 못하며, 이는 조직 성과에 결정적인 영향을 미친다.',
    tags: ['주도성', '인재개발', '조직성과'],
  },
  {
    source: 'World Economic Forum',
    sourceShort: 'WEF',
    date: '2025',
    title: 'The Future of Jobs Report 2025',
    url: 'https://www.weforum.org/reports/the-future-of-jobs-report-2025/',
    author: 'World Economic Forum',
    category: '글로벌 보고서',
    summary:
      '2025년 WEF 미래 일자리 보고서는 2030년까지 필요한 핵심 스킬 1위로 회복탄력성(Resilience)을 지목했다. AI 기술이 반복적 업무를 대체하는 시대, 인간의 진정한 경쟁력은 속도가 아닌 ‘다시 일어서는 힘’에 있다.',
    tags: ['회복탄력성', '미래역량', 'AI시대'],
  },
  {
    source: 'American Economic Association',
    sourceShort: 'AEA',
    date: '2024',
    title: 'Long-Term and Lasting Impacts of Personal Initiative Training on Microbusinesses',
    url: 'https://www.aeaweb.org/articles?id=10.1257/aeri.20240581',
    author: 'Michael Frese et al.',
    category: '학술 논문',
    summary:
      'Michael Frese 교수팀의 연구는 주도성(Personal Initiative) 훈련이 개인과 기업에 장기적, 지속적인 긍정적 영향을 미침을 입증했다. 주도성 훈련을 받은 소규모 기업의 매출과 이익은 수년에 걸쳐 꾸준히 증가하며, 자기효능감과 운영의 지속가능성도 동반 상승했다.',
    tags: ['주도성훈련', '기업성과', '자기효능감'],
  },
  {
    source: 'OECD',
    sourceShort: 'OECD',
    date: '2023',
    title: 'Future of Education and Skills 2030: Student Agency',
    url: 'https://www.oecd.org/en/about/projects/future-of-education-and-skills-2030.html',
    author: 'OECD Education Directorate',
    category: '정책 프레임워크',
    summary:
      'OECD 2030 학습 나침반은 학생의 주체성(Student Agency)을 미래 교육의 핵심으로 정의한다. 주체성은 학생이 목표를 세우고, 성찰하며, 책임감 있게 행동하여 변화를 만들어가는 능력이다. 본 협회는 이 프레임워크를 기반으로 회복·진로·관계·실존의 4대 주도성 연구를 추진하고 있다.',
    tags: ['주체성', 'OECD2030', '미래교육'],
  },
  {
    source: '교수신문',
    sourceShort: '교수신문',
    date: '2025',
    title: 'AI 평준화로 이력서 시대 종말…"1000장 내도 소용없다"',
    url: 'https://www.kyosu.net/news/articleView.html?idxno=158934',
    author: '교수신문',
    category: '미디어 기사',
    summary:
      'AI 도구의 평준화로 인해 기존 이력서와 스펙 중심 채용은 효용성을 잃고 있다. 미국 노동 시장과 기업 구조, 고등교육 시스템이 동시에 AI에 재편되면서, 진정한 인재 선별의 기준이 ‘도구 사용 능력’에서 ‘주도적 사고력’으로 전환되고 있다.',
    tags: ['AI시대', '채용패러다임', '주도적사고력'],
  },
];

function ArticleCard({
  article,
  index,
  isVisible,
}: {
  article: (typeof articles)[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-background-50 border border-background-200/60 rounded-lg overflow-hidden hover:border-primary-300 transition-all duration-400 hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
      }}
    >
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-block bg-primary-50 text-primary-700 text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-md">
              {article.category}
            </span>
            <span className="text-[10px] md:text-xs text-foreground-400">{article.date}</span>
          </div>
          <i className="ri-external-link-line text-foreground-400 group-hover:text-primary-500 transition-colors text-sm"></i>
        </div>

        <h3 className="text-sm md:text-base font-bold text-foreground-900 group-hover:text-primary-600 transition-colors mb-1 leading-snug">
          {article.title}
        </h3>
        <p className="text-xs text-foreground-500 mb-3">
          {article.author} · {article.source}
        </p>

        <p className="text-xs md:text-sm text-foreground-600 leading-relaxed mb-3 line-clamp-3">
          {article.summary}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] bg-secondary-50 text-secondary-700 px-2 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function RelatedArticlesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-22 px-6 md:px-10 bg-background-50"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-10 md:mb-12">
          <span
            className="inline-block text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
            }}
          >
            Research & Reports
          </span>
          <h2
            className="text-lg md:text-2xl font-bold text-foreground-950 mb-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.4s ease-out 0.1s, transform 0.4s ease-out 0.1s',
            }}
          >
            관련 연구·기사
          </h2>
          <p
            className="text-sm text-foreground-600 max-w-[720px] leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.4s ease-out 0.2s, transform 0.4s ease-out 0.2s',
            }}
          >
            인적자원개발연구협회의 연구 방향성과 학술적 근거를 뒷받침하는 주요 기사와 보고서, 학술 자료를 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {articles.map((article, idx) => (
            <ArticleCard
              key={idx}
              article={article}
              index={idx}
              isVisible={isVisible}
            />
          ))}
        </div>

        <p className="text-[11px] text-foreground-400 mt-6 text-center">
          위 기사 및 보고서는 인적자원개발연구협회와의 직접적인 관련이나 제휴를 의미하지 않으며, 학술·정책 참고 자료로 제공됩니다.
        </p>
      </div>
    </section>
  );
}