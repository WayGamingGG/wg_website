import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, Tv } from "lucide-react";

const stats = [
  { icon: Users, value: "8", label: "Equipas" },
  { icon: Trophy, value: "€500", label: "Prize Pool" },
  { icon: Calendar, value: "10", label: "Semanas" },
  { icon: Tv, value: "50+", label: "Players" },
];

export const WGHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 wg-bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] wg-gradient-radial opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-8 animate-slide-up">
            TEMPORADA 2026 • SEMANA 10
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            WG <span className="wg-text-gradient">COLOSSEUM</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A liga portuguesa de League of Legends. Onde os melhores competem pela glória.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/wg-colosseum/classificacao">
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold px-8">
                Ver Classificação
              </Button>
            </Link>
            <Link to="/wg-colosseum/calendario">
              <Button size="lg" variant="outline" className="border-violet-500/50 text-violet-400 hover:bg-violet-500/10">
                Próximos Jogos
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-violet-500/20 rounded-xl p-6 hover:border-violet-500/40 transition-colors"
              >
                <stat.icon className="w-6 h-6 text-violet-400 mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-violet-500/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-violet-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
