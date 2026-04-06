import founderPortrait from "@/assets/founder-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-card gradient-border">
                <img
                  src={founderPortrait}
                  alt="YAK Founder"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
              <div className="mt-6 text-center">
                <p className="font-display font-bold text-lg text-foreground">YAK Creative 🇳🇵</p>
                <p className="text-muted-foreground text-sm">Founder & CTO, Full Stack Web Developer</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              How It Started
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Based in Nepal, I started YAK Creative in 2023 with a passion for building beautiful, functional websites for Nepali businesses. From local startups to established brands, I help companies across Nepal establish their digital presence with modern web design, development, and SEO.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Having worked with various Nepali companies, I understand the local market and what it takes to create websites that resonate with Nepali audiences. My focus is on delivering high-quality, affordable web solutions tailored to the needs of businesses in Nepal.
            </p>

            <div className="flex items-center gap-12 pt-6">
              <div>
                <span className="font-display font-black text-4xl gradient-text">3</span>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Years Of Experience</p>
              </div>
              <div>
                <span className="font-display font-black text-4xl gradient-text">7</span>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Finished Projects</p>
              </div>
              <div>
                <span className="font-display font-black text-4xl gradient-text">15</span>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Cases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
