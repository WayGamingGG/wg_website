import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy } from "lucide-react";

const topTeams = [
  { pos: 1, team: "Phoenix Esports", logo: "🔥", wins: 8, losses: 2 },
  { pos: 2, team: "Arctic Wolves", logo: "🐺", wins: 7, losses: 3 },
  { pos: 3, team: "Shadow Dynasty", logo: "👑", wins: 6, losses: 4 },
  { pos: 4, team: "Storm Titans", logo: "⚡", wins: 6, losses: 4 },
  { pos: 5, team: "Crystal Guard", logo: "💎", wins: 5, losses: 5 },
];

export const WGStandingsPreview = () => {
  const getPositionColor = (pos: number) => {
    switch (pos) {
      case 1:
        return "text-yellow-400";
      case 2:
        return "text-gray-400";
      case 3:
        return "text-orange-500";
      default:
        return "text-gray-600";
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-violet-400 text-sm font-semibold mb-2 block">TEMPORADA REGULAR</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              <span className="wg-text-gradient">CLASSIFICAÇÃO</span>
            </h2>
          </div>
          <Link to="/wg-colosseum/classificacao" className="hidden md:block">
            <Button variant="ghost" className="text-violet-400 hover:text-violet-300">
              Ver Completa
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-violet-500/20 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-violet-500/10 text-sm font-semibold text-gray-400">
              <div className="col-span-1">#</div>
              <div className="col-span-7">EQUIPA</div>
              <div className="col-span-2 text-center">V-D</div>
              <div className="col-span-2 text-center">WR%</div>
            </div>

            {/* Rows */}
            {topTeams.map((team, index) => (
              <div
                key={team.pos}
                className={`grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-violet-500/5 transition-colors ${
                  index < topTeams.length - 1 ? "border-b border-violet-500/10" : ""
                }`}
              >
                <div className="col-span-1">
                  <span className={`text-xl font-bold ${getPositionColor(team.pos)}`}>
                    {team.pos}
                  </span>
                </div>
                <div className="col-span-7 flex items-center gap-3">
                  <span className="text-2xl">{team.logo}</span>
                  <span className="font-semibold text-white">{team.team}</span>
                </div>
                <div className="col-span-2 text-center">
                  <span className="text-green-400 font-bold">{team.wins}</span>
                  <span className="text-gray-600 mx-1">-</span>
                  <span className="text-red-400 font-bold">{team.losses}</span>
                </div>
                <div className="col-span-2 text-center">
                  <span className="font-semibold text-white">
                    {Math.round((team.wins / (team.wins + team.losses)) * 100)}%
                  </span>
                </div>
              </div>
            ))}

            {/* Playoff Line */}
            <div className="px-6 py-4 bg-violet-500/5 border-t border-violet-500/20">
              <div className="flex items-center gap-2 text-sm text-violet-400">
                <Trophy className="w-4 h-4" />
                <span>Top 4 qualifica para Playoffs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/wg-colosseum/classificacao">
            <Button variant="outline" className="border-violet-500/50 text-violet-400">
              Ver Classificação Completa
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
