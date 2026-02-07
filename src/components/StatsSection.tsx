const stats = [
  { value: "50K+", label: "Active Teams", sublabel: "across 120 countries" },
  { value: "1.2M", label: "Games Managed", sublabel: "this month alone" },
  { value: "99.9%", label: "Uptime SLA", sublabel: "enterprise-grade reliability" },
  { value: "$8M+", label: "Prize Pool Distributed", sublabel: "seamlessly & securely" },
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-32">
      <div className="container mx-auto px-6">
        <div className="glass-card gradient-border p-12 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-900 text-4xl md:text-5xl gradient-text mb-2">{stat.value}</p>
                <p className="font-display font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-muted-foreground text-sm">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
