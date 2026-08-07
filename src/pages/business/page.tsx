import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { useEffect, useRef, useState } from 'react';

function SectionCard({ title, subtitle, children, index }: { title: string; subtitle: string; children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-background-50 border border-background-200/70 rounded-lg p-6 md:p-8">
        <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">{subtitle}</span>
        <h2 className="text-lg md:text-xl font-bold text-primary-600 mt-2 mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default function BusinessPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-28 md:pt-32 pb-10 md:pb-14 px-6 md:px-10 bg-background-50 border-b border-background-200/50">
          <div className="max-w-[900px] mx-auto">
            <nav className="text-xs text-foreground-400 mb-4">
              <span className="text-foreground-500">홈</span>
              <i className="ri-arrow-right-s-line mx-2"></i>
              <span className="text-primary-500 font-medium">사업·협력</span>
            </nav>
            <h1 className="text-xl md:text-3xl font-bold text-primary-600">사업·협력</h1>
            <p className="text-sm text-foreground-500 mt-2">기업 맞춤형 HR 진단 도구와 B2B 교육 솔루션, 기업·기관 협력을 소개합니다.</p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-background-50">
          <div className="max-w-[900px] mx-auto space-y-8">
            <SectionCard title="HR 진단 연구개발" subtitle="HR Diagnostics" index={0}>
              <div className="space-y-4">
                <p className="text-sm text-foreground-600 leading-relaxed">
                  AI 자소서 범람 및 서류 무용지물화에 대응하는 기업용 HR 채용 진단 도구 및 실무 평가 도구를 개발합니다.
                  People Analytics 기반으로 구직자의 주도적 사고력 데이터를 분석하고, 꼬리질문 면접 가이드라인과
                  실시간 실무 과제 평가 프레임워크를 구축합니다.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-background-100 rounded-md p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-file-search-line text-accent-500"></i>
                      <h4 className="text-sm font-semibold text-foreground-700">꼬리질문 면접 가이드</h4>
                    </div>
                    <p className="text-xs text-foreground-500 leading-relaxed">
                      AI 자소서를 벗어나 지원자의 실제 주도적 문제 해결 역량을 평가하는 구조화된 면접 프로토콜
                    </p>
                  </div>
                  <div className="bg-background-100 rounded-md p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-bar-chart-box-line text-accent-500"></i>
                      <h4 className="text-sm font-semibold text-foreground-700">실시간 실무 과제 평가</h4>
                    </div>
                    <p className="text-xs text-foreground-500 leading-relaxed">
                      주어진 시간 내에 실제 업무 시나리오를 해결하는 과제 기반 역량 진단 시스템
                    </p>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="B2B 교육" subtitle="B2B Education" index={1}>
              <div className="space-y-4">
                <p className="text-sm text-foreground-600 leading-relaxed">
                  수동화된 청년층과 기업 현장 요구 간의 격차를 해소하는 기업 맞춤형 교육 프로그램을 운영합니다.
                  삼성, SK 등 대기업 및 주요 기업 대상 HRD 컨설팅과 솔루션을 제공합니다.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-background-100 rounded-md p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-presentation-line text-primary-500"></i>
                      <h4 className="text-sm font-semibold text-foreground-700">주도적 문제 해결 교육</h4>
                    </div>
                    <p className="text-xs text-foreground-500 leading-relaxed">
                      AI 도구 활용을 넘어 스스로 문제를 정의하고 해결책을 설계하는 역량 강화 프로그램
                    </p>
                  </div>
                  <div className="bg-background-100 rounded-md p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-building-line text-primary-500"></i>
                      <h4 className="text-sm font-semibold text-foreground-700">기업 맞춤형 컨설팅</h4>
                    </div>
                    <p className="text-xs text-foreground-500 leading-relaxed">
                      기업별 조직 문화와 인재상에 맞춘 주도성 진단 및 역량 개발 로드맵 설계
                    </p>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="기업·기관 협력" subtitle="Partnership" index={2}>
              <div className="space-y-4">
                <p className="text-sm text-foreground-600 leading-relaxed">
                  글로벌 AI 기업 APAC 채용 네트워크, OECD 정책 자문단 및 국내외 교육기관과의 협력을 추진합니다.
                  연구회원 기업에게는 HR 채용 진단 도구 우선 도입 및 할인 혜택을 제공합니다.
                </p>
                <div className="mt-4 p-5 bg-primary-50 rounded-lg border border-primary-100">
                  <h4 className="text-sm font-semibold text-foreground-800 mb-3">협력 문의</h4>
                  <div className="space-y-2 text-sm text-foreground-600">
                    <p className="flex items-center gap-2">
                      <i className="ri-phone-line text-primary-500"></i>
                      TEL. 02-586-7562
                    </p>
                    <p className="flex items-center gap-2">
                      <i className="ri-mail-line text-primary-500"></i>
                      기업 협력 및 B2B 교육 관련 문의를 환영합니다
                    </p>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}