import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import useHashScroll from '@/hooks/useHashScroll';
import VideosSection from '@/pages/home/components/VideosSection';
import NoticesSection from '@/pages/home/components/NoticesSection';
import PublicationsSection from '@/pages/home/components/PublicationsSection';

export default function ResourcesPage() {
  useHashScroll();

  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-24 md:pt-32 pb-8 md:pb-14 px-6 md:px-10 bg-background-50 border-b border-background-200/50">
          <div className="max-w-[900px] mx-auto">
            <div className="w-10 md:w-12 h-1 bg-primary-400 rounded-full mb-4 md:mb-6"></div>
            <nav className="text-xs text-foreground-400 mb-4">
              <span className="text-foreground-500">홈</span>
              <i className="ri-arrow-right-s-line mx-2"></i>
              <span className="text-primary-500 font-medium">자료·소식</span>
            </nav>
            <h1 className="text-lg md:text-3xl font-bold text-primary-600">자료·소식</h1>
            <p className="text-sm text-foreground-500 mt-2">학술 영상, 공지사항, 연구 성과물을 확인하세요.</p>
          </div>
        </section>
        <div id="videos">
          <VideosSection />
        </div>
        <div id="notices">
          <NoticesSection />
        </div>
        <div id="publications">
          <PublicationsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}