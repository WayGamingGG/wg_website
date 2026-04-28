import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { TeamHeader } from "@/components/teams/TeamHeader";
import { PlayerCard, Player } from "@/components/players/PlayerCard";
import { Crosshair, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO_LOGO, SEO_SITE_NAME, SEO_TWITTER } from "@/lib/seo";

const V = "/playersValorant/";

const omegaPlayers: Player[] = [
  { id: "o1", nickname: "PROmiseP",  realName: "", role: "Duelist",    nationality: "", image: `${V}Jett.jpg`  },
  { id: "o2", nickname: "ForeverZzz",realName: "", role: "Duelist",    nationality: "", image: `${V}Jett.jpg`  },
  { id: "o3", nickname: "Leo",       realName: "", role: "Controller", nationality: "", image: `${V}Omen.png`  },
  { id: "o4", nickname: "Kiiraa",    realName: "", role: "Initiator",  nationality: "", image: `${V}Fade.png`  },
  { id: "o5", nickname: "aw1",       realName: "", role: "Duelist",    nationality: "", image: `${V}Jett.jpg`  },
  { id: "o6", nickname: "justAyden", realName: "", role: "Duelist",    nationality: "", image: `${V}Miks.png`  },
  { id: "o7", nickname: "jincasa",   realName: "", role: "Initiator",  nationality: "", image: `${V}Skye.png`  },
];

const alphaPlayers: Player[] = [
  { id: "a1", nickname: "txger 恵",  realName: "", role: "Initiator",  nationality: "", image: `${V}sova.png`     },
  { id: "a2", nickname: "maverick",  realName: "", role: "Sentinel",   nationality: "", image: `${V}vyse.png`     },
  { id: "a3", nickname: "Moon 福",   realName: "", role: "Controller", nationality: "", image: `${V}Viper.png`    },
  { id: "a4", nickname: "Wolfy",     realName: "", role: "Controller", nationality: "", image: `${V}Clove.png`    },
  { id: "a5", nickname: "AURA",      realName: "", role: "Duelist",    nationality: "", image: `${V}Jett.jpg`     },
  { id: "a6", nickname: "Ruca",      realName: "", role: "Duelist",    nationality: "", image: `${V}Jett.jpg`     },
  { id: "a7", nickname: "hollow",    realName: "", role: "Sentinel",   nationality: "", image: `${V}Deadlock.png` },
];

const alphaCoach: Player = {
  id: "ac1", nickname: "MinizEni", realName: "MinizEni#EG1", role: "Coach", nationality: "", image: undefined,
};

const valquiriaPlayers: Player[] = [
  { id: "v1", nickname: "Bunny",            realName: "", role: "Duelist",    nationality: "", image: `${V}Miks.png`      },
  { id: "v2", nickname: "champagne mami",   realName: "", role: "Duelist",    nationality: "", image: `${V}Jett.jpg`      },
  { id: "v3", nickname: "Nixie",            realName: "", role: "Initiator",  nationality: "", image: `${V}Tejo.png`      },
  { id: "v4", nickname: "garrafa de água",  realName: "", role: "Controller", nationality: "", image: `${V}Brimstone.png` },
  { id: "v5", nickname: "Sun7ee",           realName: "", role: "Sentinel",   nationality: "", image: `${V}Cypher.png`    },
  { id: "v6", nickname: "Scarlet Demon",    realName: "", role: "Controller", nationality: "", image: `${V}Omen.png`      },
];

interface TeamSectionProps {
  teamName: string;
  accentColor: string;
  players: Player[];
  coach?: Player;
  coachLabel: string;
  badge?: string;
}

const TeamSection = ({ teamName, accentColor, players, coach, coachLabel, badge }: TeamSectionProps) => (
  <section className="py-24 first:pt-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {teamName}
          </h2>
          {badge && (
            <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} accentColor={accentColor} />
        ))}
      </div>

      {coach && (
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-4 px-6 py-4 bg-card rounded-2xl border border-border">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{coachLabel}</p>
              <p className="font-display text-lg font-bold">{coach.nickname}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  </section>
);

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
        <meta property="og:description" content="As equipas de Valorant da WayGaming. Táctica, precisão e competição de alto nível." />
        <meta property="og:image" content={SEO_LOGO} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO_TWITTER} />
        <meta name="twitter:title" content="Valorant — WayGaming Esports" />
        <meta name="twitter:image" content={SEO_LOGO} />
      </Helmet>

      <TeamHeader
        title="VALORANT"
        subtitle={t('valorant.subtitle')}
        description={t('valorant.description')}
        accentColor="bg-red-500"
        icon={<Crosshair className="w-5 h-5 text-red-400" />}
      />

      <TeamSection
        teamName="WAY OMEGA"
        accentColor="from-red-500/30"
        players={omegaPlayers}
        coachLabel={t('valorant.coachLabel')}
      />

      <div className="border-t border-border/50" />

      <TeamSection
        teamName="WAY ALPHA"
        accentColor="from-orange-500/30"
        players={alphaPlayers}
        coach={alphaCoach}
        coachLabel={t('valorant.coachLabel')}
      />

      <div className="border-t border-border/50" />

      <TeamSection
        teamName="WAY VALQUÍRIA"
        accentColor="from-pink-500/30"
        players={valquiriaPlayers}
        coachLabel={t('valorant.coachLabel')}
        badge={t('valorant.femaleTeamBadge')}
      />
    </Layout>
  );
};

export default Valorant;
