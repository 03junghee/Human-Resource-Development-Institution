import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const notices = [
  {
    id: 1,
    category: '학술 포럼',
    title: '제1회 인적자원개발연구협회 정기 학술 심포지엄 개최 안내',
    date: '2026.09.18',
    summary: '주제: "AI 자소서 시대의 종말과 \'주도성(Agency)\' 중심 채용 패러다임의 전환"',
    detail: '일시: 2026년 9월 18일(금) 14:00 ~ 17:30 | 대상: 국내외 기업 HRD·채용 담당자, 교육학/인지과학 연구자 및 대학 관계자 | 내용: OECD 2030 프레임워크 기반 4대 주도성(회복·진로·관계·실존) 진단 모델 및 삼성·SK 등 대기업 실시간 실무 과제 도입 사례 발표',
  },
  {
    id: 2,
    category: 'B2B 솔루션',
    title: '\'People Analytics 기반 주도적 사고력 진단 툴 v1.0\' 기업 시연회 참가 안내',
    date: '2026.08.20',
    summary: 'AI 작성 문서를 가려내고 구직자의 꼬리질문 대응력 및 실시간 실무 해결 역량을 측정하는 B2B 진단 도구 시연회',
    detail: '참여 혜택: 사전 신청 기업 대상 3개월 무료 테스트 라이선스 제공 및 HR 컨설팅 지원',
  },
  {
    id: 3,
    category: '국책 과제',
    title: '2026년도 정부 지원 R&D 교육 정책 연구 참여 연구원 모집',
    date: '2026.07.15',
    summary: '연구 과제: "Gen Z 세대의 역(逆)플린 효과 극복을 위한 인지적 자율성 회복 프로그램 개발"',
    detail: '모집 분야: 인지과학, 교육공학, People Analytics 관련 석·박사급 연구원',
  },
  {
    id: 4,
    category: '안내',
    title: '비영리법인 후원금 영수증 발급 및 기부금 집행 내역 공시',
    date: '2026.06.30',
    summary: '본 협회는 기부금 모집 및 집행의 투명성을 원칙으로 합니다.',
    detail: '2026년 상반기 후원금 집행 내역 및 소득공제용 기부금 영수증 발급 절차를 확인하시기 바랍니다.',
  },
];

export default function NoticesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 md:px-10 bg-background-100">
      <div className="max-w-[900px] mx-auto">
        <div className="mb-2">
          <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">Notice</span>
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-primary-600 mb-6">공지사항</h2>

        {/* Alert banner */}
        <div className="bg-primary-50 border border-primary-200 rounded-md px-5 py-4 mb-10">
          <p className="text-sm text-primary-700 font-medium">
            [알림] AI 시대, 미래 인재의 핵심 역량을 함께 연구할 정회원 및 파트너 기관을 모집합니다.
          </p>
          <p className="text-xs text-primary-500 mt-1.5 leading-relaxed">
            인적자원개발연구협회는 AI 보조자로 전락하지 않고 주도적 문제 해결 능력을 갖춘 인재를 양성하는 글로벌 연구회입니다. 연구회의 주요 소식과 최신 학술·사업 공지사항을 안내해 드립니다.
          </p>
        </div>

        <div className="space-y-1">
          {notices.map((notice, idx) => (
            <Link
              key={notice.id}
              to={`/resources/notices`}
              className={`group flex items-start gap-4 md:gap-6 px-5 py-4 bg-background-50 border border-background-200/50 rounded-lg transition-all duration-300 hover:border-background-300 cursor-pointer ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <span className="text-[11px] font-medium text-accent-500 bg-accent-50 px-2.5 py-1 rounded-full whitespace-nowrap mt-0.5">
                {notice.category}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-sm font-medium text-foreground-700 group-hover:text-primary-500 transition-colors leading-snug">
                    {notice.title}
                  </h4>
                  <span className="text-xs text-foreground-300 whitespace-nowrap font-mono">{notice.date}</span>
                </div>
                <p className="text-xs text-foreground-400 mt-1.5 leading-relaxed">{notice.summary}</p>
              </div>
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0">
                <i className="ri-arrow-right-s-line text-foreground-400"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}