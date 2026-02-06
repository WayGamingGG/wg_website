import { Layout } from "@/components/layout/Layout";
import { StaffCard, StaffMember } from "@/components/teams/StaffCard";
import { Users, Briefcase, Target, Brain } from "lucide-react";

const managementStaff: StaffMember[] = [
  {
    id: "1",
    name: "Sparta",
    role: "CEO & Fundador",
    description: "Fundador da WayGaming com visão de criar a maior organização de esports em Portugal.",
  },
  {
    id: "2",
    name: "Luana",
    role: "Staff League of Legends",
    description: "Responsável pelas operações diárias da organização.",
  },
  {
    id: "3",
    name: "Akira",
    role: "Manager Valorant",
    description: "Gestão geral das equipas competitivas de valorant.",
  },{
    id: "4",
    name: "BoKa",
    role: "Manager League of legends",
    description: "Gestão geral das equipas academy de league of legends.",
  },{
    id: "5",
    name: "Rumival",
    role: "Manager League of legends",
    description: "Gestão geral das equipas academy de league of legends.",
  },{
    id: "6",
    name: "Lara",
    role: "Staff Valorant",
    description: "Responsável pelas operações diárias da organização.",
  },{
    id: "7",
    name: "Portuga",
    role: "Staff League of legends",
    description: "Responsável pelas operações diárias da organização.",
  },{
    id: "8",
    name: "Afonso",
    role: "Staff Valorant",
    description: "Responsável pelas operações diárias da organização.",
  },
];

const lolStaff: StaffMember[] = [
  {
    id: "4",
    name: "Carlos Mendes",
    role: "Head Coach",
    nationality: "🇵🇹",
    description: "Ex-jogador profissional com mais de 8 anos de experiência no cenário competitivo. Especialista em análise macro e desenvolvimento de estratégias.",
  },
  {
    id: "5",
    name: "Ana Rodrigues",
    role: "Assistant Coach",
    nationality: "🇵🇹",
    description: "Focada no desenvolvimento individual dos jogadores e análise de adversários. Certificada em coaching desportivo.",
  },
  {
    id: "6",
    name: "Marta Fernandes",
    role: "Analyst",
    nationality: "🇪🇸",
    description: "Especialista em análise de dados e estatísticas. Desenvolve relatórios detalhados sobre adversários e performance da equipa.",
  },
];

const valorantStaff: StaffMember[] = [
  {
    id: "7",
    name: "Fernando Costa",
    role: "Head Coach",
    nationality: "🇵🇹",
    description: "Veterano do cenário de FPS com passagem por várias equipas europeias. Especialista em táticas e coordenação de equipa.",
  },
  {
    id: "8",
    name: "Sofia Almeida",
    role: "Assistant Coach",
    nationality: "🇵🇹",
    description: "Ex-jogadora profissional focada em desenvolvimento de mecânicas individuais e análise de VODs.",
  },
  {
    id: "9",
    name: "Paulo Martins",
    role: "Analyst",
    nationality: "🇧🇷",
    description: "Análise avançada de meta, composições de agentes e tendências do cenário competitivo global.",
  },
];

const supportStaff: StaffMember[] = [
  {
    id: "10",
    name: "Diogo Santos",
    role: "Performance Coach",
    nationality: "🇵🇹",
    description: "Psicólogo desportivo focado em performance mental, gestão de stress e dinâmicas de equipa.",
  },
  {
    id: "11",
    name: "Maria Costa",
    role: "Social Media Manager",
    nationality: "🇵🇹",
    description: "Gestão de todas as redes sociais, criação de conteúdo e engagement com a comunidade.",
  },
  {
    id: "12",
    name: "Tiago Ribeiro",
    role: "Video Editor",
    nationality: "🇵🇹",
    description: "Produção de vídeos, highlights e conteúdo multimedia para todas as plataformas.",
  },
];

const Staff = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
                A Nossa Família
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              CONHEÇA A <span className="text-primary text-glow">STAFF</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Conhece as pessoas por trás do sucesso das nossas equipas. Profissionais dedicados que trabalham incansavelmente para alcançar a excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold">GESTÃO</h2>
              <p className="font-body text-muted-foreground">Liderança e direção estratégica</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementStaff.map((member) => (
              <StaffCard key={member.id} member={member} accentColor="from-primary/30" />
            ))}
          </div>
        </div>
      </section>

      {/* LoL Staff Section */}
      {/* <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <Target className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold">LEAGUE OF LEGENDS</h2>
              <p className="font-body text-muted-foreground">Staff técnico da equipa de LoL</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lolStaff.map((member) => (
              <StaffCard key={member.id} member={member} accentColor="from-blue-500/30" />
            ))}
          </div>
        </div>
      </section> */}

      {/* Valorant Staff Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-accent/20 rounded-xl">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold">VALORANT</h2>
              <p className="font-body text-muted-foreground">Staff técnico da equipa de Valorant</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valorantStaff.map((member) => (
              <StaffCard key={member.id} member={member} accentColor="from-accent/30" />
            ))}
          </div>
        </div>
      </section> */}

      {/* Support Staff Section */}
      {/* <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-gold-dark/20 rounded-xl">
              <Brain className="w-8 h-8 text-gold-dark" />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold">SUPORTE & CONTEÚDO</h2>
              <p className="font-body text-muted-foreground">Performance, media e comunicação</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportStaff.map((member) => (
              <StaffCard key={member.id} member={member} accentColor="from-gold-dark/30" />
            ))}
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Staff;
