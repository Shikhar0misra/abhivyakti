import { Suspense, lazy, useCallback, useState } from "react";
import OpeningAnimation from "@/components/OpeningAnimation";
import Navbar from "@/components/Navbar";
import IlhaamSection from "@/components/IlhaamSection";
import EventGallery from "@/components/EventGallery";
import AboutSection from "@/components/AboutSection";
import PastProductions from "@/components/PastProductions";
import Footer from "@/components/Footer";
import CinematicBackground from "@/components/CinematicBackground";

const HeroSection = lazy(() => import("@/components/HeroSection"));

const Index = () => {
  const [showIntro, setShowIntro] = useState(() => {
    if (sessionStorage.getItem("abhivyakti-intro-seen")) return false;
    return true;
  });

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem("abhivyakti-intro-seen", "1");
    setShowIntro(false);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <CinematicBackground />
      {showIntro && <OpeningAnimation onComplete={handleIntroComplete} />}
      <Navbar />
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<div className="h-screen bg-background" />}>
          <HeroSection />
        </Suspense>
      </div>
      <div id="home" className="relative z-10 h-screen pointer-events-none" aria-hidden="true" />
      <main className="relative z-10 bg-background">
        <IlhaamSection />
        <EventGallery />
        <AboutSection />
        <PastProductions />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
