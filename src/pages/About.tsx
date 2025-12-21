import { Layout } from "@/components/layout/Layout";
import { Trophy, Users, Target, Heart, Zap, Shield } from "lucide-react";

const values = [
  {
    icon: Trophy,
    title: "Excelência",
    description: "Buscamos sempre o mais alto nível de performance em todas as competições.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Valorizamos os nossos fãs e construímos uma comunidade unida e apaixonada.",
  },
  {
    icon: Target,
    title: "Foco",
    description: "Mantemos o foco nos nossos objetivos com determinação inabalável.",
  },
  {
    icon: Heart,
    title: "Paixão",
    description: "O amor pelo gaming é o que nos move todos os dias.",
  },
  {
    icon: Zap,
    title: "Inovação",
    description: "Abraçamos novas tecnologias e métodos de treino.",
  },
  {
    icon: Shield,
    title: "Integridade",
    description: "Competimos com honra e respeitamos todos os adversários.",
  },
];

const milestones = [
  { year: "2019", event: "Fundação da NexusGG" },
  { year: "2020", event: "Primeira equipa de LoL formada" },
  { year: "2021", event: "Expansão para Valorant" },
  { year: "2022", event: "Primeiro título nacional" },
  { year: "2023", event: "Qualificação europeia" },
  { year: "2024", event: "Múltiplos títulos e crescimento" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl font-black mb-6">
              SOBRE A <span className="gradient-text">NEXUSGG</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground">
              Fundada em 2019, a NexusGG nasceu com a missão de elevar o esports 
              português ao mais alto nível mundial. Somos mais do que uma organização 
              — somos uma família de competidores apaixonados.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">
                A NOSSA <span className="text-primary">HISTÓRIA</span>
              </h2>
              <div className="space-y-4 font-body text-muted-foreground text-lg">
                <p>
                  A NexusGG começou como um sonho de um grupo de amigos apaixonados 
                  por gaming competitivo. O que começou em pequenas competições locais 
                  rapidamente evoluiu para uma das organizações mais respeitadas de Portugal.
                </p>
                <p>
                  Hoje, representamos o talento português nos maiores palcos do mundo, 
                  com equipas de elite em League of Legends e Valorant. A nossa dedicação 
                  ao desenvolvimento de jogadores e à excelência competitiva é o que nos define.
                </p>
                <p>
                  Com instalações de treino de ponta e um staff técnico experiente, 
                  proporcionamos as melhores condições para que os nossos atletas 
                  alcancem o seu potencial máximo.
                </p>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-12 pb-8 last:pb-0">
                  <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center box-glow">
                    <span className="w-3 h-3 bg-primary-foreground rounded-full" />
                  </div>
                  <div className="font-display text-xl font-bold text-primary mb-1">
                    {milestone.year}
                  </div>
                  <div className="font-body text-foreground">
                    {milestone.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              OS NOSSOS <span className="text-primary">VALORES</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam tudo o que fazemos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              JUNTA-TE À <span className="text-primary">FAMÍLIA</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-8">
              Estamos sempre à procura de novos talentos. Se tens o que é preciso 
              para competir ao mais alto nível, queremos conhecer-te.
            </p>
            <a
              href="mailto:contact@nexusgg.pt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-body font-semibold uppercase tracking-wider hover:bg-primary/90 box-glow hover:box-glow-strong transition-all duration-300"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
