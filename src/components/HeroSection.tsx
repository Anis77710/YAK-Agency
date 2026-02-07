import heroImage from "@/assets/hero-gaming.png";
import orbImage from "@/assets/orb-accent.png";
import { Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      {/* Floating orb */}
      <img
        src={orbImage}
        alt=""
        className="absolute top-32 right-10 w-16 h-16 animate-float opacity-60 hidden lg:block"
      />
      <img
        src={orbImage}
        alt=""
        className="absolute bottom-40 left-10 w-10 h-10 animate-float opacity-40 hidden lg:block"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8" style={{ animation: "slide-up 0.8s ease-out" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card gradient-border text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            Next-Gen Game Management
          </div>

          <h1 className="font-display font-900 text-5xl md:text-7xl leading-[1.05] tracking-tight">
            Manage Your
            <br />
            <span className="gradient-text">Gaming Empire</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
            Every player, every match, every stat — woven into a single powerful platform. Track, analyze, and dominate.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-2xl glow-purple hover:opacity-90 transition-all flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass-card gradient-border text-foreground font-display font-semibold rounded-2xl hover:bg-secondary/50 transition-colors">
              Watch Demo
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div>
              <span className="font-display font-bold text-2xl text-foreground">50K+</span>
              <p className="text-muted-foreground text-sm">Active Teams</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <span className="font-display font-bold text-2xl text-foreground">1M+</span>
              <p className="text-muted-foreground text-sm">Games Managed</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <span className="font-display font-bold text-2xl text-foreground">99.9%</span>
              <p className="text-muted-foreground text-sm">Uptime</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center" style={{ animation: "slide-up 1s ease-out 0.2s both" }}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-[60px] animate-pulse-glow" />
            <img
              src={heroImage}
              alt="Game management dashboard with controller"
              className="relative w-full max-w-lg rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
