import portfolioTireshop from "@/assets/portfolio-tireshop.jpg";
import portfolioTranslate from "@/assets/portfolio-translate.jpg";
import portfolioHealthcare from "@/assets/portfolio-healthcare.jpg";
import portfolioSportblog from "@/assets/portfolio-sportblog.jpg";

const projects = [
  {
    title: "Tire Shop",
    image: portfolioTireshop,
    tags: ["#UI/UX", "#SEO", "#Writing"],
    year: "2023",
  },
  {
    title: "Translate Case",
    image: portfolioTranslate,
    tags: ["#UI/UX"],
    year: "2024",
  },
  {
    title: "Health Care",
    image: portfolioHealthcare,
    tags: ["#UI/UX", "#SEO", "#Writing"],
    year: "2023",
  },
  {
    title: "Sport Blog",
    image: portfolioSportblog,
    tags: ["#UI/UX", "#SEO", "#Writing", "#Development"],
    year: "2022",
  },
];

const PortfolioSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-16">
          Meet Our Portfolio:
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden group hover:bg-secondary/30 transition-all duration-300"
              style={{ animation: `slide-up 0.6s ease-out ${0.1 * i}s both` }}
            >
              <div className="p-6 pb-0">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">{project.title}</h3>
              </div>
              <div className="px-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                  loading="lazy"
                  width={768}
                  height={512}
                />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground">{tag}</span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{project.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block px-8 py-3 border border-border rounded-full text-foreground font-medium hover:bg-secondary/30 transition-colors text-sm">
            Show All Cases
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
