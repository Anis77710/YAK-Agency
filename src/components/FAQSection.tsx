const faqs = [
  "What services can we provide as a UX design agency?",
  "Does the Creation of Visually Appealing Websites Depend on the Budget?",
  "How long does a typical web design project take?",
  "Do you offer post-launch support and maintenance?",
];

const FAQSection = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="glass-card gradient-border p-10 md:p-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
            FAQ
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-border/30 last:border-0">
                <summary className="flex items-center justify-between py-5 cursor-pointer text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base list-none">
                  {faq}
                  <span className="text-muted-foreground ml-4 shrink-0 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="pb-5 text-muted-foreground text-sm leading-relaxed">
                  We provide comprehensive UX/UI design, web development, SEO optimization, and branding services tailored to your business needs. Every project is handled with attention to detail and modern design principles.
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
