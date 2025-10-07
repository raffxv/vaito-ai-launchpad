import { useEffect, useState } from "react";
import vaitoLogo from "@/assets/vaito-logo.jpg";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const steps = 60;
    const increment = 100 / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="neon-border rounded-2xl p-2 animate-scale-in">
          <div className="w-24 h-24 rounded-xl overflow-hidden">
            <img src={vaitoLogo} alt="VAITO.AI Logo" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-orbitron font-black text-6xl md:text-7xl text-glow tracking-wider animate-fade-in">
            VAITO.AI
          </h1>
          
          {/* Loading bar */}
          <div className="w-64 h-1 bg-background/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Loading text */}
          <p className="text-muted-foreground text-sm font-medium animate-pulse">
            Loading... {Math.round(progress)}%
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-primary/30" />
    </div>
  );
};

export default LoadingScreen;
