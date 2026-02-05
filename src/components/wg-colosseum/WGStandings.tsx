import { WGLayout } from "@/components/wg-colosseum/WGLayout";
import { Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react";

const standings = [
  { pos: 1, team: "Phoenix Esports", tag: "PHX", logo: "🔥", wins: 8, losses: 2, streak: "W3", trend: "up" },
  { pos: 2, team: "Arctic Wolves", tag: "AWL", logo: "🐺", wins: 7, losses: 3, streak: "W2", trend: "up" },
  { pos: 3, team: "Shadow Dynasty", tag: "SHD", logo: "👑", wins: 6, losses: 4, streak: "L1", trend: "down" },
  { pos: 4, team: "Storm Titans", tag: "STT", logo: "⚡", wins: 6, losses: 4, streak: "W1", trend: "same" },
  { pos: 5, team: "Crystal Guard", tag: "CRG", logo: "💎", wins: 5, losses: 5, streak: "L2", trend: "down" },
  { pos: 6, team: "Inferno Kings", tag: "INK", logo: "👹", wins: 4, losses: 6, streak: "W1", trend: "up" },
  { pos: 7, team: "Void Reapers", tag: "VRX", logo: "🌀", wins: 3, losses: 7, streak: "L3", trend: "down" },
  { pos: 8, team: "Nova Stars", tag: "NVS", logo: "⭐", wins: 1, losses: 9, streak: "L5", trend: "same" },
];

const WGStandings = () => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPositionStyle = (pos: number) => {
    switch (pos) {
      case 1:
        return "bg-gradient-to-r from-yellow-500/20 to-amber-500/10 border-yellow-500/30";
      case 2:
        return "bg-gradient-to-r from-gray-400/20 to-gray-500/10 border-gray-400/30";
      case 3:
        return "bg-gradient-to-r from-orange-600/20 to-amber-700/10 border-orange-600/30";
      default:
        return "bg-gray-900/50 border-gray-700/30";
    }
  };

  return (
    <WGLayout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 wg-bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] wg-gradient-radial opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-6">
              SEMANA 10
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              <span className="wg-text-gradient">CLASSIFICAÇÃO</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Acompanha a classificação atualizada da liga
            </p>
          </div>
        </div>
      </section>

      {/* Standings Table */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 text-sm font-semibold text-gray-400 border-b border-violet-500/20">
              <div className="col-span-1">#</div>
              <div className="col-span-5">EQUIPA</div>
              <div className="col-span-2 text-center">V-D</div>
              <div className="col-span-2 text-center">WR%</div>
              <div className="col-span-1 text-center">STREAK</div>
              <div className="col-span-1 text-center">TREND</div>
            </div>

            {/* Rows */}
            <div className="space-y-2 mt-4">
              {standings.map((team) => (
                <div
                  key={team.tag}
                  className={`grid grid-cols-12 gap-4 px-6 py-4 rounded-xl border ${getPositionStyle(team.pos)} transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="col-span-1 flex items-center">
                    <span className={`text-xl font-bold ${team.pos <= 3 ? "text-white" : "text-gray-500"}`}>
                      {team.pos}
                    </span>
                  </div>
                  <div className="col-span-5 flex items-center gap-3">
                    <span className="text-2xl">{team.logo}</span>
                    <div>
                      <span className="font-semibold text-white">{team.team}</span>
                      <span className="text-gray-500 text-sm ml-2">[{team.tag}]</span>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center justify-center">
                    <span className="text-green-400 font-bold">{team.wins}</span>
                    <span className="text-gray-500 mx-1">-</span>
                    <span className="text-red-400 font-bold">{team.losses}</span>
                  </div>
                  <div className="col-span-2 flex items-center justify-center">
                    <span className="font-semibold text-white">
                      {Math.round((team.wins / (team.wins + team.losses)) * 100)}%
                    </span>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <span className={`text-sm font-mono ${team.streak.startsWith("W") ? "text-green-400" : "text-red-400"}`}>
                      {team.streak}
                    </span>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    {getTrendIcon(team.trend)}
                  </div>
                </div>
              ))}
            </div>

            {/* Playoff Line */}
            <div className="mt-8 pt-4 border-t border-violet-500/30">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span>Top 4 qualifica para Playoffs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WGLayout>
  );
};

export default WGStandings;
