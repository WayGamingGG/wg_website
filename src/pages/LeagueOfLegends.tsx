import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { TeamHeader } from "@/components/teams/TeamHeader";
import { PlayerCard, Player } from "@/components/players/PlayerCard";
import { Gamepad2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO_LOGO, SEO_SITE_NAME, SEO_TWITTER } from "@/lib/seo";

const lolPlayers: Player[] = [
  { id: "1", nickname: "Moreiraooo", realName: "Thiago Moreirao", role: "Top Laner", nationality: "", image: "morderkaiser.jpg" },
  { id: "2", nickname: "LUCAS", realName: "José Lucas", role: "Jungler", nationality: "", image: "queen.jpg" },
  { id: "3", nickname: "DOOMA", realName: "Fernando Carvalho", role: "Mid Laner", nationality: "", image: "kassadin.jpg" },
  { id: "4", nickname: "Leazor", realName: "Nuno Pinheiro", role: "ADC", nationality: "", image: "kaisa.jpg" },
  { id: "5", nickname: "ZUKANOOB", realName: "Hebert Nunes", role: "Support", nationality: "", image: "tresh.jpg" },
  { id: "6", nickname: "Pyker", realName: "Danilo Costa", role: "Support", nationality: "", image: "pyker.jpg" },
  { id: "7", nickname: "Diz coteca", realName: "David Almeida", role: "Jungler", nationality: "", image: "gravescity.jpg" },
];

const LeagueOfLegends = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Helmet>
        <title>League of Legends — WayGaming Esports</title>
        <meta name="description" content="A equipa principal de League of Legends da WayGaming. Competição de alto nível no cenário nacional e internacional." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SEO_SITE_NAME} />
        <meta property="og:title" content="League of Legends — WayGaming Esports" />
        <meta property="og:description" content="A equipa principal de League of Legends da WayGaming. Competição de alto nível no cenário nacional e internacional." />
        <meta property="og:image" content={SEO_LOGO} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO_TWITTER} />
        <meta name="twitter:title" content="League of Legends — WayGaming Esports" />
        <meta name="twitter:image" content={SEO_LOGO} />
      </Helmet>
      <TeamHeader
        title="LEAGUE OF LEGENDS"
        subtitle={t('lol.subtitle')}
        description={t('lol.description')}
        accentColor="bg-blue-500"
        icon={<Gamepad2 className="w-5 h-5 text-blue-400" />}
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              WAY <span className="text-primary">GAMING</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              {t('lol.sectionSubtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {lolPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} accentColor="from-blue-500/30" />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LeagueOfLegends;
