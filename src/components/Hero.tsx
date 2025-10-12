import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-vaito.jpg";
import vaitoLogo from "@/assets/vaito-logo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const [showPresale, setShowPresale] = useState(false);
  const [copied, setCopied] = useState(false);
  const [solAmount, setSolAmount] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();
  const presaleAddress = "96Qj354e1ZnXe37gvx5zvK5Rb7MRtKcyJvNqfXUwyjt3";
  const exchangeRate = 12682023; // 1 SOL = 12,682,023 VAITO

  const openPresale = () => setShowPresale(true);

  const calculateVaito = () => {
    const sol = parseFloat(solAmount);
    if (isNaN(sol) || sol <= 0) return "0";
    return (sol * exchangeRate).toLocaleString('en-US', { maximumFractionDigits: 0 });
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(presaleAddress);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Presale address copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-200" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse delay-300" />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center z-10 relative">
        {/* Left content */}
        <div className="space-y-6">
          {/* Tech border decoration */}
          <div className="neon-border inline-block p-1 rounded-lg mb-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img src={vaitoLogo} alt="VAITO.AI Logo" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="font-orbitron font-black text-4xl sm:text-5xl md:text-7xl text-glow tracking-wider">
            VAITO.AI
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            {t("hero.subtitle")}
            <br />
            <span className="text-foreground">{t("hero.community")}</span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={() => setShowPresale(true)}
              data-presale-trigger
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg neon-border transition-all hover:shadow-[0_0_30px_hsl(var(--neon-glow)/0.7)] w-full sm:w-auto"
            >
              {t("hero.buyNow")}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg backdrop-blur-sm w-full sm:w-auto"
            >
              {t("hero.learnMore")}
            </Button>
          </div>

          {/* Tech decorative lines */}
          <div className="flex gap-4 items-center pt-8">
            <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
            <div className="flex gap-2">
              <div className="w-2 h-2 border border-primary rounded-full" />
              <div className="w-2 h-2 border border-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 border border-primary rounded-full" />
            </div>
          </div>
        </div>

        {/* Right content - Hero Image */}
        <div className="relative">
          <div className="neon-border rounded-2xl p-2 backdrop-blur-sm">
            <img 
              src={heroImage} 
              alt="VAITO.AI Crypto Space" 
              className="rounded-xl w-full h-auto"
            />
          </div>
          
          {/* Floating tech elements */}
          <div className="absolute -top-4 -right-4 w-32 h-32 border border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-secondary/30 rounded-full animate-spin" style={{ animationDuration: '15s' }} />
        </div>
      </div>

      {/* Presale Dialog */}
      <Dialog open={showPresale} onOpenChange={setShowPresale}>
        <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-xl border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-orbitron text-glow">{t("presale.title")}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t("presale.description")}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Presale Address */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">{t("presale.address")}</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={presaleAddress}
                  readOnly
                  className="flex-1 px-3 py-2 bg-background/50 border border-primary/30 rounded-md text-sm font-mono text-foreground"
                />
                <Button
                  size="icon"
                  variant="outline"
                  onClick={copyAddress}
                  className="border-primary/30 hover:bg-primary/10"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Calculator */}
            <div className="space-y-3 p-4 rounded-lg bg-primary/10 border border-primary/30">
              <label className="text-sm font-semibold text-foreground">{t("presale.calculator")}</label>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">{t("presale.enterAmount")}</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={solAmount}
                    onChange={(e) => setSolAmount(e.target.value)}
                    min="0"
                    step="0.01"
                    className="w-full px-3 py-2 bg-background/50 border border-primary/30 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <span className="text-xl">↓</span>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">{t("presale.willReceive")}</label>
                  <div className="w-full px-3 py-2 bg-background/80 border border-primary/50 rounded-md text-foreground font-bold text-lg">
                    {calculateVaito()} VAITO
                  </div>
                </div>
              </div>
            </div>

            {/* Exchange Rate & Min Buy */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-background/50 border border-primary/20">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">{t("presale.exchangeRate")}</p>
                  <p className="text-sm font-semibold text-foreground">1 SOL = 12,682,023 VAITO</p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-background/50 border border-primary/20">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">{t("presale.minBuy")}</p>
                  <p className="text-sm font-semibold text-foreground">0.2 SOL</p>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
              <p className="text-xs text-yellow-200">
                {t("presale.warning")}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
