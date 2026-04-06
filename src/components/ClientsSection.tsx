const clients = [
  "Daraz Nepal", "Foodmandu", "Khalti", "Sastodeal", "HamroPatro"
];

const ClientsSection = () => {
  return (
    <section className="py-20 border-t border-b border-border/30">
      <div className="container mx-auto px-6">
        <h3 className="font-display font-semibold text-xl text-center text-foreground mb-12">
          We Worked With
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {clients.map((client) => (
            <span
              key={client}
              className="text-muted-foreground font-display font-semibold text-lg md:text-xl opacity-50 hover:opacity-100 transition-opacity"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
