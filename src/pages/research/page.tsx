import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ResearchResilientSection from '@/pages/home/components/ResearchResilientSection';
import ResearchCareerSection from '@/pages/home/components/ResearchCareerSection';
import ResearchRelationalSection from '@/pages/home/components/ResearchRelationalSection';
import ResearchExistentialSection from '@/pages/home/components/ResearchExistentialSection';

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-28 md:pt-32 pb-10 md:pb-14 px-6 md:px-10 bg-background-50 border-b border-background-200/50">
          <div className="max-w-[900px] mx-auto">
            <nav className="text-xs text-foreground-400 mb-4">
              <span className="text-foreground-500">홈</span>
              <i className="ri-arrow-right-s-line mx-2"></i>
              <span className="text-primary-500 font-medium">연구·개발</span>
            </nav>
            <h1 className="text-xl md:text-3xl font-bold text-primary-600">연구·개발</h1>
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