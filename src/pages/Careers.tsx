import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Trophy, Megaphone, Camera, Code, Briefcase, Target, BarChart } from "lucide-react";

const positions = [
  {
    title: "League of Legends Coach",
    department: "Esports",
    icon: Target,
    description: "Procuramos um coach para liderar a nossa equipa academy de League of Legends. Responsável por desenvolver estratégias, analisar adversários e orientar jogadores para o máximo desempenho.",
    requirements: [
      "Sem experiência mínima",
      "Conhecimento do meta atual",
      "Capacidade de liderança e comunicação",
      "Disponibilidade para scrims e treinos"
    ]
  },
  {
    title: "League of Legends Analyst",
    department: "Esports",
    icon: BarChart,
    description: "Analista dedicado para a equipa de league of legends. Responsável por estudar adversários, criar relatórios táticos e apoiar o coach na preparação de jogos.",
    requirements: [
      "Domínio de ferramentas de VOD review",
      "Rank D4+ preferencial",
      "Fluência em português e inglês",
      "Boa capacidade de comunicação"
    ]
  },
  // {
  //   title: "Social Media Manager",
  //   department: "Marketing",
  //   icon: Megaphone,
  //   description: "Gestão das redes sociais da organização. Criação de conteúdo, engagement com a comunidade e desenvolvimento da presença digital da NexusGG.",
  //   requirements: [
  //     "Experiência em gestão de redes sociais",
  //     "Conhecimento do ecossistema esports",
  //     "Criatividade e proatividade",
  //     "Domínio de ferramentas de design"
  //   ]
  // },
  {
    title: "Streamer/Caster",
    department: "Streamer",
    icon: Camera,
    description: "Criação de conteúdo para as plataformas digitais. Cobertura de eventos, highlights de jogos e conteúdo para redes sociais.",
    requirements: [
      "Mínimo de 5 horas semanais",
      "Experiência como caster é mais valia",
      "Paixão por esports e gaming",
      "Portfolio de trabalhos anteriores (Opcional)"
    ]
  },
  {
    title: "Staff",
    department: "Operations",
    icon: Users,
    description: "Gestão operacional das equipas. Coordenação de horários, logística de eventos e suporte aos jogadores no dia-a-dia.",
    requirements: [
      "Experiência em gestão de equipas",
      "Excelentes capacidades organizacionais",
      "Disponibilidade flexível",
      "Carta de condução"
    ]
  }
];

const GOOGLE_FORM_URL = "https://discord.com/users/1284567243379966036";

const Careers = () => {
  return (
    <Layout>
      <Helmet>
        <title>Carreiras - WayGaming</title>
        <meta name="description" content="Junta-te à WayGaming. Descobre as vagas disponíveis na nossa organização de esports." />
      </Helmet>

      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <Briefcase className="w-4 h-4 mr-2" />
              Carreiras
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              JUNTA-TE À <span className="text-primary text-glow">WAYGAMING</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              Estamos sempre à procura de talentos apaixonados por esports. 
              Descobre as oportunidades disponíveis e faz parte da nossa família.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <position.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-display">{position.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {position.department}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground font-body">
                    {position.description}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Requisitos:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {position.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="w-full mt-4 group/btn"
                    onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
                  >
                    Candidatar
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            NÃO ENCONTRAS A <span className="text-primary">VAGA IDEAL</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-body">
            Envia-nos a tua candidatura espontânea. Estamos sempre abertos a conhecer novos talentos 
            que partilham a nossa paixão por esports.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
          >
            Candidatura Espontânea
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
