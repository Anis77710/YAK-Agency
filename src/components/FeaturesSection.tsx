import { BarChart3, Users, Trophy, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track player performance, match outcomes, and team stats with live dashboards.",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Organize players, manage rosters, and coordinate schedules effortlessly.",
  },
  {
    icon: Trophy,
    title: "Tournament Engine",
    description: "Create and run brackets, leagues, and custom tournament formats at scale.",
  },
  {
    icon: Shield,
    title: "Anti-Cheat Integration",
    description: "Built-in fair play monitoring with automated detection and reporting.",
  },
  {
    icon: Zap,
    title: "Instant Matchmaking",
    description: "Skill-based matchmaking engine that pairs players in milliseconds.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Low-latency servers across 40+ regions for seamless worldwide play.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Features</p>
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Dominate</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete suite of tools designed for game studios, esports organizations, and competitive communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group glass-card gradient-border p-8 hover:bg-secondary/30 transition-all duration-300"
              style={{ animation: `slide-up 0.6s ease-out ${0.1 * i}s both` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
