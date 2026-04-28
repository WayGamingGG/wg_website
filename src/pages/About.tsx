import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Handshake, Users, Target, Heart, Zap, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO_LOGO, SEO_SITE_NAME, SEO_TWITTER } from "@/lib/seo";

const valueIcons = [Handshake, Users, Target, Heart, Zap, Shield];

const About = () => {
  const { t } = useTranslation();

  const values = (t('about.values', { returnObjects: true }) as Array<{ title: string; description: string }>).map(
    (v, i) => ({ ...v, icon: valueIcons[i] })
  );
  const history = t('about.history', { returnObjects: true }) as string[];

  return (
    <Layout>
      <Helmet>
        <title>Sobre Nós — WayGaming Esports</title>
        <meta name="description" content="Conhece a história, os valores e a missão da WayGaming. Uma organização de esports focada em talento, disciplina e excelência competitiva." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SEO_SITE_NAME} />
        <meta property="og:title" content="Sobre Nós — WayGaming Esports" />
        <meta property="og:description" content="Conhece a história, os valores e a missão da WayGaming. Uma organização de esports focada em talento, disciplina e excelência competitiva." />
        <meta property="og:image" content={SEO_LOGO} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO_TWITTER} />
        <meta name="twitter:title" content="Sobre Nós — WayGaming Esports" />
        <meta name="twitter:image" content={SEO_LOGO} />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl font-black mb-6">
              {t('about.heroTitle').split(' ').slice(0, -2).join(' ')}{' '}
              <span className="gradient-text">
                {t('about.heroTitle').split(' ').slice(-2).join(' ')}
              </span>
            </h1>
            <p className="font-body text-xl text-muted-foreground">
              {t('about.heroDescription')}
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
                {t('about.historyTitle').split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-primary">{t('about.historyTitle').split(' ').slice(-1)}</span>
              </h2>
              <div className="space-y-4 font-body text-muted-foreground text-lg columns-1 md:columns-2 lg:columns-3 gap-12">
                {history.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('about.valuesTitle').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary">{t('about.valuesTitle').split(' ').slice(-1)}</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.valuesSubtitle')}
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
                <h3 className="font-display text-2xl font-bold mb-3">{value.title}</h3>
                <p className="font-body text-muted-foreground">{value.description}</p>
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
              {t('about.ctaTitle').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary">{t('about.ctaTitle').split(' ').slice(-1)}</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-8">
              {t('about.ctaDescription')}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
