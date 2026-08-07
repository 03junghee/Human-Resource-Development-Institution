import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    label: '사업·협력',
    href: '/business',
    children: [
      { label: 'HR 진단 연구개발', href: '/business#hr-diagnostics' },
      { label: 'B2B 교육', href: '/business#b2b-education' },
      { label: '기업·기관 협력', href: '/business#partnership' },
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
            scrolled ? 'h-[68px]' : 'h-[84px]'
          }`}
          style={{ maxWidth: '1400px' }}
        >
          <Link
            to="/"
            className="flex items-center gap-3 whitespace-nowrap cursor-pointer"
            onClick={closeAll}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
              <img
                src="https://static.readdy.ai/image/4a4754448bbef0f28ab8f59675ee44e6/295c075333358f20d31659b93d9e5670.png"
                alt="인적자원개발연구협회 로고"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-tight transition-all duration-300 text-primary-500 ${scrolled ? 'text-base' : 'text-lg'}`}>
                인적자원개발연구협회
              </span>
              <span className={`tracking-widest uppercase transition-all duration-300 text-foreground-400 ${scrolled ? 'text-[11px]' : 'text-xs'}`}>
                Human Resource Development Institute
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
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
                      ? 'text-primary-500 bg-background-100'
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
                              ? 'text-primary-500 bg-primary-50'
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

      {mobileOpen && (
        <div className="lg:hidden bg-background-50 border-t border-background-200/70 shadow-lg max-h-[calc(100vh-60px)] overflow-y-auto">
          <div className="px-5 py-3">
            {navItems.map((item, idx) => (
              <div key={item.label} className="border-b border-background-200/50 last:border-b-0">
                <button
                  className="flex items-center justify-between w-full py-3.5 text-sm font-medium text-foreground-700 cursor-pointer"
                  onClick={() => setExpandedMobile(expandedMobile === idx ? null : idx)}
                >
                  {item.label}
                  <i
                    className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${
                      expandedMobile === idx ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>

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
          </div>
        </div>
      )}
    </nav>
  );
}