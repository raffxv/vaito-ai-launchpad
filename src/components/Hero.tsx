import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-astronaut.jpg";
import vaitoLogo from "@/assets/vaito-logo.jpg";

const Hero = () => {
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

          <h1 className="font-orbitron font-black text-5xl md:text-7xl text-glow tracking-wider">
            VAITO.AI
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            JOIN OUR
            <br />
            <span className="text-foreground">COMMUNITY</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Be part of the crypto movement, stay informed and connected with everything.
          </p>

          <div className="flex gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg neon-border transition-all hover:shadow-[0_0_30px_hsl(var(--neon-glow)/0.7)]"
            >
              JOIN NOW
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg backdrop-blur-sm"
            >
              LEARN MORE
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
    </section>
  );
};

export default Hero;
