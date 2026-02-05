import { WGLayout } from "@/components/wg-colosseum/WGLayout";
import { Calendar, Clock, Tv, CheckCircle, Circle } from "lucide-react";

const schedule = [
  {
    week: "Semana 10",
    matches: [
      { team1: "Phoenix Esports", logo1: "🔥", team2: "Arctic Wolves", logo2: "🐺", date: "2024-03-15", time: "19:00", status: "upcoming" },
      { team1: "Shadow Dynasty", logo1: "👑", team2: "Storm Titans", logo2: "⚡", date: "2024-03-15", time: "20:30", status: "upcoming" },
      { team1: "Crystal Guard", logo1: "💎", team2: "Inferno Kings", logo2: "👹", date: "2024-03-16", time: "19:00", status: "upcoming" },
      { team1: "Void Reapers", logo1: "🌀", team2: "Nova Stars", logo2: "⭐", date: "2024-03-16", time: "20:30", status: "upcoming" },
    ],
  },
  {
    week: "Semana 9",
    matches: [
      { team1: "Phoenix Esports", logo1: "🔥", score1: 2, team2: "Storm Titans", logo2: "⚡", score2: 1, date: "2024-03-08", time: "19:00", status: "completed" },
      { team1: "Arctic Wolves", logo1: "🐺", score1: 2, team2: "Shadow Dynasty", logo2: "👑", score2: 0, date: "2024-03-08", time: "20:30", status: "completed" },
      { team1: "Inferno Kings", logo1: "👹", score1: 2, team2: "Void Reapers", logo2: "🌀", score2: 1, date: "2024-03-09", time: "19:00", status: "completed" },
      { team1: "Crystal Guard", logo1: "💎", score1: 1, team2: "Nova Stars", logo2: "⭐", score2: 2, date: "2024-03-09", time: "20:30", status: "completed" },
    ],
  },
  {
    week: "Semana 8",
    matches: [
      { team1: "Shadow Dynasty", logo1: "👑", score1: 2, team2: "Phoenix Esports", logo2: "🔥", score2: 1, date: "2024-03-01", time: "19:00", status: "completed" },
      { team1: "Storm Titans", logo1: "⚡", score1: 0, team2: "Arctic Wolves", logo2: "🐺", score2: 2, date: "2024-03-01", time: "20:30", status: "completed" },
      { team1: "Nova Stars", logo1: "⭐", score1: 0, team2: "Inferno Kings", logo2: "👹", score2: 2, date: "2024-03-02", time: "19:00", status: "completed" },
      { team1: "Void Reapers", logo1: "🌀", score1: 1, team2: "Crystal Guard", logo2: "💎", score2: 2, date: "2024-03-02", time: "20:30", status: "completed" },
    ],
  },
];

const WGSchedule = () => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-PT", { weekday: "short", day: "numeric", month: "short" });
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
              TEMPORADA 2024
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              <span className="wg-text-gradient">CALENDÁRIO</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Todos os jogos da temporada regular
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {schedule.map((week) => (
              <div key={week.week}>
                <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-violet-400" />
                  {week.week}
                </h2>
                
                <div className="space-y-4">
                  {week.matches.map((match, idx) => (
                    <div
                      key={idx}
                      className={`relative overflow-hidden rounded-xl border transition-all duration-300 hover:scale-[1.01] ${
                        match.status === "upcoming"
                          ? "bg-gradient-to-r from-violet-900/30 to-blue-900/20 border-violet-500/30"
                          : "bg-gray-900/50 border-gray-700/30"
                      }`}
                    >
                      <div className="grid grid-cols-12 gap-4 p-6 items-center">
                        {/* Team 1 */}
                        <div className="col-span-4 flex items-center gap-3 justify-end">
                          <span className="font-semibold text-white text-right">{match.team1}</span>
                          <span className="text-3xl">{match.logo1}</span>
                        </div>

                        {/* Score / VS */}
                        <div className="col-span-4 flex items-center justify-center">
                          {match.status === "completed" ? (
                            <div className="flex items-center gap-4">
                              <span className={`text-2xl font-bold ${(match.score1 ?? 0) > (match.score2 ?? 0) ? "text-green-400" : "text-gray-500"}`}>
                                {match.score1}
                              </span>
                              <span className="text-gray-600">-</span>
                              <span className={`text-2xl font-bold ${(match.score2 ?? 0) > (match.score1 ?? 0) ? "text-green-400" : "text-gray-500"}`}>
                                {match.score2}
                              </span>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center">
                              <span className="text-violet-400 font-bold text-lg">VS</span>
                              <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                                <Clock className="w-3 h-3" />
                                <span>{match.time}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Team 2 */}
                        <div className="col-span-4 flex items-center gap-3">
                          <span className="text-3xl">{match.logo2}</span>
                          <span className="font-semibold text-white">{match.team2}</span>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="px-6 py-3 bg-black/30 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(match.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {match.status === "upcoming" ? (
                            <>
                              <Circle className="w-3 h-3 text-violet-400 fill-violet-400 animate-pulse" />
                              <span className="text-sm text-violet-400">Em breve</span>
                              <Tv className="w-4 h-4 text-violet-400 ml-2" />
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-gray-400">Concluído</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </WGLayout>
  );
};

export default WGSchedule;
