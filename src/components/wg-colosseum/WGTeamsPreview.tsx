import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const teams = [
  { name: "Phoenix Esports", tag: "PHX", logo: "🔥", color: "from-orange-500 to-red-600" },
  { name: "Arctic Wolves", tag: "AWL", logo: "🐺", color: "from-cyan-500 to-blue-600" },
  { name: "Shadow Dynasty", tag: "SHD", logo: "👑", color: "from-purple-500 to-violet-600" },
  { name: "Storm Titans", tag: "STT", logo: "⚡", color: "from-yellow-500 to-amber-600" },
];

export const WGTeamsPreview = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 wg-bg-grid opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-violet-400 text-sm font-semibold mb-2 block">COMPETIDORES</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              EQUIPAS <span className="wg-text-gradient">DESTAQUE</span>
            </h2>
          </div>
          <Link to="/wg-colosseum/equipas" className="hidden md:block">
            <Button variant="ghost" className="text-violet-400 hover:text-violet-300">
              Ver Todas
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team) => (
            <Link
              key={team.tag}
              to="/wg-colosseum/equipas"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-violet-500/20 p-6 hover:border-violet-500/50 transition-all duration-500"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${team.color}`} />
              
              <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${team.color} flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-500`}>
                {team.logo}
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-1">{team.name}</h3>
              <span className="text-gray-500 font-mono text-sm">[{team.tag}]</span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/wg-colosseum/equipas">
            <Button variant="outline" className="border-violet-500/50 text-violet-400">
              Ver Todas as Equipas
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
