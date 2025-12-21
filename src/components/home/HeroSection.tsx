import { Button } from "@/components/ui/button";
import { ChevronRight, Trophy, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Trophy, value: "15+", label: "Campeonatos" },
  { icon: Users, value: "25+", label: "Jogadores" },
  { icon: Target, value: "2", label: "Divisões" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-8 animate-slide-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              A Nova Era do Esports
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            DOMINANDO
            <br />
            <span className="gradient-text">OS CAMPOS</span>
            <br />
            DE BATALHA
          </h1>

          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Somos a NexusGG, uma organização de esports portuguesa com equipes 
            de elite em League of Legends e Valorant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/about">
                Conhecer a Org
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/league-of-legends">
                Ver Equipas
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
