import { useEffect, useRef, useState } from 'react';

export default function GreetingSection() {
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
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-10 bg-background-50">
      <div className="max-w-[820px] mx-auto">
        <div className="mb-2">
          <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">소개</span>
        </div>

        <h2
          className={`text-xl md:text-3xl font-bold text-primary-600 leading-snug mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          &quot;AI가 답을 주는 시대, &lsquo;질문하는 인간&rsquo;의 주도성을 되찾습니다.&quot;
        </h2>

        <div className="space-y-6 text-sm md:text-base text-foreground-600 leading-[1.85]">
          <Paragraph index={0} visible={visible}>
            인적자원개발연구협회 홈페이지를 찾아주신 여러분을 진심으로 환영합니다.
          </Paragraph>
          <Paragraph index={1} visible={visible}>
            생성형 AI 기술의 비약적 발전은 인류에게 전대미문의 편리함을 안겨주었지만, 동시에 심각한 인지적 위기를 불러왔습니다.
          </Paragraph>
          <Paragraph index={2} visible={visible}>
            단순 지식 암기와 AI 도구 활용에 지나치게 의존한 결과, 스스로 문제를 정의하고 검증하는 &lsquo;주도적 사고 능력&rsquo;은 위축되고 있습니다.
          </Paragraph>
          <Paragraph index={3} visible={visible}>
            최근 글로벌 연구에서 입증된 청년 세대의 역(逆)플린 효과와 기업 현장에서 일어나는 &lsquo;서류 평가 무용지물론&rsquo;은 우리 사회 교육과 채용 패러다임의 근본적 전환을 요구하고 있습니다.
          </Paragraph>
        </div>

        <div className="my-10 md:my-12 border-t border-background-200/70"></div>

        <div className="space-y-6 text-sm md:text-base text-foreground-600 leading-[1.85]">
          <Paragraph index={4} visible={visible}>
            인적자원개발연구협회는 이러한 시대적 과제에 응답하기 위해 설립되었습니다. 빅테크 HR 실무 총괄, 국내외 교육학 및 인지과학 교수진, OECD 정책 전문가들이 뜻을 모아, AI 보조자로 전락하지 않고 변화를 주도하는 진짜 미래 인재의 역량을 정의하고 진단합니다.
          </Paragraph>
          <Paragraph index={5} visible={visible}>
            본 연구회는 OECD 2030 프레임워크가 제시하는 &lsquo;삶의 주체성&rsquo;을 바탕으로 회복·진로·관계·실존의 4대 주도성 연구를 추진합니다. 이를 통해 기업과 사회에 주도적 인재 양성의 새로운 패러다임을 제시하고, 국가적으로는 인류 인지 능력 위기에 대응하는 글로벌 수준의 정책 솔루션을 제시하겠습니다.
          </Paragraph>
          <Paragraph index={6} visible={visible}>
            AI 활용을 넘어, 스스로의 삶과 일터에서 주도권을 가진 인재들이 대한민국을 넘어 세계 무대로 나아갈 수 있도록 인적자원개발연구협회가 든든한 학술적·실무적 이정표가 되겠습니다.
          </Paragraph>
        </div>

        <div
          className={`mt-10 md:mt-12 text-right text-sm text-foreground-400 transition-all duration-1000 ease-out delay-[1200ms] ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p>- 인적자원개발연구협회 회장 및 연구진 일동 -</p>
        </div>
      </div>

      {/* 왜 지금 주도성 연구인가 */}
      <div className="max-w-[1280px] mx-auto mt-20 md:mt-28 bg-background-100 rounded-2xl p-6 md:p-10 lg:p-12">
        <div className="mb-2">
          <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">Why Now</span>
        </div>
        <h3
          className={`text-xl md:text-3xl font-bold text-foreground-950 mb-8 md:mb-10 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          왜 지금 주도성 연구인가
        </h3>

        {/* LG 기사 하이라이트 */}
        <div
          className={`bg-background-50 border-2 border-primary-200 rounded-xl overflow-hidden shadow-lg transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="p-6 md:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
              {/* 좌측: 기사 정보 + 핵심 인용 */}
              <div className="lg:flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                    <i className="ri-newspaper-line text-xl"></i>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-primary-700">LG경영연구원 리포트</p>
                    <p className="text-xs text-foreground-500">황인경 연구원 · 2002.09.04</p>
                  </div>
                </div>

                <a
                  href="https://www.lgbr.co.kr/report/view.do?idx=1786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block"
                >
                  <h4 className="text-lg md:text-2xl font-bold text-foreground-900 group-hover:text-primary-600 transition-colors mb-5 leading-snug">
                    주도성을 갖춘 인재가 중요하다
                    <i className="ri-external-link-line text-base ml-2 text-foreground-400 group-hover:text-primary-500"></i>
                  </h4>
                </a>

                <blockquote className="border-l-4 border-accent-400 pl-5 md:pl-6 py-2 mb-6 bg-accent-50/40 rounded-r-lg">
                  <p className="text-sm md:text-base text-foreground-700 leading-relaxed italic font-medium">
                    &quot;주도성이란 구성원 개개인이 자신에게 주어진 업무를 &lsquo;왜&rsquo; 하는지, &lsquo;무엇&rsquo;을 해야 하는지, &lsquo;바람직한 결과&rsquo;가 무엇인지를 파악하여 책임감을 가지고 일을 완수하는 의지·행동을 말한다.&quot;
                  </p>
                </blockquote>

                <p className="text-sm md:text-base text-foreground-600 leading-relaxed mb-5">
                  미국의 Rath & Strong이 미국 제조업체 및 서비스업 관리자 200여 명을 대상으로 한 조사에 따르면, 조직 구성원들의 주도적인 업무 수행이 조직 성과에 결정적인 영향을 미친다. 그러나 주도적으로 업무를 수행하는 구성원은 30%에 미치지 못한다.
                </p>

                <a
                  href="https://www.lgbr.co.kr/report/view.do?idx=1786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <span>원문 보기</span>
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>

              {/* 우측: 핵심 포인트 카드 3개 */}
              <div className="lg:w-[460px] flex flex-col gap-4">
                <div className="bg-primary-50/80 rounded-lg p-5 md:p-6 border border-primary-200">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary-200 text-primary-800 text-base font-bold flex-shrink-0">
                      1
                    </span>
                    <div>
                      <h5 className="text-sm font-bold text-primary-800 mb-1.5">주도성 중시 채용 Practice</h5>
                      <p className="text-xs md:text-sm text-foreground-600 leading-relaxed">
                        학력·경력 등 테크니컬한 측면만이 아니라 주도적 성향을 갖추고 있는지에 대한 세심한 점검이 가능한 면접 제도 강구. 꼬리질문을 통한 실제 경험 검증 필요.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent-50/80 rounded-lg p-5 md:p-6 border border-accent-200">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent-200 text-accent-800 text-base font-bold flex-shrink-0">
                      2
                    </span>
                    <div>
                      <h5 className="text-sm font-bold text-accent-800 mb-1.5">평가 시스템 재정비</h5>
                      <p className="text-xs md:text-sm text-foreground-600 leading-relaxed">
                        구성원이 달성해야 할 업무 내용을 측정 가능한 형태로 명료화하고, 360도 다면 평가 및 즉각적 피드백 체계 도입. 목표 설정 시 탑다운이 아닌 구성원 참여 필수.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary-50/80 rounded-lg p-5 md:p-6 border border-secondary-200">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-secondary-200 text-secondary-800 text-base font-bold flex-shrink-0">
                      3
                    </span>
                    <div>
                      <h5 className="text-sm font-bold text-secondary-800 mb-1.5">지원적 조직 분위기</h5>
                      <p className="text-xs md:text-sm text-foreground-600 leading-relaxed">
                        3M의 McKnight 전 CEO: &quot;아무 일도 하지 않는 것보다 무엇이든지 하고 실패하는 것이 더 낫다.&quot; 위험 감수 장려·실패 용인 문화가 주도성과 혁신성의 토양.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 출처 바 */}
          <div className="px-6 md:px-8 lg:px-10 py-4 bg-primary-50 border-t-2 border-primary-200 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-100 px-2.5 py-1 rounded-md">
              <i className="ri-links-line"></i>
              출처
            </span>
            <a
              href="https://www.lgbr.co.kr/report/view.do?idx=1786"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-700 hover:text-primary-800 hover:underline transition-colors font-medium"
            >
              LG경영연구원 - 주도성을 갖춘 인재가 중요하다 (황인경, 2002.09.04)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Paragraph({ children, index, visible }: { children: React.ReactNode; index: number; visible: boolean }) {
  const isEmphasis = index === 0 || index === 4 || index === 6;

  return (
    <p
      className={`transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
    >
      {isEmphasis ? (
        <span className="relative inline-block">
          <span className="text-foreground-800 font-medium">{children}</span>
          <span
            className={`absolute bottom-0 left-0 h-[2px] bg-accent-400/60 transition-all duration-[1200ms] ease-out ${
              visible ? 'w-full' : 'w-0'
            }`}
            style={{ transitionDelay: `${600 + index * 150}ms` }}
          ></span>
        </span>
      ) : (
        children
      )}
    </p>
  );
}