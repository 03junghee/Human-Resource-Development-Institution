'use client'; // Client Component 선언 (Next.js App Router 사용 시)

import { useEffect } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from '@/pages/home/components/HeroSection';
import GreetingSection from '@/pages/home/components/GreetingSection';
import StatisticsSection from '@/pages/home/components/StatisticsSection';
import ResearchOverviewSection from '@/pages/home/components/ResearchOverviewSection';
import WhyNow from '@/pages/home/components/WhyNow';

export default function Home() {
  // 메인 페이지 진입 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyNow />
        <StatisticsSection />
        <ResearchOverviewSection />
      </main>
      <Footer />
    </>
  );
}