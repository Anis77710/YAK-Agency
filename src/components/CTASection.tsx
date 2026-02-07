import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl glass-card p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="font-display font-900 text-4xl md:text-6xl">
              Ready to Level Up?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Join thousands of gaming organizations already using GameVault to manage their competitive ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-2xl glow-purple hover:opacity-90 transition-all flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 glass-card gradient-border text-foreground font-display font-semibold rounded-2xl hover:bg-secondary/50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
