import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: '협회소개',
    links: [
      { label: '인사말', href: '/about/greeting' },
      { label: '사명과 비전', href: '/about/mission' },
      { label: '연혁', href: '/about/history' },
      { label: '조직 및 임원', href: '/about/organization' },
      { label: '정관', href: '/about/articles' },
    ],
  },
  {
    title: '연구·개발',
    links: [
      { label: 'Resilient Autonomy', href: '/research/resilient-autonomy' },
      { label: 'Career Autonomy', href: '/research/career-autonomy' },
      { label: 'Relational Autonomy', href: '/research/relational-autonomy' },
      { label: 'Existential Autonomy', href: '/research/existential-autonomy' },
    ],
  },
  {
    title: '사업·협력',
    links: [
      { label: 'HR 진단 연구개발', href: '/business/hr-diagnostics' },
      { label: 'B2B 교육', href: '/business/b2b-education' },
      { label: '기업·기관 협력', href: '/business/partnership' },
    ],
  },
  {
    title: '자료·소식',
    links: [
      { label: '영상', href: '/resources/videos' },
      { label: '공지사항', href: '/resources/notices' },
    ],
  },
  {
    title: '참여',
    links: [
      { label: '연구회원 / 파트너', href: '/participate/membership' },
      { label: '후원', href: '/participate/sponsorship' },
      { label: '문의', href: '/participate/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-600 text-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-14 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
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

        <div className="mt-12 md:mt-14 pt-8 border-t border-background-50/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://static.readdy.ai/image/4a4754448bbef0f28ab8f59675ee44e6/295c075333358f20d31659b93d9e5670.png"
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