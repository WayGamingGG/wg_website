import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Tv } from "lucide-react";

const upcomingMatches = [
  { team1: "Phoenix Esports", logo1: "🔥", team2: "Arctic Wolves", logo2: "🐺", date: "15 Mar", time: "19:00" },
  { team1: "Shadow Dynasty", logo1: "👑", team2: "Storm Titans", logo2: "⚡", date: "15 Mar", time: "20:30" },
  { team1: "Crystal Guard", logo1: "💎", team2: "Inferno Kings", logo2: "👹", date: "16 Mar", time: "19:00" },
];

export const WGSchedulePreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-violet-900/10">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-violet-400 text-sm font-semibold mb-2 block">SEMANA 10</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              PRÓXIMOS <span className="wg-text-gradient">JOGOS</span>
            </h2>
          </div>
          <Link to="/wg-colosseum/calendario" className="hidden md:block">
            <Button variant="ghost" className="text-violet-400 hover:text-violet-300">
              Ver Calendário
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {upcomingMatches.map((match, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900/80 to-gray-800/50 border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300"
            >
              <div className="grid grid-cols-12 gap-4 p-6 items-center">
                {/* Date */}
                <div className="col-span-2 md:col-span-1">
                  <div className="flex flex-col items-center text-center">
                    <Calendar className="w-4 h-4 text-violet-400 mb-1" />
                    <span className="text-xs text-gray-400">{match.date}</span>
                  </div>
                </div>

                {/* Team 1 */}
                <div className="col-span-4 md:col-span-4 flex items-center gap-2 md:gap-3 justify-end">
                  <span className="font-semibold text-white text-sm md:text-base text-right truncate">{match.team1}</span>
                  <span className="text-2xl md:text-3xl">{match.logo1}</span>
                </div>

                {/* VS */}
                <div className="col-span-2 flex flex-col items-center">
                  <span className="text-violet-400 font-bold text-lg">VS</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <Clock className="w-3 h-3" />
                    <span>{match.time}</span>
                  </div>
                </div>

                {/* Team 2 */}
                <div className="col-span-4 md:col-span-4 flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-3xl">{match.logo2}</span>
                  <span className="font-semibold text-white text-sm md:text-base truncate">{match.team2}</span>
                </div>

                {/* Watch Button */}
                <div className="hidden md:flex col-span-1 justify-end">
                  <button className="p-2 rounded-lg bg-violet-500/20 text-violet-400 hover:bg-violet-500/30 transition-colors">
                    <Tv className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/wg-colosseum/calendario">
            <Button variant="outline" className="border-violet-500/50 text-violet-400">
              Ver Calendário Completo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
