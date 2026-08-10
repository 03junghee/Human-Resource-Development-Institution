import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-50"
    >
      {/* 기하학적 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Abstract%20minimalist%20geometric%20network%20pattern%20with%20soft%20organic%20lines%20and%20nodes%20in%20muted%20teal%20and%20mint%20tones%20on%20warm%20off-white%20cream%20background%2C%20clean%20academic%20research%20institute%20aesthetic%2C%20subtle%20dot%20grid%20texture%2C%20professional%20institutional%20style%2C%20soft%20natural%20lighting%2C%20no%20text%2C%20elegant%20and%20restrained&width=1920&height=1080&seq=hero-geom-02&orientation=landscape"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-50/80 via-background-50/60 to-background-50/90"></div>
      </div>

      {/* 연구 Grid 오버레이 */}
      <div className="absolute inset-0 z-[1]">
        <svg
          className="w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="research-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-primary-600" />
            </pattern>
            <pattern id="research-dots" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="1" fill="currentColor" className="text-accent-500" opacity="0.3" />
              <circle cx="30" cy="90" r="0.8" fill="currentColor" className="text-secondary-500" opacity="0.25" />
              <circle cx="90" cy="30" r="0.8" fill="currentColor" className="text-secondary-500" opacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#research-grid)" />
          <rect width="100%" height="100%" fill="url(#research-dots)" />
        </svg>
      </div>

      {/* 기하학적 Node Diagram - 중앙 (데스크톱만 표시) */}
      <div className="hidden md:flex absolute inset-0 z-[1] items-center justify-center opacity-[0.09]">
        <svg
          className="w-full max-w-[1000px] h-auto"
          viewBox="0 0 1000 260"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            className={`transition-all duration-[2000ms] ease-out ${
              loaded ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* 중앙 메인 노드 */}
            <circle cx="500" cy="80" r="6" className="fill-primary-600" />
            <text x="500" y="65" textAnchor="middle" className="fill-primary-700 text-[11px] font-bold font-mono">Human Agency</text>

            {/* 연결선들 */}
            <line x1="500" y1="88" x2="500" y2="120" stroke="currentColor" className="text-primary-400" strokeWidth="0.8" strokeDasharray="4,3" />

            {/* 4대 주도성 노드 */}
            <line x1="500" y1="120" x2="150" y2="120" stroke="currentColor" className="text-primary-300" strokeWidth="0.6" />
            <line x1="500" y1="120" x2="350" y2="120" stroke="currentColor" className="text-accent-300" strokeWidth="0.6" />
            <line x1="500" y1="120" x2="650" y2="120" stroke="currentColor" className="text-secondary-300" strokeWidth="0.6" />
            <line x1="500" y1="120" x2="850" y2="120" stroke="currentColor" className="text-primary-300" strokeWidth="0.6" />

            <circle cx="150" cy="120" r="4" className="fill-accent-500" />
            <text x="150" y="140" textAnchor="middle" className="fill-accent-600 text-[10px] font-mono">Resilient</text>

            <circle cx="350" cy="120" r="4" className="fill-primary-500" />
            <text x="350" y="140" textAnchor="middle" className="fill-primary-600 text-[10px] font-mono">Career</text>

            <circle cx="650" cy="120" r="4" className="fill-secondary-500" />
            <text x="650" y="140" textAnchor="middle" className="fill-secondary-600 text-[10px] font-mono">Relational</text>

            <circle cx="850" cy="120" r="4" className="fill-accent-500" />
            <text x="850" y="140" textAnchor="middle" className="fill-accent-600 text-[10px] font-mono">Existential</text>

            {/* 하위 지표 연결 */}
            <line x1="150" y1="128" x2="150" y2="170" stroke="currentColor" className="text-accent-300" strokeWidth="0.5" strokeDasharray="3,3" />
            <circle cx="150" cy="176" r="2" className="fill-accent-400" />
            <text x="150" y="192" textAnchor="middle" className="fill-accent-500 text-[8px] font-mono">Self-awareness</text>

            <line x1="350" y1="128" x2="350" y2="170" stroke="currentColor" className="text-primary-300" strokeWidth="0.5" strokeDasharray="3,3" />
            <circle cx="350" cy="176" r="2" className="fill-primary-400" />
            <text x="350" y="192" textAnchor="middle" className="fill-primary-500 text-[8px] font-mono">Metacognition</text>

            <line x1="650" y1="128" x2="650" y2="170" stroke="currentColor" className="text-secondary-300" strokeWidth="0.5" strokeDasharray="3,3" />
            <circle cx="650" cy="176" r="2" className="fill-secondary-400" />
            <text x="650" y="192" textAnchor="middle" className="fill-secondary-500 text-[8px] font-mono">Communication</text>

            <line x1="850" y1="128" x2="850" y2="170" stroke="currentColor" className="text-accent-300" strokeWidth="0.5" strokeDasharray="3,3" />
            <circle cx="850" cy="176" r="2" className="fill-accent-400" />
            <text x="850" y="192" textAnchor="middle" className="fill-accent-500 text-[8px] font-mono">Meaning-making</text>
          </g>
        </svg>
      </div>

      {/* 로고 워터마크 중앙 배경 */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center opacity-[0.03] pointer-events-none">
        <img
          src="https://static.readdy.ai/image/4a4754448bbef0f28ab8f59675ee44e6/08a0cba6aada460f7cd3663299bc156a.png"
          alt=""
          className="w-[680px] h-auto object-contain"
        />
      </div>

      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 md:px-10 text-center">
        <div
          className={`transition-all duration-[1200ms] ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center justify-center mb-2">
            <div className="w-32 h-32 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <img
                src="https://static.readdy.ai/image/4a4754448bbef0f28ab8f59675ee44e6/08a0cba6aada460f7cd3663299bc156a.png"
                alt="인적자원개발연구협회"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-sm md:text-base text-foreground-500 font-medium tracking-wider mb-2 md:mb-3">
            Human Resource Development Institute
          </p>
        </div>

        <h1
          className={`text-xl md:text-4xl lg:text-5xl font-bold leading-[1.3] md:leading-[1.2] text-primary-600 mb-3 md:mb-4 tracking-tight transition-all duration-[1400ms] ease-out delay-100 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          AI가 답을 주는 시대,
          <br />
          질문하는 인간의 주도성을 연구합니다.
        </h1>

        <p
          className={`text-sm md:text-base text-foreground-500 leading-relaxed max-w-[680px] mx-auto mb-6 md:mb-8 transition-all duration-[1600ms] ease-out delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          인적자원개발연구협회는 AI 시대의 인지적 주체성과 Human Agency를 연구하고,
          <br className="hidden md:block" />
          회복·진로·관계·실존의 4대 주도성 연구를 통해 미래 인재의 새로운 기준을 제시합니다.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-2.5 md:gap-4 transition-all duration-[1800ms] ease-out delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            to="/research"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-background-50 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 hover:bg-primary-600 cursor-pointer"
          >
            연구 분야 보기
            <i className="ri-arrow-right-line text-base"></i>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary-300 text-primary-600 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 hover:bg-primary-50 cursor-pointer"
          >
            협회 소개
            <i className="ri-arrow-right-line text-base"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}