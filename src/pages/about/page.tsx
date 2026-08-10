import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import useHashScroll from '@/hooks/useHashScroll';
import GreetingSection from '@/pages/home/components/GreetingSection';
import MissionVisionSection from '@/pages/home/components/MissionVisionSection';
import HistorySection from '@/pages/home/components/HistorySection';
import OrganizationSection from '@/pages/home/components/OrganizationSection';
import ArticlesSection from '@/pages/home/components/ArticlesSection';
import RelatedArticlesSection from '@/pages/home/components/RelatedArticlesSection';

export default function AboutPage() {
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
              <span className="text-primary-500 font-medium">협회소개</span>
            </nav>
            <h1 className="text-lg md:text-3xl font-bold text-primary-600">협회소개</h1>
            <p className="text-sm text-foreground-500 mt-2">인적자원개발연구협회의 설립 철학과 조직, 연혁, 정관을 소개합니다.</p>
          </div>
        </section>
        <div id="greeting">
          <GreetingSection />
        </div>
        <div id="related-research">
          <RelatedArticlesSection />
        </div>
        <div id="mission">
          <MissionVisionSection />
        </div>
        <div id="history">
          <HistorySection />
        </div>
        <div id="organization">
          <OrganizationSection />
        </div>
        <div id="articles">
          <ArticlesSection />
        </div>
      </main>
      <Footer />
    </>
  );
}