import { Layout } from "@/components/layout/Layout";
import { TeamHeader } from "@/components/teams/TeamHeader";
import { PlayerCard, Player } from "@/components/players/PlayerCard";
import { Crosshair, Trophy, Calendar } from "lucide-react";

const valorantPlayers: Player[] = [
  {
    id: "1",
    nickname: "BLAZE",
    realName: "Tiago Mendes",
    role: "Duelist",
    nationality: "🇵🇹",
  },
  {
    id: "2",
    nickname: "GHOST",
    realName: "Carlos Rodrigues",
    role: "Controller",
    nationality: "🇵🇹",
  },
  {
    id: "3",
    nickname: "FROST",
    realName: "Daniel Almeida",
    role: "Sentinel",
    nationality: "🇪🇸",
  },
  {
    id: "4",
    nickname: "HAWK",
    realName: "Bruno Martins",
    role: "Initiator",
    nationality: "🇵🇹",
  },
  {
    id: "5",
    nickname: "APEX",
    realName: "Rui Pereira",
    role: "Flex",
    nationality: "🇵🇹",
  },
  {
    id: "5",
    nickname: "APEX",
    realName: "Rui Pereira",
    role: "Flex",
    nationality: "🇵🇹",
  },
];

const Valorant = () => {
  return (
    <Layout>
      <TeamHeader
        title="VALORANT"
        subtitle="Em construção..."
        description="A Way Gaming conta com três equipas de Valorant, focadas no competitivo e integradas num modelo de Academy, onde a evolução coletiva e individual é prioridade. Cada equipa é acompanhada por coaches de equipa e individuais, garantindo desenvolvimento contínuo, disciplina e alto rendimento."
        accentColor="bg-red-500"
        icon={<Crosshair className="w-5 h-5 text-red-400" />}
      />

      {/* Players Section */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              WAY <span className="text-accent">REAPERS</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Cinco agentes prontos para qualquer desafio
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {valorantPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                accentColor="from-red-500/30"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              WAY <span className="text-accent">RYSE</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Cinco agentes prontos para qualquer desafio
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {valorantPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                accentColor="from-red-500/30"
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Schedule Section */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Calendar className="w-12 h-12 text-accent mx-auto mb-6" />
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

export default Valorant;
