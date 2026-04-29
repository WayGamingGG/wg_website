import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { TeamHeader } from "@/components/teams/TeamHeader";
import { PlayerCard, Player } from "@/components/players/PlayerCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Crosshair, Shield, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO_LOGO, SEO_SITE_NAME, SEO_TWITTER } from "@/lib/seo";

const V = "/playersValorant/";

const omegaPlayers: Player[] = [
  { id: "o1", nickname: "PROmiseP",       realName: "", role: "Duelist",    nationality: "", image: `${V}Jett.jpg`      },
  { id: "o2", nickname: "ForeverZzz",     realName: "", role: "Duelist",    nationality: "", image: `${V}Jett.jpg`      },
  { id: "o3", nickname: "Leo",            realName: "", role: "Controller", nationality: "", image: `${V}Omen.png`      },
  { id: "o4", nickname: "Kiiraa",         realName: "", role: "Initiator",  nationality: "", image: `${V}Fade.png`      },
  { id: "o5", nickname: "aw1",            realName: "", role: "Duelist",    nationality: "", image: `${V}Jett.jpg`      },
  { id: "o6", nickname: "justAyden",      realName: "", role: "Duelist",    nationality: "", image: `${V}Miks.png`      },
  { id: "o7", nickname: "jinn",        realName: "", role: "Initiator",  nationality: "", image: `${V}Skye.png`      },
];

const alphaPlayers: Player[] = [
  { id: "a1", nickname: "txger 恵",       realName: "", role: "Initiator",  nationality: "", image: `${V}sova.png`      },
  { id: "a2", nickname: "maverick",       realName: "", role: "Sentinel",   nationality: "", image: `${V}vyse.png`      },
  { id: "a3", nickname: "Moon 福",        realName: "", role: "Controller", nationality: "", image: `${V}Viper.png`     },
  { id: "a4", nickname: "Wolfy",          realName: "", role: "Controller", nationality: "", image: `${V}Clove.png`     },
  { id: "a5", nickname: "AURA",           realName: "", role: "Duelist",    nationality: "", image: `${V}Jett.jpg`      },
  { id: "a6", nickname: "Ruca",           realName: "", role: "Duelist",    nationality: "", image: `${V}Jett.jpg`      },
  { id: "a7", nickname: "hollow",         realName: "", role: "Sentinel",   nationality: "", image: `${V}Deadlock.png`  },
];

const valquiriaPlayers: Player[] = [
  { id: "v1", nickname: "Bunny",           realName: "", role: "Duelist",    nationality: "", image: `${V}Miks.png`      },
  { id: "v2", nickname: "champagne mami",  realName: "", role: "Duelist",    nationality: "", image: `${V}Jett.jpg`      },
  { id: "v3", nickname: "Nixie",           realName: "", role: "Initiator",  nationality: "", image: `${V}Tejo.png`      },
  { id: "v4", nickname: "garrafa de água", realName: "", role: "Controller", nationality: "", image: `${V}Brimstone.png` },
  { id: "v5", nickname: "Sun7ee",          realName: "", role: "Sentinel",   nationality: "", image: `${V}Cypher.png`    },
  { id: "v6", nickname: "Scarlet Demon",   realName: "", role: "Controller", nationality: "", image: `${V}Omen.png`      },
];

const triggerClass = "font-body font-semibold uppercase tracking-wider text-sm px-6 py-2.5 data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400 data-[state=active]:shadow-none rounded-sm transition-all duration-300";

const Valorant = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Helmet>
        <title>Valorant — WayGaming Esports</title>
        <meta name="description" content="As equipas de Valorant da WayGaming. Táctica, precisão e competição de alto nível." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SEO_SITE_NAME} />
        <meta property="og:title" content="Valorant — WayGaming Esports" />
        <meta property="og:description" content="As equipas de Valorant da WayGaming Esports Portugal. Way Master, Way Valquíria e School — táctica, precisão e competição de alto nível." />
        <meta property="og:url" content="https://waygaming.gg/#/valorant" />
        <meta property="og:image" content={SEO_LOGO} />
        <link rel="canonical" href="https://waygaming.gg/#/valorant" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO_TWITTER} />
        <meta name="twitter:title" content="Valorant — WayGaming Esports" />
        <meta name="twitter:description" content="As equipas de Valorant da WayGaming Esports Portugal. Táctica, precisão e competição de alto nível com Way Master e Way Valquíria." />
        <meta name="twitter:image" content={SEO_LOGO} />
      </Helmet>

      <TeamHeader
        title="VALORANT"
        subtitle={t('valorant.subtitle')}
        description={t('valorant.description')}
        accentColor="bg-red-500"
        icon={<Crosshair className="w-5 h-5 text-red-400" />}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="master" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-card border border-border/60 p-1 h-auto gap-1">
                <TabsTrigger value="valquiria" className={triggerClass}>
                  {t('valorant.tabValquiria')}
                </TabsTrigger>
                <TabsTrigger value="master" className={triggerClass}>
                  {t('valorant.tabMaster')}
                </TabsTrigger>
                <TabsTrigger value="school" className={triggerClass}>
                  {t('valorant.tabSchool')}
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab 1 — Way Valquíria */}
            <TabsContent value="valquiria">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  WAY <span className="text-pink-400">VALQUÍRIA</span>
                </h2>
                <span className="inline-block px-4 py-1.5 bg-pink-500/20 text-pink-400 text-xs font-body font-semibold rounded-full uppercase tracking-wider">
                  {t('valorant.femaleTeamBadge')}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {valquiriaPlayers.map((player) => (
                  <PlayerCard key={player.id} player={player} accentColor="from-pink-500/30" />
                ))}
              </div>
            </TabsContent>

            {/* Tab 2 — Way Master (Alpha + Omega) */}
            <TabsContent value="master">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  WAY <span className="text-red-400">MASTER</span>
                </h2>
                <p className="font-body text-xl text-muted-foreground">
                  {t('valorant.sectionSubtitle')}
                </p>
              </div>

              <div className="max-w-7xl mx-auto space-y-16">
                {/* Way Alpha */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-500/40" />
                    <h3 className="font-display text-2xl font-bold tracking-[0.2em] text-orange-400 uppercase">
                      Way Alpha
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-500/40" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {alphaPlayers.map((player) => (
                      <PlayerCard key={player.id} player={player} accentColor="from-orange-500/30" compact />
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <div className="flex items-center gap-4 px-6 py-4 bg-card rounded-2xl border border-border">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <Shield className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                          {t('valorant.coachLabel')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Way Omega */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-red-500/40" />
                    <h3 className="font-display text-2xl font-bold tracking-[0.2em] text-red-400 uppercase">
                      Way Omega
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-red-500/40" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {omegaPlayers.map((player) => (
                      <PlayerCard key={player.id} player={player} accentColor="from-red-500/30" compact />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab 3 — School (Em Construção) */}
            <TabsContent value="school">
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Wrench className="w-10 h-10 text-red-400 animate-pulse" />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-red-500/5 animate-ping" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  SCHOOL <span className="text-red-400">{t('common.comingSoon')}</span>
                </h2>
                <p className="font-body text-muted-foreground text-lg max-w-md">
                  {t('valorant.comingSoonDesc')}
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Valorant;
