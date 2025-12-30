import { Layout } from "@/components/layout/Layout";
import { Twitch, Youtube, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Streamer {
  id: string;
  name: string;
  nickname: string;
  platform: "twitch" | "youtube";
  game: string;
  followers: string;
  description: string;
  socials: {
    twitch?: string;
    youtube?: string;
    twitter?: string;
    instagram?: string;
  };
}

const streamers: Streamer[] = [
  {
    id: "1",
    name: "Beatriz Mendes",
    nickname: "BeaPlays",
    platform: "twitch",
    game: "Variety",
    followers: "45K",
    description: "Streamer de variety gaming com foco em jogos indie e interação com a comunidade. Streams diários às 20h.",
    socials: {
      twitch: "https://twitch.tv/beaplays",
      twitter: "https://twitter.com/beaplays",
      instagram: "https://instagram.com/beaplays",
    },
  },
  {
    id: "2",
    name: "Marco Silva",
    nickname: "MarcoFPS",
    platform: "twitch",
    game: "Valorant",
    followers: "78K",
    description: "Ex-jogador profissional de CS:GO agora focado em Valorant. Conteúdo educativo e ranked grind.",
    socials: {
      twitch: "https://twitch.tv/marcofps",
      youtube: "https://youtube.com/marcofps",
      twitter: "https://twitter.com/marcofps",
    },
  },
  {
    id: "3",
    name: "Ana Ferreira",
    nickname: "AnaLoL",
    platform: "twitch",
    game: "League of Legends",
    followers: "120K",
    description: "Challenger na EUW, especialista em Mid Lane. Coaching streams às quartas e domingos.",
    socials: {
      twitch: "https://twitch.tv/analol",
      youtube: "https://youtube.com/analol",
      twitter: "https://twitter.com/analol",
      instagram: "https://instagram.com/analol",
    },
  },
  {
    id: "4",
    name: "Pedro Costa",
    nickname: "PedroGames",
    platform: "youtube",
    game: "Variety",
    followers: "200K",
    description: "Criador de conteúdo focado em vídeos de entretenimento e gameplay. Conhecido pelos vídeos de challenge.",
    socials: {
      youtube: "https://youtube.com/pedrogames",
      twitter: "https://twitter.com/pedrogames",
      instagram: "https://instagram.com/pedrogames",
    },
  },
  {
    id: "5",
    name: "Sofia Alves",
    nickname: "SofiaPlays",
    platform: "twitch",
    game: "Just Chatting",
    followers: "85K",
    description: "Streams de Just Chatting, reacts e gaming casual. Comunidade acolhedora e positiva.",
    socials: {
      twitch: "https://twitch.tv/sofiaplays",
      twitter: "https://twitter.com/sofiaplays",
      instagram: "https://instagram.com/sofiaplays",
    },
  },
  {
    id: "6",
    name: "Rui Santos",
    nickname: "RuiVAL",
    platform: "twitch",
    game: "Valorant",
    followers: "55K",
    description: "Radiant player com foco em agentes de entrada. Streams de ranked e análise de gameplay.",
    socials: {
      twitch: "https://twitch.tv/ruival",
      youtube: "https://youtube.com/ruival",
      twitter: "https://twitter.com/ruival",
    },
  },
];

const StreamerCard = ({ streamer }: { streamer: Streamer }) => {
  return (
    <div className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6">
        {/* Platform Badge */}
        <div className="absolute top-4 right-4">
          {streamer.platform === "twitch" ? (
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Twitch className="w-5 h-5 text-purple-400" />
            </div>
          ) : (
            <div className="p-2 bg-red-500/20 rounded-lg">
              <Youtube className="w-5 h-5 text-red-400" />
            </div>
          )}
        </div>

        {/* Avatar */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center border-2 border-border group-hover:border-primary/50 transition-colors">
          <span className="font-display text-2xl font-bold text-primary">
            {streamer.nickname.charAt(0)}
          </span>
        </div>

        {/* Info */}
        <div className="text-center mb-4">
          <h3 className="font-display text-xl font-bold text-foreground mb-1">
            {streamer.nickname}
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-2">
            {streamer.name}
          </p>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
              {streamer.game}
            </span>
          </div>
          <p className="font-body text-sm text-muted-foreground line-clamp-3">
            {streamer.description}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-2">
          {streamer.socials.twitch && (
            <a
              href={streamer.socials.twitch}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-lg hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
            >
              <Twitch className="w-4 h-4" />
            </a>
          )}
          {streamer.socials.youtube && (
            <a
              href={streamer.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          )}
          {streamer.socials.twitter && (
            <a
              href={streamer.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {streamer.socials.instagram && (
            <a
              href={streamer.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-lg hover:bg-pink-500/20 hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Streamers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full mb-6">
              <Twitch className="w-5 h-5 text-purple-400" />
              <span className="font-body text-sm font-semibold text-purple-400 uppercase tracking-wider">
                Criadores de Conteúdo
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              NOSSOS <span className="text-primary text-glow">STREAMERS</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Conhece os criadores de conteúdo que representam a WayGaming. Entretenimento, gameplay de alto nível e uma comunidade incrível.
            </p>
          </div>
        </div>
      </section>

      {/* Streamers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {streamers.map((streamer) => (
              <StreamerCard key={streamer.id} streamer={streamer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              QUERES SER UM <span className="text-primary">WAY STREAMER</span>?
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Estamos sempre à procura de novos talentos para se juntarem à nossa equipa de criadores de conteúdo.
            </p>
            <Button variant="default" size="lg" asChild>
              <a href="https://discord.com/users/1284567243379966036" target="_blank" rel="noopener noreferrer">
                Candidata-te Agora
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Streamers;
