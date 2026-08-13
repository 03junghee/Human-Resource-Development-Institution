import { useEffect, useRef, useState } from 'react';

// 2번~5번 사진의 데이터 내용을 정확히 담은 객체 배열
const noticeDetails = [
  {
    id: 'notice-1',
    category: '프로그램 모집',
    title: 'Autonomy Fellow-in-Residence 프로그램 참가자 추천 모집 안내',
    summary: 'AI 시대에 자기 삶과 진로의 방향을 스스로 판단하고 결정할 수 있는 힘을 기르는 인재육성 프로그램입니다.',
    date: '2026.08.01',
    details: [
      {
        icon: 'ri-calendar-line',
        text: '모집 기간: 2026년 8월 1일(토) - 9월 30일(수)',
      },
      {
        icon: 'ri-user-line',
        text: '대상: 진로와 삶의 방향에 대해 진지하게 고민하고 있는 청년 및 직장인',
      },
      {
        icon: 'ri-file-text-line',
        text: 'Autonomy Fellow-in-Residence는 공개 모집이 아닌 추천 기반의 제한적 프로그램입니다. 협회 연구진이 개발한 인재육성 과정을 실제 참여자와 연결하고, AI 시대에 사고의 주도권을 외부에 넘기지 않는 자기판단력을 함양하는 것을 목표로 합니다. 참여는 무료이며, 참가비 대신 참여자의 시간과 노력을 투자하는 Fellowship 형태로 운영됩니다.',
      },
      {
        icon: 'ri-phone-line',
        text: '문의: 협회 사무국 02-586-7562 | contact@kahrd.org',
      },
    ],
  },
  {
    id: 'notice-2',
    category: '국책 과제',
    title: '2026년도 정부 지원 R&D 교육 정책 연구 참여 연구원 모집',
    summary: '연구 과제: "Gen Z 세대의 역(逆)플린 효과 극복을 위한 인지적 자율성 회복 프로그램 개발"',
    date: '2026.07.15',
    details: [
      {
        icon: 'ri-calendar-line',
        text: '모집 기간: 2026년 7월 15일(수) - 8월 15일(토)',
      },
      {
        icon: 'ri-team-line',
        text: '모집 인원: 연구책임자 1명, 공동연구원 3명, 연구보조원 2명',
      },
      {
        icon: 'ri-file-text-line',
        text: '교육부 산하 한국연구재단의 2026년도 인문사회분야 중견연구자 지원사업에 선정된 과제입니다. Gen Z 세대의 인지적 역량 저하 현상을 실증적으로 분석하고, 메타인지 훈련 기반의 자율성 회복 프로그램을 개발·검증하는 3년 장기 프로젝트입니다.',
      },
      {
        icon: 'ri-check-line',
        text: '지원 자격: 인지과학·교육학·심리학 박사 학위 소지자 또는 이에 준하는 연구 경력 보유자. 연구회원 우대.',
      },
    ],
  },
  {
    id: 'notice-3',
    category: '안내',
    title: '비영리법인 후원금 영수증 발급 및 기부금 집행 내역 공시',
    summary: '본 협회는 기부금 모집 및 집행의 투명성을 원칙으로 합니다.',
    date: '2026.06.30',
    details: [
      {
        icon: 'ri-file-text-line',
        text: '본 협회는 「기부금품의 모집 및 사용에 관한 법률」 에 따라 등록된 비영리법인으로, 후원금에 대해 연말정산 시 소득공제 혜택을 받으실 수 있는 기부금 영수증을 발급합니다.',
      },
      {
        icon: 'ri-bar-chart-line',
        text: '2025회계연도 후원금 집행 내역: 연구 과제 직접비 62%, 교육 프로그램 운영비 21%, 학술 포럼 개최비 12%, 일반 관리비 5% (2026년 3월 정기 이사회 승인 완료).',
      },
      {
        icon: 'ri-download-line',
        text: '상세 내역서는 협회 사무국(02-586-7562)으로 요청 시 이메일로 발송해 드립니다.',
      },
    ],
  },
  {
    id: 'notice-4',
    category: '워크숍',
    title: '2026 하반기 연구 방법론 워크숍: 주도성 진단 도구 개발 현황 공유회',
    summary: '4대 주도성 측정 지표 및 진단 도구 개발 현황을 공유하고 연구 방법론을 논의하는 워크숍입니다.',
    date: '2026.11.07',
    details: [
      {
        icon: 'ri-calendar-line',
        text: '일시: 2026년 11월 7일(토) 10:00 - 16:00',
      },
      {
        icon: 'ri-map-pin-line',
        text: '장소: 한국과학기술회관 국제회의실 (온·오프라인 병행)',
      },
      {
        icon: 'ri-file-text-line',
        text: '회복·진로·관계·실존의 4대 주도성 영역별 측정 지표와 진단 도구의 개발 현황을 공유하고, 정성적·정량적 연구 방법론을 논의하는 워크숍입니다. 각 영역별 연구책임자의 발표와 자유 토론 세션이 준비되어 있으며, 연구회원 누구나 참석 가능합니다. 온라인 참여 링크는 사전 등록자에 한해 행사 3일 전 이메일로 발송됩니다.',
      },
      {
        icon: 'ri-user-line',
        text: '대상: 연구회원 및 협회 연구진. 사전 등록 필수 (10월 30일 마감).',
      },
    ],
  },
];

export default function NoticesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // 열려 있는 아코디언 항목 ID들을 관리하는 상태 (여러 개 동시 열림 지원)
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 토글 클릭 처리 함수
  const toggleNotice = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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

        {/* Accordion Notice List */}
        <div className="space-y-3">
          {noticeDetails.map((notice, idx) => {
            const isOpen = expandedIds.includes(notice.id);

            return (
              <div
                key={notice.id}
                className={`bg-background-50 border rounded-lg transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-primary-300 ring-1 ring-primary-100' : 'border-background-200/60 hover:border-background-300'
                } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Notice Item Header (Clickable) */}
                <div
                  onClick={() => toggleNotice(notice.id)}
                  className="flex flex-col sm:flex-row items-start gap-3 md:gap-5 px-5 py-4 cursor-pointer select-none"
                >
                  <span className="text-[11px] font-medium text-accent-500 bg-accent-50 px-2.5 py-1 rounded-full whitespace-nowrap mt-0.5 flex-shrink-0">
                    {notice.category}
                  </span>

                  <div className="flex-1 min-w-0 w-full">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-sm font-semibold text-foreground-800 leading-snug">
                        {notice.title}
                      </h4>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-foreground-300 font-mono">
                          {notice.date}
                        </span>
                        <i
                          className={`ri-arrow-down-s-line text-lg text-foreground-400 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        ></i>
                      </div>
                    </div>
                    <p className="text-xs text-foreground-400 mt-1.5 leading-relaxed">
                      {notice.summary}
                    </p>
                  </div>
                </div>

                {/* Expanded Detail Body (사진 2~5번 세부 내용) */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-background-100/80 bg-background-50/50 space-y-3.5 animate-fadeIn">
                    {notice.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 text-xs text-foreground-600 leading-relaxed">
                        <i className={`${detail.icon} text-foreground-400 text-sm mt-0.5 flex-shrink-0`}></i>
                        <span>{detail.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}