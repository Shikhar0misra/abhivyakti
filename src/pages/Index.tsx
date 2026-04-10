import { useState, useCallback } from "react";
import OpeningAnimation from "@/components/OpeningAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IlhaamSection from "@/components/IlhaamSection";
import EventGallery from "@/components/EventGallery";
import AboutSection from "@/components/AboutSection";
import PastProductions from "@/components/PastProductions";
import Footer from "@/components/Footer";
import CinematicBackground from "@/components/CinematicBackground";

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
      <HeroSection />
      <IlhaamSection />
      <EventGallery />
      <AboutSection />
      <PastProductions />
      <Footer />
    </div>
  );
};

export default Index;
