import { Calendar } from "lucide-react";

const news = [
  {
    title: "LPLOL WINTER SPLIT 2026",
    excerpt: "Nossa equipa principal de league of legends está oficialmente qualificada para a LPLOL WINTER SPLIT 2026 ",
    date: "05 Jan 2026",
    category: "League of Legends",
    image: "/lplol.jpg"
  },
  {
    title: "Radiant Master’s Cup",
    excerpt: "A nossa equipa participou nessas ultimas semanas do torneio Radiant Master's Cup de Valorant, onde fizemos uma boa campanha neste campeonato nacional.",
    date: "12 Dez 2025",
    category: "Valorant",
  },
  {
    title: "Kaito’s Tournament",
    excerpt: "Nossas duas equipas de League of Legends, participaram da competição Kaito’s Tournament, sediada na Alemanha, onde a nossa equipa Way Ward levou a melhor e foi campeã do torneio.",
    date: "10 Dez 2025",
    category: "League of Legends",
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
            Acompanha as novidades e conquistas da nossa organização
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <article
              key={index}
              className="group bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-video relative overflow-hidden">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

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
