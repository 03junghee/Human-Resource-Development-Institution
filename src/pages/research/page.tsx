import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import useHashScroll from '@/hooks/useHashScroll';
import ResearchResilientSection from '@/pages/home/components/ResearchResilientSection';
import ResearchCareerSection from '@/pages/home/components/ResearchCareerSection';
import ResearchRelationalSection from '@/pages/home/components/ResearchRelationalSection';
import ResearchExistentialSection from '@/pages/home/components/ResearchExistentialSection';

export default function ResearchPage() {
  useHashScroll();

  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-24 md:pt-32 pb-8 md:pb-14 px-6 md:px-10 bg-background-50 border-b border-background-200/50">
          <div className="max-w-[900px] mx-auto">
            <div className="w-10 md:w-12 h-1 bg-accent-400 rounded-full mb-4 md:mb-6"></div>
            <nav className="text-xs text-foreground-400 mb-4">
              <span className="text-foreground-500">홈</span>
              <i className="ri-arrow-right-s-line mx-2"></i>
              <span className="text-accent-600 font-medium">연구·개발</span>
            </nav>
            <h1 className="text-lg md:text-3xl font-bold text-accent-600">연구·개발</h1>
            <p className="text-sm text-foreground-500 mt-2">AI 시대의 4대 주도성 연구와 학술 성과를 소개합니다.</p>
          </div>
        </section>
        <div id="resilient">
          <ResearchResilientSection />
        </div>
        <div id="career">
          <ResearchCareerSection />
        </div>
        <div id="relational">
          <ResearchRelationalSection />
        </div>
        <div id="existential">
          <ResearchExistentialSection />
        </div>
      </main>
      <Footer />
    </>
  );
}