import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Star, Users, Zap, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO_LOGO, SEO_SITE_NAME, SEO_TWITTER } from "@/lib/seo";

const PATREON_URL = "https://www.patreon.com/14500946/join";

const perkIcons = [Star, Zap, Users, Heart];

const Donations = () => {
  const { t } = useTranslation();
  const perks = t('donations.perks', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <Layout>
      <Helmet>
        <title>Apoiar — WayGaming Esports</title>
        <meta name="description" content="Apoia a WayGaming no Patreon e ajuda-nos a crescer, competir ao mais alto nível e construir uma comunidade cada vez mais forte." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SEO_SITE_NAME} />
        <meta property="og:title" content="Apoiar — WayGaming Esports" />
        <meta property="og:description" content="Apoia a WayGaming no Patreon e ajuda-nos a crescer, competir ao mais alto nível e construir uma comunidade cada vez mais forte." />
        <meta property="og:image" content={SEO_LOGO} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO_TWITTER} />
        <meta name="twitter:title" content="Apoiar — WayGaming Esports" />
        <meta name="twitter:image" content={SEO_LOGO} />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Heart className="w-5 h-5 text-primary" />
              <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
                {t('donations.badge')}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black mb-6">
              {t('donations.title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="gradient-text">{t('donations.title').split(' ').slice(-1)}</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-10">
              {t('donations.subtitle')}
            </p>
            <Button
              size="xl"
              className="gap-3"
              onClick={() => window.open(PATREON_URL, '_blank')}
            >
              <Heart className="w-5 h-5" />
              {t('donations.ctaButton')}
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('donations.perksTitle').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary">{t('donations.perksTitle').split(' ').slice(-1)}</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {perks.map((perk, index) => {
              const Icon = perkIcons[index];
              return (
                <div
                  key={index}
                  className="group p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{perk.title}</h3>
                  <p className="font-body text-muted-foreground text-sm">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t('donations.closingTitle').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary">{t('donations.closingTitle').split(' ').slice(-1)}</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-10">
              {t('donations.closingText')}
            </p>
            <Button
              size="xl"
              variant="outline"
              className="gap-3 border-primary/50 hover:bg-primary/10"
              onClick={() => window.open(PATREON_URL, '_blank')}
            >
              <Heart className="w-5 h-5 text-primary" />
              {t('donations.ctaButton')}
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donations;
