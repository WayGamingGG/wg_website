const partners = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
];

export const PartnersSection = () => {
  return (
    <section className="py-20 border-y border-border">
      <div className="container mx-auto px-4">
        <h3 className="font-display text-sm font-bold uppercase tracking-widest text-center text-muted-foreground mb-12">
          Parceiros Oficiais
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-32 h-12 bg-secondary/50 rounded-lg flex items-center justify-center text-muted-foreground font-body font-semibold hover:bg-secondary hover:text-foreground transition-all duration-300"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
