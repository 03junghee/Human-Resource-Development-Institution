import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { notices } from '@/mocks/notices';



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
              to={`/resources/notices/${notice.id}`}
              className={`group flex flex-col sm:flex-row items-start gap-3 md:gap-6 px-4 md:px-5 py-4 bg-background-50 border border-background-200/50 rounded-lg transition-all duration-300 hover:border-background-300 cursor-pointer ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <span className="text-[11px] font-medium text-accent-500 bg-accent-50 px-2.5 py-1 rounded-full whitespace-nowrap mt-0.5 flex-shrink-0">
                {notice.category}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-4">
                  <h4 className="text-sm font-medium text-foreground-700 group-hover:text-primary-500 transition-colors leading-snug">
                    {notice.title}
                  </h4>
                  <span className="text-xs text-foreground-300 whitespace-nowrap font-mono flex-shrink-0">{notice.date}</span>
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