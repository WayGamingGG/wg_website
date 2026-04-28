import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Camera, Briefcase, Target, BarChart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO_LOGO, SEO_SITE_NAME, SEO_TWITTER } from "@/lib/seo";

const positionIcons = [Target, BarChart, Camera, Users];

const GOOGLE_FORM_URL = "https://discord.com/users/1284567243379966036";

const Careers = () => {
  const { t } = useTranslation();

  const positions = (
    t('careers.positions', { returnObjects: true }) as Array<{
      title: string;
      department: string;
      description: string;
      requirements: string[];
    }>
  ).map((p, i) => ({ ...p, icon: positionIcons[i] }));

  return (
    <Layout>
      <Helmet>
        <title>Carreiras — WayGaming Esports</title>
        <meta name="description" content="Junta-te à WayGaming. Descobre as vagas disponíveis e faz parte da nossa organização de esports." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SEO_SITE_NAME} />
        <meta property="og:title" content="Carreiras — WayGaming Esports" />
        <meta property="og:description" content="Junta-te à WayGaming. Descobre as vagas disponíveis e faz parte da nossa organização de esports." />
        <meta property="og:image" content={SEO_LOGO} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO_TWITTER} />
        <meta name="twitter:title" content="Carreiras — WayGaming Esports" />
        <meta name="twitter:image" content={SEO_LOGO} />
      </Helmet>

      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <Briefcase className="w-4 h-4 mr-2" />
              {t('careers.badge')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              {t('careers.title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary text-glow">{t('careers.title').split(' ').slice(-1)}</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              {t('careers.subtitle')}
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
                  <p className="text-sm text-muted-foreground font-body">{position.description}</p>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">{t('careers.requirements')}</p>
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
                    {t('careers.apply')}
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
            {t('careers.noVacancyTitle').split(' ').slice(0, -2).join(' ')}{' '}
            <span className="text-primary">
              {t('careers.noVacancyTitle').split(' ').slice(-2).join(' ')}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-body">
            {t('careers.noVacancyDescription')}
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
          >
            {t('careers.spontaneousApplication')}
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
