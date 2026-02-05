import { WGLayout } from "@/components/wg-colosseum/WGLayout";
import { Trophy, Users, Target } from "lucide-react";

const teams = [
  {
    name: "Phoenix Esports",
    tag: "PHX",
    logo: "🔥",
    wins: 8,
    losses: 2,
    players: ["TopLaner1", "Jungler1", "MidLaner1", "ADC1", "Support1"],
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Arctic Wolves",
    tag: "AWL",
    logo: "🐺",
    wins: 7,
    losses: 3,
    players: ["TopLaner2", "Jungler2", "MidLaner2", "ADC2", "Support2"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Shadow Dynasty",
    tag: "SHD",
    logo: "👑",
    wins: 6,
    losses: 4,
    players: ["TopLaner3", "Jungler3", "MidLaner3", "ADC3", "Support3"],
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Storm Titans",
    tag: "STT",
    logo: "⚡",
    wins: 6,
    losses: 4,
    players: ["TopLaner4", "Jungler4", "MidLaner4", "ADC4", "Support4"],
    color: "from-yellow-500 to-amber-600",
  },
  {
    name: "Crystal Guard",
    tag: "CRG",
    logo: "💎",
    wins: 5,
    losses: 5,
    players: ["TopLaner5", "Jungler5", "MidLaner5", "ADC5", "Support5"],
    color: "from-teal-500 to-emerald-600",
  },
  {
    name: "Inferno Kings",
    tag: "INK",
    logo: "👹",
    wins: 4,
    losses: 6,
    players: ["TopLaner6", "Jungler6", "MidLaner6", "ADC6", "Support6"],
    color: "from-red-500 to-rose-600",
  },
  {
    name: "Void Reapers",
    tag: "VRX",
    logo: "🌀",
    wins: 3,
    losses: 7,
    players: ["TopLaner7", "Jungler7", "MidLaner7", "ADC7", "Support7"],
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Nova Stars",
    tag: "NVS",
    logo: "⭐",
    wins: 1,
    losses: 9,
    players: ["TopLaner8", "Jungler8", "MidLaner8", "ADC8", "Support8"],
    color: "from-pink-500 to-fuchsia-600",
  },
];

const WGTeams = () => {
  return (
    <WGLayout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 wg-bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] wg-gradient-radial opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-6">
              TEMPORADA 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              EQUIPAS <span className="wg-text-gradient">PARTICIPANTES</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Conhece as 8 equipas que competem pela glória no WG Colosseum
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {teams.map((team, index) => (
              <div
                key={team.tag}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-violet-500/20 hover:border-violet-500/50 transition-all duration-500"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${team.color}`} />
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${team.color} flex items-center justify-center text-3xl`}>
                        {team.logo}
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white">{team.name}</h3>
                        <span className="text-gray-500 font-mono">[{team.tag}]</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Registo</div>
                      <div className="text-xl font-bold">
                        <span className="text-green-400">{team.wins}W</span>
                        <span className="text-gray-500 mx-1">-</span>
                        <span className="text-red-400">{team.losses}L</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Trophy className="w-4 h-4 text-violet-400" />
                      <span className="text-sm">#{index + 1} Classificação</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="w-4 h-4 text-violet-400" />
                      <span className="text-sm">{team.players.length} Jogadores</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Target className="w-4 h-4 text-violet-400" />
                      <span className="text-sm">{Math.round((team.wins / (team.wins + team.losses)) * 100)}% WR</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">ROSTER</h4>
                    <div className="flex flex-wrap gap-2">
                      {team.players.map((player, pIndex) => (
                        <span
                          key={pIndex}
                          className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300"
                        >
                          {player}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </WGLayout>
  );
};

export default WGTeams;
