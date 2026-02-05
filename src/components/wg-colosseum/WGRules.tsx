import { WGLayout } from "@/components/wg-colosseum/WGLayout";
import { Book, Users, Calendar, Trophy, AlertTriangle, CheckCircle, XCircle, Clock } from "lucide-react";

const rules = [
  {
    icon: Users,
    title: "Elegibilidade",
    items: [
      "Todos os jogadores devem ter pelo menos 16 anos de idade",
      "Os jogadores devem ter nacionalidade portuguesa ou residência em Portugal",
      "Cada jogador só pode representar uma equipa por temporada",
      "As equipas devem ter um mínimo de 5 e máximo de 7 jogadores no roster",
    ],
  },
  {
    icon: Calendar,
    title: "Formato da Competição",
    items: [
      "A temporada regular consiste em 10 semanas de jogos",
      "Cada equipa joga contra todas as outras duas vezes (Bo3)",
      "Os 4 melhores classificados avançam para os Playoffs",
      "Os Playoffs são disputados em formato de eliminação dupla",
    ],
  },
  {
    icon: Clock,
    title: "Horários e Pontualidade",
    items: [
      "Os jogos começam às 19:00 e 20:30 de sexta e sábado",
      "As equipas devem estar no lobby 15 minutos antes do horário",
      "Atrasos superiores a 15 minutos resultam em forfeit do jogo",
      "Remarcações só são permitidas com 48 horas de antecedência",
    ],
  },
  {
    icon: Trophy,
    title: "Playoffs e Prémios",
    items: [
      "Grande Final é disputada em Bo5",
      "1º Lugar: €2.000 + Troféu de Campeão",
      "2º Lugar: €1.000",
      "3º Lugar: €500",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Condutas Proibidas",
    items: [
      "Uso de cheats, hacks ou software não autorizado",
      "Comportamento tóxico ou discriminatório",
      "Manipulação de resultados (match-fixing)",
      "Partilha de contas ou boosting",
    ],
  },
];

const penalties = [
  { offense: "Primeiro aviso", penalty: "Aviso oficial", icon: CheckCircle, color: "text-yellow-500" },
  { offense: "Segundo aviso", penalty: "Multa de 50€", icon: AlertTriangle, color: "text-orange-500" },
  { offense: "Terceiro aviso", penalty: "Suspensão de 1 jogo", icon: AlertTriangle, color: "text-red-400" },
  { offense: "Infrações graves", penalty: "Desqualificação", icon: XCircle, color: "text-red-600" },
];

const WGRules = () => {
  return (
    <WGLayout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 wg-bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] wg-gradient-radial opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-6">
              <Book className="w-4 h-4 inline mr-2" />
              REGULAMENTO OFICIAL
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              REGRAS DA <span className="wg-text-gradient">LIGA</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Regulamento oficial do WG Colosseum - Temporada 2024
            </p>
          </div>
        </div>
      </section>

      {/* Rules Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {rules.map((section, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-violet-500/20 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Penalties Table */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-violet-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white">Sistema de Penalidades</h2>
              </div>
              
              <div className="space-y-4">
                {penalties.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="text-gray-300">{item.offense}</span>
                    </div>
                    <span className={`font-semibold ${item.color}`}>{item.penalty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="text-center p-8 bg-gradient-to-br from-violet-900/30 to-blue-900/20 border border-violet-500/30 rounded-2xl">
              <h3 className="text-xl font-display font-bold text-white mb-2">Dúvidas sobre o Regulamento?</h3>
              <p className="text-gray-400 mb-4">Contacta a administração da liga</p>
              <a
                href="mailto:admin@wgcolosseum.pt"
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors"
              >
                Contactar Administração
              </a>
            </div>
          </div>
        </div>
      </section>
    </WGLayout>
  );
};

export default WGRules;
