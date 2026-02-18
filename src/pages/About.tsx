import { Layout } from "@/components/layout/Layout";
import { Handshake, Users, Target, Heart, Zap, Shield, Link } from "lucide-react";

const values = [
  {
    icon: Handshake,
    title: "Humildade",
    description: "A Way Gaming promove a humildade como princípio fundamental de crescimento contínuo. Reconhecemos que a evolução individual e coletiva depende da capacidade de aprender, aceitar feedback e respeitar todos os intervenientes do ecossistema competitivo.",
  },
  {
    icon: Users,
    title: "Responsabilidade",
    description: "Cada membro da Way Gaming assume plena responsabilidade pelas suas ações, decisões e compromissos. Atuamos com profissionalismo, disciplina e respeito, representando a organização com seriedade dentro e fora da competição.",
  },
  {
    icon: Target,
    title: "Lealdade",
    description: "A lealdade é um valor central na Way Gaming. Mantemos um compromisso sólido com a organização, os colegas e os parceiros, preservando a confiança, o respeito mútuo e a integridade em todas as circunstâncias. Lealdade e um facto chave para a fundacao dos nossos projectos. E neste principio que conseguimos crescer no ritmo que temos tido.",
  },
  {
    icon: Heart,
    title: "Amizade",
    description: "A Way Gaming valoriza relações fora do contexto de trabalho e competicao entre os jogadores e staff. A amizade fortalece o ambiente interno, promove o bem-estar dos seus membros e contribui para um desempenho sustentável e positivo quando desempenhadas as tarefas de contexto profissional",
  },
  {
    icon: Zap,
    title: "Determinação",
    description: "A determinação orienta a nossa atuação competitiva. Enfrentamos desafios com foco, resiliência e ambição, procurando a melhoria constante e a superação de obstáculos na busca pelos nossos objetivos. Alienada com a Forca de Vontade, ter determinacao e um facor igualmente vital para superar obstaculos externos e internos.",
  },
  {
    icon: Shield,
    title: "União",
    description: "A união reflete a força coletiva da Way Gaming. Acreditamos no trabalho em equipa, na comunicação eficaz e na colaboração contínua como pilares essenciais para alcançar resultados consistentes e duradouros. A Way Gaming cresce acima de tudo baseada no seu slogan, Somos Uma Voz, Não um Eco. Significando assim, que agimos em unissuno, todos juntos como uma so pessoa.",
  },
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
              SOBRE A <span className="gradient-text">WAY GAMING</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground">
              A Way Gaming é uma organização de esports focada no desenvolvimento competitivo, profissionalismo e crescimento sustentável. Com equipas estruturadas, staff dedicado e centros de treino próprios, a organização atua em títulos como League of Legends e Valorant, promovendo talento, disciplina e evolução contínua. A Way Gaming representa mais do que competição, é um caminho para quem quer levar o seu potencial ao próximo nível.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">
                A NOSSA <span className="text-primary">HISTÓRIA</span>
              </h2>
              <div className="space-y-4 font-body text-muted-foreground text-lg
                columns-1 md:columns-2 lg:columns-3
                gap-12">
                <p>
                  A Way Gaming teve início em novembro de 2024, num pequeno servidor de Discord chamado The Way Talk. Impulsionados pela existência da empresa The Way Talk (uma plataforma digital de comunicação sediada no Reino Unido), Emanuel Ferreira (Manager) e Guilherme Azevedo (Jogador) decidiram levar a sua experiência casual no gaming para um nível superior.
                </p>
                <p>“E se formássemos uma equipa?”</p>
                <p>
                  Algumas semanas depois, teve início o processo de recrutamento, e rapidamente vários candidatos se juntaram ao projeto. Com determinação e disciplina, começaram sessões de treino diárias.
                </p>
                <p>
                  À medida que surgiam desafios e obstáculos ao longo do percurso, fevereiro de 2025 marcou um ponto de viragem para a Way Gaming com o surgimento de uma ideia inovadora:
a criação de um centro de treino dedicado a jogadores de League of Legends.
                </p>
                <p>Esta iniciativa redefiniu por completo o nível de compromisso do grupo. A Academy Way Gaming (nome atribuído ao centro de treino) captou rapidamente a atenção da comunidade de League of Legends, que cedo percebeu que já não se tratava apenas de um grupo de amigos a jogar por diversão, mas de uma organização com objetivos claros de crescimento, profissionalismo e dedicação, destacando-se das restantes equipas existentes.</p>
                <p>O projeto ganhou impulso, atraindo cada vez mais jogadores interessados. Em apenas duas semanas de tryouts, concebidos para avaliar os participantes a nível técnico, emocional e psicológico — a criação de três equipas oficiais de League of Legends tornou-se uma realidade.</p>
                <p>As sessões de treino passaram a ser estruturadas e organizadas, com o apoio de uma equipa dedicada, capitães e Coachs para cada equipa.</p>
                <p>Em Setembro de 2025 a Way Gaming da outro passo gigante na sua estrutura. A expansao para o Valorant.
Com a colaboração e promoção de Tomas Lameirinha (Ex- Capitão de equipa League Of Legends) para Manager e líder  integral do projeto Academy Valorant, a Way Gaming recebe mais de duas dezenas de jogadores e membros staff com interesse em mostrar o seu potencial.</p>
              <p>Atualmente, a Way Gaming continua a crescer, e o resto da história…
será testemunhado por ti.</p>
              </div>
            </div>
            
            {/* Timeline */}
            {/* <div className="relative">
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
            </div> */}
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
