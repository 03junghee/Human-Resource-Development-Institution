import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { notices } from '@/mocks/notices';

export default function NoticeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const noticeId = Number(id);

  const notice = notices.find((n) => n.id === noticeId);

  if (!notice) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground-800 mb-3">공지사항을 찾을 수 없습니다</h1>
            <p className="text-sm text-foreground-500 mb-6">요청하신 공지사항이 존재하지 않거나 삭제되었습니다.</p>
            <button
              onClick={() => navigate('/resources#notices')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-background-50 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line"></i>
              공지사항 목록으로
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const related = notices.filter(
    (n) => notice.relatedNotices?.includes(n.id) && n.id !== notice.id
  );

  const categoryColors: Record<string, string> = {
    '학술 포럼': 'bg-accent-100 text-accent-700',
    '국책 과제': 'bg-secondary-100 text-secondary-700',
    '안내': 'bg-background-200 text-foreground-600',
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-28 md:pt-32 pb-10 md:pb-14 px-6 md:px-10 bg-background-50 border-b border-background-200/50">
          <div className="max-w-[900px] mx-auto">
            <div className="w-12 h-1 bg-primary-400 rounded-full mb-6"></div>
            <nav className="text-xs text-foreground-400 mb-4">
              <Link to="/" className="text-foreground-500 hover:text-primary-500 transition-colors cursor-pointer">홈</Link>
              <i className="ri-arrow-right-s-line mx-2"></i>
              <Link to="/resources#notices" className="text-foreground-500 hover:text-primary-500 transition-colors cursor-pointer">자료·소식</Link>
              <i className="ri-arrow-right-s-line mx-2"></i>
              <span className="text-primary-500 font-medium">공지사항</span>
            </nav>
            <h1 className="text-xl md:text-3xl font-bold text-primary-600">공지사항</h1>
          </div>
        </section>

        {/* Detail Content */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-background-50">
          <div className="max-w-[800px] mx-auto">
            {/* Category + Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${categoryColors[notice.category] || 'bg-background-200 text-foreground-600'}`}>
                {notice.category}
              </span>
              <span className="text-xs text-foreground-400 font-mono">{notice.date}</span>
              <span className="text-xs text-foreground-400">조회 {notice.views || 0}</span>
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground-900 leading-snug mb-6">
              {notice.title}
            </h2>

            {/* Summary box */}
            <div className="bg-primary-50 border border-primary-100 rounded-lg p-5 md:p-6 mb-10">
              <p className="text-sm text-primary-700 leading-relaxed">{notice.detail}</p>
            </div>

            {/* Full Content */}
            {notice.content && (
              <div className="prose prose-sm md:prose-base max-w-none">
                {notice.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('[') && paragraph.endsWith(']')) {
                    return (
                      <h3 key={idx} className="text-sm md:text-base font-bold text-foreground-800 mt-8 mb-3">
                        {paragraph.replace('[', '').replace(']', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <ul key={idx} className="space-y-2 mb-4">
                        {paragraph.split('\n').map((line, li) => (
                          <li key={li} className="flex items-start gap-2 text-sm text-foreground-600 leading-relaxed">
                            <span className="text-primary-400 mt-1.5 flex-shrink-0">•</span>
                            <span>{line.replace('- ', '')}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (/^\d+\./.test(paragraph)) {
                    return (
                      <ol key={idx} className="space-y-2 mb-4 ml-1">
                        {paragraph.split('\n').map((line, li) => {
                          const match = line.match(/^(\d+)\.\s*(.*)/);
                          return match ? (
                            <li key={li} className="flex items-start gap-2 text-sm text-foreground-600 leading-relaxed">
                              <span className="text-primary-500 font-bold flex-shrink-0 min-w-[20px]">{match[1]}.</span>
                              <span>{match[2]}</span>
                            </li>
                          ) : null;
                        })}
                      </ol>
                    );
                  }
                  return (
                    <p key={idx} className="text-sm md:text-base text-foreground-600 leading-[1.85] mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            )}

            {/* Author */}
            <div className="mt-10 pt-6 border-t border-background-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center">
                  <i className="ri-user-line text-sm text-primary-500"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground-700">{notice.author || '인적자원개발연구협회'}</p>
                  <p className="text-xs text-foreground-400">{notice.date} 게시</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                onClick={() => navigate('/resources#notices')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-background-300 text-foreground-600 rounded-md text-sm hover:border-primary-300 hover:text-primary-500 transition-colors cursor-pointer"
              >
                <i className="ri-arrow-left-line"></i>
                목록으로
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const prev = notices.find((n) => n.id === noticeId - 1);
                    if (prev) navigate(`/resources/notices/${prev.id}`);
                  }}
                  disabled={!notices.find((n) => n.id === noticeId - 1)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-background-300 text-foreground-600 rounded-md text-sm hover:border-primary-300 hover:text-primary-500 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <i className="ri-arrow-left-s-line"></i>
                  이전
                </button>
                <button
                  onClick={() => {
                    const next = notices.find((n) => n.id === noticeId + 1);
                    if (next) navigate(`/resources/notices/${next.id}`);
                  }}
                  disabled={!notices.find((n) => n.id === noticeId + 1)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-background-300 text-foreground-600 rounded-md text-sm hover:border-primary-300 hover:text-primary-500 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  다음
                  <i className="ri-arrow-right-s-line"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Notices */}
        {related.length > 0 && (
          <section className="py-16 md:py-20 px-6 md:px-10 bg-background-100">
            <div className="max-w-[800px] mx-auto">
              <h3 className="text-sm font-semibold text-foreground-700 mb-6">관련 공지사항</h3>
              <div className="space-y-3">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    to={`/resources/notices/${r.id}`}
                    className="group flex items-start gap-4 px-5 py-4 bg-background-50 border border-background-200/50 rounded-lg hover:border-primary-200 transition-all cursor-pointer"
                  >
                    <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap mt-0.5 ${categoryColors[r.category] || 'bg-background-200 text-foreground-600'}`}>
                      {r.category}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground-700 group-hover:text-primary-500 transition-colors leading-snug">
                        {r.title}
                      </h4>
                      <p className="text-xs text-foreground-400 mt-1">{r.date}</p>
                    </div>
                    <i className="ri-arrow-right-s-line text-foreground-400 group-hover:text-primary-500 transition-colors mt-1"></i>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}