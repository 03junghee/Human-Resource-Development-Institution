import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: '협회소개',
    links: [
      { label: '인사말', href: '/about#greeting' },
      { label: '사명과 비전', href: '/about#mission' },
      { label: '연혁', href: '/about#history' },
      { label: '조직 및 임원', href: '/about#organization' },
      { label: '정관', href: '/about#articles' },
    ],
  },
  {
    title: '연구·개발',
    links: [
      { label: 'Resilient Autonomy', href: '/research#resilient' },
      { label: 'Career Autonomy', href: '/research#career' },
      { label: 'Relational Autonomy', href: '/research#relational' },
      { label: 'Existential Autonomy', href: '/research#existential' },
    ],
  },
  {
    title: '자료·소식',
    links: [
      { label: '영상', href: '/resources#videos' },
      { label: '공지사항', href: '/resources#notices' },
      { label: '논문·보고서', href: '/resources#publications' },
    ],
  },
  {
    title: '참여',
    links: [
      { label: '연구회원 / 파트너', href: '/participate#membership' },
      { label: '후원', href: '/participate#sponsorship' },
      { label: '문의', href: '/participate#contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-600 text-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-14 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4 text-background-50/90 tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-background-50/60 hover:text-background-50/90 transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 md:mt-12 bg-background-50 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <i className="ri-customer-service-2-line text-xl text-primary-500"></i>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground-800">협회에 문의하세요</h4>
                <p className="text-sm text-foreground-500 mt-1">연구 협력, 후원, 기타 문의를 환영합니다.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2 text-sm text-foreground-600">
                <i className="ri-phone-line text-primary-500"></i>
                <span>02-586-7562</span>
              </div>
              <Link
                to="/participate#contact"
                className="px-5 py-2.5 bg-primary-500 text-background-50 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-14 pt-8 border-t border-background-50/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://static.readdy.ai/image/4a4754448bbef0f28ab8f59675ee44e6/08a0cba6aada460f7cd3663299bc156a.png"
                alt="인적자원개발연구협회 로고"
                className="w-14 h-14 object-contain"
              />
              <div>
                <p className="text-base font-semibold tracking-tight">
                  인적자원개발연구협회
                </p>
                <p className="text-xs text-background-50/50 tracking-wider mt-0.5">
                  Human Resource Development Institute
                </p>
              </div>
            </div>

            <div className="text-sm text-background-50/50">
              <p>TEL. 02-586-7562</p>
            </div>
          </div>

          <div className="mt-6 text-xs text-background-50/40">
            <p>
              Copyright &copy; {new Date().getFullYear()} 인적자원개발연구협회. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}