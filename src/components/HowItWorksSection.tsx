const steps = [
  {
    number: "01",
    title: "Create Your Arena",
    description: "Set up your game environment, configure rules, and customize your competitive space in minutes.",
  },
  {
    number: "02",
    title: "Build Your Roster",
    description: "Invite players, form teams, and manage roles with powerful organizational tools.",
  },
  {
    number: "03",
    title: "Launch & Compete",
    description: "Start tournaments, track stats in real-time, and crown champions with automated leaderboards.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-32">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-6">
            Three Steps to{" "}
            <span className="gradient-text">Victory</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center" style={{ animation: `slide-up 0.6s ease-out ${0.15 * i}s both` }}>
              <div className="font-display font-900 text-8xl gradient-text opacity-20 mb-4">
                {step.number}
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-foreground -mt-6">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
