import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const teams = [
  {
    name: "League of Legends",
    slug: "league-of-legends",
    description: "As nossas equipas de League of Legends a competir no mais alto nível com estratégia e performance coletiva.",
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/50"
  },
  {
    name: "Valorant",
    slug: "valorant",
    description: "As nossas equipas de Valorant a dominar o cenário tático de shooters com estratégia e precisão.",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/50"
  },
];

export const TeamsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            NOSSAS <span className="text-primary">MODALIDADES</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Duas divisões de elite da WayGaming a competir no cenário de esports nacional e internacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teams.map((team) => (
            <Link
              key={team.slug}
              to={`/${team.slug}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-500 hover:scale-[1.02]",
                team.borderColor
              )}
            >
              {/* Background Gradient */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                team.color
              )} />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-display text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {team.name}
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  {team.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-muted-foreground">
                    {team.players} Jogadores
                  </span>
                  <span className="flex items-center gap-2 font-body text-sm font-semibold text-primary group-hover:gap-4 transition-all duration-300">
                    Ver Equipa
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
