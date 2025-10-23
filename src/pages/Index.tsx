import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import PurchaseNotifications from "@/components/PurchaseNotifications";
import MarqueeText from "@/components/MarqueeText";
import ListingSection from "@/components/ListingSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("hasVisited", "true");
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };

  const handlePresaleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      const buyButton = document.querySelector('[data-presale-trigger]') as HTMLButtonElement;
      buyButton?.click();
    }, 500);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen ${showContent ? 'animate-fade-in' : 'opacity-0'}`}>
      <PurchaseNotifications />
      <Header onPresaleClick={handlePresaleClick} />
      <Hero />
      <MarqueeText />
      <ListingSection />
      <About />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Index;
