import { Layout } from "@/components/layout/Layout";
import { TeamHeader } from "@/components/teams/TeamHeader";
import { PlayerCard, Player } from "@/components/players/PlayerCard";
import { Gamepad2, Trophy, Calendar } from "lucide-react";

const lolPlayers: Player[] = [
  {
    id: "1",
    nickname: "MOREIRAOO",
    realName: "Thiago Moreirao",
    role: "Top Laner",
    nationality: "🇧🇷",
    image: "moreirao.jpg"
  },
  {
    id: "2",
    nickname: "LUCAS",
    realName: "Lucas",
    role: "Jungler",
    nationality: "🇵🇹",
    image: "seju.jpg"
  },
  {
    id: "3",
    nickname: "DOOMA",
    realName: "Fernando Mamede",
    role: "Mid Laner",
    nationality: "🇵🇹",
    image: "tf.jpg"
  },{
    id: "4",
    nickname: "Leazor",
    realName: "",
    role: "Jungler",
    nationality: "🇵🇹",
    image: "graves.jpg"
  },
  {
    id: "5",
    nickname: "ZUKANOOB",
    realName: "Tiago Rodrigues",
    role: "Support",
    nationality: "🇧🇷",
    image: "zilean.jpg"
  },
  {
    id: "6",
    nickname: "PYKER",
    realName: "Hebert Rodrigues",
    role: "Support",
    nationality: "🇵🇹",
    image: "pyke.jpg"
  },{
    id: "7",
    nickname: "DE",
    realName: "Danilo Costa",
    role: "Jungler",
    nationality: "🇵🇹",
    image: "graves.jpg"
  },{
    id: "8",
    nickname: "DE",
    realName: "David Almeida",
    role: "Jungler",
    nationality: "🇵🇹",
    image: "graves.jpg"
  },{
    id: "9",
    nickname: "",
    realName: "Nuno Pinheiro",
    role: "Jungler",
    nationality: "🇵🇹",
    image: "graves.jpg"
  },
];

const LeagueOfLegends = () => {
  return (
    <Layout>
      <TeamHeader
        title="LEAGUE OF LEGENDS"
        subtitle="Nossa Equipa"
        description="A Way Gaming conta com sua equipa principal de League of Legends, focadas no competitivo nacional e internacional. Temos uma estrutura integrada num modelo de Academy, onde a evolução coletiva e individual é prioridade. Cada equipa é acompanhada por coaches de equipa e individuais, garantindo desenvolvimento contínuo, disciplina e alto rendimento."
        accentColor="bg-blue-500"
        icon={<Gamepad2 className="w-5 h-5 text-blue-400" />}
      />

      {/* Players Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              WAY <span className="text-primary">GAMING</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              We are a Voice, not an Echo
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {lolPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                accentColor="from-blue-500/30"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold mb-4">
              PRÓXIMOS JOGOS
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Acompanha-nos nas nossas próximas partidas
            </p>
            <div className="p-8 bg-card rounded-2xl border border-border">
              <p className="font-body text-muted-foreground">
                Calendário de jogos em breve...
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default LeagueOfLegends;
