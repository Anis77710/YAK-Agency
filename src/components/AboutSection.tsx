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
                <p className="font-display font-bold text-lg text-foreground">YAK Creative 🇺🇦</p>
                <p className="text-muted-foreground text-sm">Founder & CTO, Full Stack Web Developer</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              How It Started
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              As a self-taught creative, I ventured into the digital arena in 2012, beginning with full-cycle website development. Over time, I acquired specializations out of necessity, ranging from Web Design to SEO. To further deepen my knowledge, I moved to refining the craft.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              There, I embraced the challenge of becoming a full-time student at a coding bootcamp in San Jose, where I completed the program with a track including Java, MEAN, and a "free elective" Python, getting the highest grades of exam proficiency.
            </p>

            <div className="flex items-center gap-12 pt-6">
              <div>
                <span className="font-display font-black text-4xl gradient-text">17</span>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Years Of Experience</p>
              </div>
              <div>
                <span className="font-display font-black text-4xl gradient-text">32</span>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Finished Projects</p>
              </div>
              <div>
                <span className="font-display font-black text-4xl gradient-text">4256+</span>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Doses Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
