const CTASection = () => {
  return (
    <section id="contacts" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-black text-5xl md:text-6xl text-foreground leading-tight">
              STILL HAVE
              <br />
              QUESTIONS?
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <label className="text-muted-foreground text-sm mb-2 block">Your Name<span className="text-primary">*</span></label>
              <div className="border-b border-border/50 pb-2">
                <span className="text-muted-foreground/50 text-sm">Enter your name</span>
              </div>
            </div>
            <div>
              <label className="text-muted-foreground text-sm mb-2 block">Phone number<span className="text-primary">*</span></label>
              <div className="border-b border-border/50 pb-2">
                <span className="text-muted-foreground/50 text-sm">Enter your phone</span>
              </div>
            </div>
            <a href="#" className="inline-block px-10 py-3 border border-border rounded-full text-foreground font-medium hover:bg-secondary/30 transition-colors text-sm mt-4">
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
