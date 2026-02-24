import { Layout } from "@/components/layout/Layout";
import { StaffCard, StaffMember } from "@/components/teams/StaffCard";
import { Users, Briefcase, Target, Brain } from "lucide-react";

const managementStaff: StaffMember[] = [
  {
    id: "1",
    name: "Sparta",
    role: "CEO & Fundador",
    description: "Presidente e fundador da WayGaming.",
  },
  {
    id: "2",
    name: "Luana",
    role: "Staff Senior WG",
    description: "Responsável pela coordenação e supervisão das operações globais da organização.",
  },{
    id: "3",
    name: "Portuga",
    role: "Staff League of legends",
    description: "Responsável pelas operações diárias da organização.",
  },{
    id: "4",
    name: "BoKa",
    role: "Software Develop",
    description: "Responsável pelo desenvolvimento e manutenção das soluções tecnológicas da organização.",
  },{
    id: "5",
    name: "Zerphys",
    role: "Tecnico Imagem & video",
    description: "Responsável pela direção criativa e produção de conteúdos audiovisuais da organização.",
  },
  {
    id: "6",
    name: "JLnovo",
    role: "Staff Colosseum",
    description: "Responsável pela gestão da WG Colosseum.",
  }
];

const lolStaff: StaffMember[] = [
  {
    id: "1",
    name: "Rumival",
    role: "Manager Academy League of legends",
    description: "Gestão geral das equipas academy de league of legends.",
  },{
    id: "2",
    name: "Alex",
    role: "Manager Equipa WG League of legends",
    description: "Gestão geral da equipa principal de league of legends.",
  }
];

const valorantStaff: StaffMember[] = [
   {
    id: "1",
    name: "Phantom",
    role: "Manager Valorant",
    description: "Responsável pelas operações diárias da organização e gestão geral das equipas de valorant.",
  },
  {
    id: "2",
    name: "Nixie",
    role: "Staff Valorant Feminino",
    description: "Responsável pelas operações diárias das equipas de valorant.",
  },
  {
    id: "3",
    name: "Marta",
    role: "Staff Valorant",
    description: "Responsável pelas operações diárias das equipas de valorant.",
  }
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
      <section className="py-20 bg-card">
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
      </section>

      {/* Valorant Staff Section */}
      <section className="py-20">
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
      </section>
    </Layout>
  );
};

export default Staff;
