import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from '@/pages/home/components/HeroSection';
import StatisticsSection from '@/pages/home/components/StatisticsSection';
import ResearchOverviewSection from '@/pages/home/components/ResearchOverviewSection';
import SponsorshipContactSection from '@/pages/home/components/SponsorshipContactSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatisticsSection />
        <ResearchOverviewSection />
        <SponsorshipContactSection />
      </main>
      <Footer />
    </>
  );
}