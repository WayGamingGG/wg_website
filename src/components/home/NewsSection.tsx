import { Calendar } from "lucide-react";

const news = [
  {
    title: "Vitória no Campeonato Nacional de LoL",
    excerpt: "A nossa equipa conquistou o primeiro lugar no campeonato nacional após uma final emocionante.",
    date: "12 Dez 2024",
    category: "League of Legends",
  },
  {
    title: "Novo Reforço para Valorant",
    excerpt: "Anunciamos a contratação de um novo jogador estrela para fortalecer a nossa lineup.",
    date: "10 Dez 2024",
    category: "Valorant",
  },
  {
    title: "Parceria com Marca Internacional",
    excerpt: "Fechamos uma parceria estratégica que vai impulsionar o nosso crescimento.",
    date: "8 Dez 2024",
    category: "Organização",
  },
];

export const NewsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            ÚLTIMAS <span className="text-primary">NOTÍCIAS</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompanhe as novidades e conquistas da nossa organização
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <article
              key={index}
              className="group bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold uppercase tracking-wider rounded">
                  {item.category}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-body text-sm">{item.date}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
