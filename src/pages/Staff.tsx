import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { StaffCard } from "@/components/teams/StaffCard";
import { Users, Briefcase, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO_LOGO, SEO_SITE_NAME, SEO_TWITTER } from "@/lib/seo";

const staffNames = {
  management: ["Sparta", "Luana", "Portuga", "BoKa", "Zerphys", "Senju"],
  lol: ["Rumival", "Pardal", "Arutnev", "Manuendo"],
  valorant: ["Conde", "Marta", "Zekku", "Cris"],
};

const Staff = () => {
  const { t } = useTranslation();

  const managementTranslated = t('staff.management', { returnObjects: true }) as Array<{ role: string; description: string }>;
  const lolTranslated = t('staff.lol', { returnObjects: true }) as Array<{ role: string; description: string }>;
  const valorantTranslated = t('staff.valorant', { returnObjects: true }) as Array<{ role: string; description: string }>;

  const managementStaff = staffNames.management.map((name, i) => ({
    id: String(i + 1),
    name,
    role: managementTranslated[i]?.role ?? "",
    description: managementTranslated[i]?.description ?? "",
  }));

  const lolStaff = staffNames.lol.map((name, i) => ({
    id: String(i + 1),
    name,
    role: lolTranslated[i]?.role ?? "",
    description: lolTranslated[i]?.description ?? "",
  }));

  const valorantStaff = staffNames.valorant.map((name, i) => ({
    id: String(i + 1),
    name,
    role: valorantTranslated[i]?.role ?? "",
    description: valorantTranslated[i]?.description ?? "",
  }));

  return (
    <Layout>
      <Helmet>
        <title>Staff — WayGaming Esports</title>
        <meta name="description" content="Conhece a equipa por trás da WayGaming. Os profissionais dedicados que trabalham para alcançar a excelência competitiva." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SEO_SITE_NAME} />
        <meta property="og:title" content="Staff — WayGaming Esports" />
        <meta property="og:description" content="Conhece a equipa por trás da WayGaming. Os profissionais dedicados que trabalham para alcançar a excelência competitiva." />
        <meta property="og:image" content={SEO_LOGO} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO_TWITTER} />
        <meta name="twitter:title" content="Staff — WayGaming Esports" />
        <meta name="twitter:image" content={SEO_LOGO} />
      </Helmet>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
                {t('staff.badge')}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              {t('staff.title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary text-glow">{t('staff.title').split(' ').slice(-1)}</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('staff.subtitle')}
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
              <h2 className="font-display text-3xl font-bold">{t('staff.managementTitle')}</h2>
              <p className="font-body text-muted-foreground">{t('staff.managementSubtitle')}</p>
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
              <h2 className="font-display text-3xl font-bold">{t('staff.lolTitle')}</h2>
              <p className="font-body text-muted-foreground">{t('staff.lolSubtitle')}</p>
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
              <h2 className="font-display text-3xl font-bold">{t('staff.valorantTitle')}</h2>
              <p className="font-body text-muted-foreground">{t('staff.valorantSubtitle')}</p>
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
