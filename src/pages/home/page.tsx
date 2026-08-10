import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from '@/pages/home/components/HeroSection';
import GreetingSection from '@/pages/home/components/GreetingSection';
import StatisticsSection from '@/pages/home/components/StatisticsSection';
import ResearchOverviewSection from '@/pages/home/components/ResearchOverviewSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <GreetingSection />
        <StatisticsSection />
        <ResearchOverviewSection />
      </main>
      <Footer />
    </>
  );
}