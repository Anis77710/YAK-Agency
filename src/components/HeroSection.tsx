import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/8 blur-[150px]" />
      </div>
      <div className="absolute top-[72px] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-slide-up">
          <p className="text-muted-foreground text-sm">Welcome to</p>
          <h1 className="font-display font-black text-5xl md:text-7xl leading-[1.05] tracking-tight">
            UX/UI Web
            <br />
            Design <span className="gradient-text">Agency</span>
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-2"><span className="text-primary">//</span> Web Design</span>
            <span className="flex items-center gap-2"><span className="text-primary">//</span> Development</span>
            <span className="flex items-center gap-2"><span className="text-primary">//</span> SEO</span>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <span className="font-display font-black text-4xl text-foreground">3</span>
              <span className="text-primary text-xl font-bold align-top">+</span>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <span className="font-display font-black text-4xl text-foreground">7</span>
              <span className="text-primary text-xl font-bold align-top">+</span>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <span className="font-display font-black text-4xl text-foreground">15</span>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Cases</p>
            </div>
          </div>

          <a href="#contacts" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-full glow-purple hover:opacity-90 transition-all mt-4">
            <span className="w-2 h-2 rounded-full bg-primary-foreground" />
            Contact Us
          </a>
        </div>

        <div className="relative flex justify-center animate-slide-up [animation-delay:0.2s]">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/15 rounded-3xl blur-[60px] animate-pulse-glow" />
            <img src={heroDashboard} alt="YAK agency project showcase" className="relative w-full max-w-lg rounded-2xl" width={768} height={512} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
