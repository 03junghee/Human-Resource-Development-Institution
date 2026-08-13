import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ApplyModal from '@/pages/home/components/ResearchJoinModal';
import LoginModal from '@/pages/home/components/LoginModal';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: '협회소개',
    href: '/about',
    children: [
      { label: '인사말', href: '/about#greeting' },
      { label: '사명과 비전', href: '/about#mission' },
      { label: '연혁', href: '/about#history' },
      { label: '조직 및 임원', href: '/about#organization' },
      { label: '정관', href: '/about#articles' },
    ],
  },
  {
    label: '연구·개발',
    href: '/research',
    children: [
      { label: 'Resilient Autonomy', href: '/research#resilient' },
      { label: 'Career Autonomy', href: '/research#career' },
      { label: 'Relational Autonomy', href: '/research#relational' },
      { label: 'Existential Autonomy', href: '/research#existential' },
    ],
  },
  {
    label: '자료·소식',
    href: '/resources',
    children: [
      { label: '영상', href: '/resources#videos' },
      { label: '공지사항', href: '/resources#notices' },
      { label: '논문·보고서', href: '/resources#publications' },
    ],
  },
  {
    label: '참여',
    href: '/participate',
    children: [
      { label: '연구회원 / 파트너', href: '/participate#membership' },
      { label: '후원', href: '/participate#sponsorship' },
      { label: '문의', href: '/participate#contact' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  // 모달 제어 상태 추가
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setExpandedMobile(null);
  }, [location]);

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, []);

  const isActive = (href: string) => {
    if (href === '#') return false;
    return location.pathname.startsWith(href.split('#')[0]);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background-50/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 md:px-10">
          <div
            className={`flex items-center justify-between mx-auto transition-all duration-300 ${
              scrolled ? 'h-[56px] md:h-[68px]' : 'h-[64px] md:h-[84px]'
            }`}
            style={{ maxWidth: '1400px' }}
          >
            {/* 로고 영역 */}
            <Link
              to="/"
              className="flex items-center gap-3 whitespace-nowrap cursor-pointer"
              onClick={closeAll}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0">
                <img
                  src="https://static.readdy.ai/image/4a4754448bbef0f28ab8f59675ee44e6/08a0cba6aada460f7cd3663299bc156a.png"
                  alt="인적자원개발연구협회 로고"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-bold tracking-tight transition-all duration-300 text-primary-500 ${
                    scrolled ? 'text-sm md:text-base' : 'text-sm md:text-lg'
                  }`}
                >
                  인적자원개발연구협회
                </span>
                <span
                  className={`hidden sm:block tracking-widest uppercase transition-all duration-300 text-foreground-400 ${
                    scrolled ? 'text-[10px] md:text-[11px]' : 'text-[10px] md:text-xs'
                  }`}
                >
                  Human Resource Development Institute
                </span>
              </div>
            </Link>

            {/* 데스크톱 메뉴 & 버튼 */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-1">
                {navItems.map((item, idx) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(idx)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium whitespace-nowrap rounded-md transition-colors duration-200 cursor-pointer inline-flex items-center ${
                        activeDropdown === idx || isActive(item.href)
                          ? 'text-primary-500'
                          : scrolled
                          ? 'text-foreground-700 hover:text-primary-500'
                          : 'text-foreground-700 hover:text-primary-500'
                      }`}
                    >
                      {item.label}
                      <i className="ri-arrow-down-s-line ml-1 text-xs align-middle"></i>
                    </Link>

                    {activeDropdown === idx && item.children && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                        <div className="bg-background-50 rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-background-200/70 py-2 min-w-[200px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className={`block px-5 py-2.5 text-sm whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                                isActive(child.href)
                                  ? 'text-primary-500'
                                  : 'text-foreground-600 hover:text-primary-500 hover:bg-background-100'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* 추가된 우측 버튼 영역 (로그인 / 연구회원 신청) */}
              <div className="flex items-center gap-2 pl-4 border-l border-background-200">
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="px-3.5 py-1.5 text-xs font-medium text-foreground-600 hover:text-primary-500 transition-colors cursor-pointer"
                >
                  로그인
                </button>
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="px-4 py-1.5 text-xs font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full transition-colors cursor-pointer shadow-sm"
                >
                  연구회원 신청
                </button>
              </div>
            </div>

            {/* 모바일 햄버거 버튼 */}
            <button
              className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-md transition-colors cursor-pointer ${
                mobileOpen ? 'bg-background-100 text-primary-500' : 'text-foreground-700'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="메뉴 열기"
            >
              <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        {mobileOpen && (
          <div className="lg:hidden bg-background-50 border-t border-background-200/70 shadow-lg max-h-[calc(100vh-64px)] overflow-y-auto">
            <div className="px-5 py-3">
              {navItems.map((item, idx) => (
                <div key={item.label} className="border-b border-background-200/50 last:border-b-0">
                  <div className="flex items-center">
                    <Link
                      to={item.href}
                      className="flex-1 py-3.5 text-sm font-medium text-foreground-700 cursor-pointer"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        className="px-3 py-3.5 cursor-pointer"
                        onClick={() => setExpandedMobile(expandedMobile === idx ? null : idx)}
                      >
                        <i
                          className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${
                            expandedMobile === idx ? 'rotate-180' : ''
                          }`}
                        ></i>
                      </button>
                    )}
                  </div>

                  {expandedMobile === idx && item.children && (
                    <div className="pb-3 pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={`block py-2.5 text-sm cursor-pointer ${
                            isActive(child.href)
                              ? 'text-primary-500 font-medium'
                              : 'text-foreground-500 hover:text-primary-500'
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* 모바일 화면용 버튼 영역 */}
              <div className="pt-4 pb-2 flex flex-col gap-2 border-t border-background-200 mt-2">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setIsLoginOpen(true);
                  }}
                  className="w-full py-2.5 text-xs font-medium text-foreground-700 bg-background-100 hover:bg-background-200 rounded-lg transition-colors cursor-pointer"
                >
                  로그인
                </button>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setIsApplyOpen(true);
                  }}
                  className="w-full py-2.5 text-xs font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors cursor-pointer"
                >
                  연구회원 신청
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 모달 연동 */}
      <ApplyModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}