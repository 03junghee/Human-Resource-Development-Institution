import { useState, useEffect, useRef } from 'react';

export default function SponsorshipContactSection() {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const formUrl = 'https://readdy.ai/api/form/d9r0cj6e3oq4jqumts5g';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.03 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');
    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = (formData.get('phone_alt') as string || '').trim();
    if (honeypot) {
      setFormSubmitted(true);
      return;
    }
    formData.delete('phone_alt');

    try {
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        params.append(key, value as string);
      });

      const res = await fetch(formUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      const responseText = await res.text();
      let parsed: any = {};
      try { parsed = JSON.parse(responseText); } catch { /* parse failure handled below */ }

      if (res.ok && parsed?.code === 'OK') {
        setFormSubmitted(true);
      } else {
        const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText || '';
        setFormError(serverMsg || '문의 전송 중 오류가 발생했습니다. 다시 시도해 주세요.');
      }
    } catch {
      setFormError('네트워크 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  const amounts = ['월 1만 원', '월 3만 원', '월 5만 원', '자율'];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-10 bg-background-50">
      <div className="max-w-[900px] mx-auto">
        {/* Sponsorship */}
        <div id="sponsorship" className="mb-20 md:mb-24">
          <div className="mb-2">
            <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">Support Us</span>
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-primary-600 mb-6">후원</h2>

          <blockquote className="text-base md:text-lg font-medium text-foreground-700 leading-relaxed mb-6 pl-4 border-l-[3px] border-accent-400">
            &quot;AI에 사고를 외주 주는 시대, 청년들의 주도적 사고력을 되살리는 힘이 되어주세요.&quot;
          </blockquote>

          <p className="text-sm md:text-base text-foreground-500 leading-[1.85] mb-8">
            생성형 AI의 가파른 발전 속에서 스스로 문제를 정의하고 삶을 이끄는 &lsquo;주체성(Agency)&rsquo;을 잃어가는 청년들이 늘어나고 있습니다. 인적자원개발연구협회는 청년들이 AI 보조자에 머무르지 않고, 스스로 생각하고 도전하는 인재로 도약할 수 있도록 연구하고 교육합니다. 여러분의 후원금은 미래 세대의 인지적 주체성 회복과 국가적 HRD 혁신을 위한 연구에 소중하게 사용됩니다.
          </p>

          <div className="mb-10">
            <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4">후원금 사용처</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: '4대 주도성 연구', desc: '회복·진로·관계·실존 주도성 역량 연구 및 진단 도구 개발' },
                { title: '무상 교육', desc: '청년 및 구직자 대상 주도적 사고력(What & Why) 교육 및 컨설팅' },
                { title: '정책 연구', desc: 'OECD 연계 국가 교육 정책 연구 및 학술 포럼 개최' },
              ].map((item, idx) => (
                <div key={idx} className="bg-background-100 rounded-md p-5">
                  <h4 className="text-sm font-semibold text-foreground-700 mb-1.5">{item.title}</h4>
                  <p className="text-xs text-foreground-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4">후원 유형 안내</h3>

            <div>
              <p className="text-sm text-foreground-500 mb-4">
                <strong className="text-foreground-700">정기 후원:</strong> 매월 일정 금액을 후원하여 지속 가능한 연구 생태계를 만듭니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setSelectedAmount(amt)}
                    className={`px-5 py-2.5 text-sm rounded-md border transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      selectedAmount === amt
                        ? 'border-primary-400 bg-primary-500 text-background-50'
                        : 'border-background-300 text-foreground-600 hover:border-primary-300 hover:text-primary-500'
                    }`}
                  >
                    {amt}
                  </button>
                ))}
              </div>
              <p className="text-xs text-foreground-400">
                <strong>혜택:</strong> 기부금 영수증 발급(소득공제 혜택) · 연간 연구 보고서 수령 · 협회 주최 포럼 우선 초청
              </p>
            </div>
          </div>

          <div className="text-sm text-foreground-400 pt-4 border-t border-background-200">
            <p><strong className="text-foreground-600">후원 문의:</strong> 02-586-7562</p>
            <p className="mt-1"><strong className="text-foreground-600">기부금 영수증:</strong> 법정 기부금 단체 지정에 따라 연말정산 시 소득공제 혜택을 받으실 수 있습니다.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact" className="border-t border-background-200 pt-16 md:pt-20">
          <div className="mb-2">
            <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">Contact</span>
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-primary-600 mb-8">문의</h2>

          {formSubmitted ? (
            <div className="bg-background-100 rounded-lg p-10 text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <i className="ri-check-line text-3xl text-accent-500"></i>
              </div>
              <h3 className="text-base font-semibold text-foreground-700 mb-2">문의가 정상적으로 접수되었습니다.</h3>
              <p className="text-sm text-foreground-400">확인 후 빠른 시일 내에 연락드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} data-readdy-form="" className="space-y-5">
              {formError && (
                <div className="bg-red-50 border border-red-200 rounded-md px-4 py-3 text-sm text-red-600">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-foreground-500 mb-1.5">이름</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 py-2.5 text-sm border border-background-300 rounded-md bg-background-50 text-foreground-700 focus:outline-none focus:border-primary-400 transition-colors"
                    placeholder="이름을 입력해 주세요"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground-500 mb-1.5">소속</label>
                  <input
                    type="text"
                    name="affiliation"
                    className="w-full px-3 py-2.5 text-sm border border-background-300 rounded-md bg-background-50 text-foreground-700 focus:outline-none focus:border-primary-400 transition-colors"
                    placeholder="소속을 입력해 주세요"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-foreground-500 mb-1.5">이메일</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2.5 text-sm border border-background-300 rounded-md bg-background-50 text-foreground-700 focus:outline-none focus:border-primary-400 transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground-500 mb-1.5">전화번호</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-3 py-2.5 text-sm border border-background-300 rounded-md bg-background-50 text-foreground-700 focus:outline-none focus:border-primary-400 transition-colors"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground-500 mb-1.5">문의 유형</label>
                <select
                  name="inquiry_type"
                  required
                  className="w-full px-3 py-2.5 text-sm border border-background-300 rounded-md bg-background-50 text-foreground-700 focus:outline-none focus:border-primary-400 transition-colors cursor-pointer"
                >
                  <option value="">문의 유형을 선택해 주세요</option>
                  <option value="연구회원 지원">연구회원 지원</option>
                  <option value="연구·학술 문의">연구·학술 문의</option>
                  <option value="후원 문의">후원 문의</option>
                  <option value="일반 문의">일반 문의</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground-500 mb-1.5">문의 내용</label>
                <textarea
                  name="message"
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full px-3 py-2.5 text-sm border border-background-300 rounded-md bg-background-50 text-foreground-700 focus:outline-none focus:border-primary-400 transition-colors resize-none"
                  placeholder="문의하실 내용을 입력해 주세요 (최대 500자)"
                ></textarea>
              </div>

              <input
                type="text"
                name="phone_alt"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly
                className="spam-guard"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-background-50 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 hover:bg-primary-600 cursor-pointer"
              >
                문의하기
                <i className="ri-send-plane-line text-base"></i>
              </button>

              <p className="text-xs text-foreground-300 mt-3">
                TEL. 02-586-7562
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}