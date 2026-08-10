import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import useHashScroll from '@/hooks/useHashScroll';
import SponsorshipContactSection from '@/pages/home/components/SponsorshipContactSection';

export default function ParticipatePage() {
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
              <span className="text-accent-600 font-medium">참여</span>
            </nav>
            <h1 className="text-lg md:text-3xl font-bold text-accent-600">참여</h1>
            <p className="text-sm text-foreground-500 mt-2">연구회원 가입, 후원, 문의를 통해 협회와 함께하세요.</p>
          </div>
        </section>

        {/* Membership Section */}
        <section id="membership" className="py-20 md:py-28 px-6 md:px-10 bg-background-50">
          <div className="max-w-[900px] mx-auto">
            <span className="text-xs font-medium text-accent-600 uppercase tracking-widest">Membership</span>
            <h2 className="text-xl md:text-3xl font-bold text-primary-600 mt-2 mb-4">연구회원 · 파트너</h2>
            <p className="text-sm text-foreground-500 leading-relaxed max-w-[600px]">
              인적자원개발, 교육학, 인지과학, HR 분야의 전문 연구자 및 실무자, 기업·기관과의 협력을 기다리고 있습니다.
              연구회원으로 가입하시면 학술 포럼 우선 초청, 연구보고서 열람, 정책 세미나 참여 등 다양한 혜택을 누리실 수 있습니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-background-100 rounded-lg p-6">
                <h3 className="text-sm font-semibold text-foreground-800 mb-2">정회원</h3>
                <p className="text-xs text-foreground-500 leading-relaxed">
                  인적자원개발, 교육학, 인지과학, HR 분야의 전문 연구자 및 실무자
                </p>
              </div>
              <div className="flex-1 bg-background-100 rounded-lg p-6">
                <h3 className="text-sm font-semibold text-foreground-800 mb-2">특별회원</h3>
                <p className="text-xs text-foreground-500 leading-relaxed">
                  협회의 목적에 찬동하여 사업을 지원하는 기업, 기관 및 단체
                </p>
              </div>
              <div className="flex-1 bg-background-100 rounded-lg p-6">
                <h3 className="text-sm font-semibold text-foreground-800 mb-2">자문위원</h3>
                <p className="text-xs text-foreground-500 leading-relaxed">
                  학계, 산업계, 글로벌 정책 기구의 전문가로서 이사회의 위촉을 받은 자
                </p>
              </div>
            </div>
            <div className="mt-8">
              <button className="px-6 py-3 bg-primary-500 text-background-50 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap">
                연구회원 신청하기
              </button>
            </div>
          </div>
        </section>

        <div id="sponsorship">
          <SponsorshipContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}