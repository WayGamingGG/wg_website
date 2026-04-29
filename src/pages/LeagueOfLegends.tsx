import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { TeamHeader } from "@/components/teams/TeamHeader";
import { PlayerCard, Player } from "@/components/players/PlayerCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Gamepad2, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO_LOGO, SEO_SITE_NAME, SEO_TWITTER } from "@/lib/seo";

interface LolTeam {
  name: string;
  players: Player[];
}

const lolTeams: LolTeam[] = [
  {
    name: "Fury",
    players: [
    ],
  },
  {
    name: "Liberty",
    players: [
      { id: "l1", nickname: "Moreiraooo", realName: "Thiago Moreirão", role: "Top Laner",  nationality: "", image: "tahmkench.jpg" },
      { id: "l2", nickname: "Todesu",     realName: "David Almeida",   role: "Jungler",    nationality: "", image: "viego.jpg" },
      { id: "l3", nickname: "Flaze",      realName: "Ruben Loureiro",  role: "Mid Laner",  nationality: "", image: "viktor.jpg" },
      { id: "l5", nickname: "Leazor",     realName: "Nuno Pinheiro",   role: "ADC",        nationality: "", image: "kaisa.jpg" },
      { id: "l6", nickname: "Pyker",      realName: "Danilo Costa",    role: "Support",    nationality: "", image: "pyker.jpg" },
      { id: "l4", nickname: "Suly",       realName: "Filipe Silva",    role: "Mid / Sub",  nationality: "", image: "aurora.jpg" },
    ],
  },
  {
    name: "Spirit",
    players: [
      { id: "s1", nickname: "fournauti",       realName: "Emanuel Ferreira",  role: "Top Laner",  nationality: "", image: "Gnar.jpg" },
      { id: "s2", nickname: "Thunder Marks",   realName: "Felix Monteiro",    role: "Jungler",    nationality: "", image: "Vi.jpg" },
      { id: "s3", nickname: "DIDZ TO MASTER",  realName: "Diogo Figueiredo",  role: "Jungler",    nationality: "", image: "Kayn.jpg" },
      { id: "s4", nickname: "gui",             realName: "Guilherme Azevedo", role: "Mid Laner",  nationality: "", image: "Swain.jpg" },
      { id: "s5", nickname: "jjira",           realName: "Pedro Martins",     role: "ADC",        nationality: "", image: "Yunara.jpg" },
      { id: "s6", nickname: "AgentAligator",   realName: "Mateus Jorge",      role: "Support",    nationality: "", image: "Rell.jpg" },
      { id: "s7", nickname: "Zukanoob",        realName: "Hebert Rodrigues",  role: "Support",    nationality: "", image: "tresh.jpg" },
    ],
  },
  {
    name: "Vipers",
    players: [
      { id: "v1", nickname: "Art",          realName: "Arthur",           role: "Top Laner",  nationality: "", image: "illaoi.jpg" },
      { id: "v2", nickname: "Guto",         realName: "Augusto Martins",  role: "Jungler",    nationality: "", image: "Hecarim.jpg" },
      { id: "v3", nickname: "manu0lol",     realName: "Emanuel Saraiva",  role: "Mid Laner",  nationality: "", image: "Ahri.jpg" },
      { id: "v4", nickname: "Dooma",        realName: "Fernando Mamede",  role: "Mid Laner",  nationality: "", image: "Talon.jpg" },
      { id: "v5", nickname: "Jonas",        realName: "Jonas Carvalho",   role: "ADC",        nationality: "", image: "Jinx.jpg" },
      { id: "v6", nickname: "SAAV",         realName: "Rodrigo Araujo",   role: "ADC",        nationality: "", image: "Caitlyn.jpg" },
      { id: "v7", nickname: "INeedHealing", realName: "Jorge Costa",      role: "Support",    nationality: "", image: "Sona.jpg" },
    ],
  },
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
        <meta property="og:description" content="A equipa principal de League of Legends da WayGaming Esports Portugal. Competição de alto nível no cenário nacional e internacional com Academy e School." />
        <meta property="og:url" content="https://waygaming.gg/#/league-of-legends" />
        <meta property="og:image" content={SEO_LOGO} />
        <link rel="canonical" href="https://waygaming.gg/#/league-of-legends" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO_TWITTER} />
        <meta name="twitter:title" content="League of Legends — WayGaming Esports" />
        <meta name="twitter:description" content="A equipa principal de League of Legends da WayGaming Esports Portugal. Competição de alto nível no cenário nacional e internacional com Academy e School." />
        <meta name="twitter:image" content={SEO_LOGO} />
      </Helmet>
      <TeamHeader
        title="LEAGUE OF LEGENDS"
        subtitle={t('lol.subtitle')}
        description={t('lol.description')}
        accentColor="bg-blue-500"
        icon={<Gamepad2 className="w-5 h-5 text-blue-400" />}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="main" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-card border border-border/60 p-1 h-auto gap-1">
                <TabsTrigger
                  value="academy"
                  className="font-body font-semibold uppercase tracking-wider text-sm px-6 py-2.5 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400 data-[state=active]:shadow-none rounded-sm transition-all duration-300"
                >
                  {t('lol.tabAcademy')}
                </TabsTrigger>
                <TabsTrigger
                  value="main"
                  className="font-body font-semibold uppercase tracking-wider text-sm px-6 py-2.5 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400 data-[state=active]:shadow-none rounded-sm transition-all duration-300"
                >
                  {t('lol.tabMain')}
                </TabsTrigger>
                <TabsTrigger
                  value="school"
                  className="font-body font-semibold uppercase tracking-wider text-sm px-6 py-2.5 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400 data-[state=active]:shadow-none rounded-sm transition-all duration-300"
                >
                  {t('lol.tabSchool')}
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab 1 — Academy (Em Construção) */}
            <TabsContent value="academy">
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Wrench className="w-10 h-10 text-blue-400 animate-pulse" />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-blue-500/5 animate-ping" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  Way Masters <span className="text-blue-400">{t('common.comingSoon')}</span>
                </h2>
                <p className="font-body text-muted-foreground text-lg max-w-md">
                  {t('lol.comingSoonDesc')}
                </p>
              </div>
            </TabsContent>

            {/* Tab 2 — Way Gaming */}
            <TabsContent value="main">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  Way <span className="text-primary">Elite</span>
                </h2>
                <p className="font-body text-xl text-muted-foreground">
                  {t('lol.sectionSubtitle')}
                </p>
              </div>

              <div className="max-w-7xl mx-auto space-y-16">
                {lolTeams.map((team) => (
                  <div key={team.name}>
                    {/* Team Name Divider */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/40" />
                      <h3 className="font-display text-2xl font-bold tracking-[0.2em] text-blue-400 uppercase">
                        {team.name}
                      </h3>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/40" />
                    </div>

                    {team.players.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {team.players.map((player) => (
                          <PlayerCard key={player.id} player={player} accentColor="from-blue-500/30" compact />
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-32 rounded-xl border border-dashed border-blue-500/20 bg-blue-500/5">
                        <p className="font-body text-sm text-muted-foreground tracking-wider uppercase">
                          {t('lol.comingSoonDesc')}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Tab 3 — School (Em Construção) */}
            <TabsContent value="school">
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Wrench className="w-10 h-10 text-blue-400 animate-pulse" />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-blue-500/5 animate-ping" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  SCHOOL <span className="text-blue-400">{t('common.comingSoon')}</span>
                </h2>
                <p className="font-body text-muted-foreground text-lg max-w-md">
                  {t('lol.comingSoonDesc')}
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default LeagueOfLegends;
