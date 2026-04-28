import { WGLayout } from "@/components/wg-colosseum/WGLayout";
import { Button } from "@/components/ui/button";
import { Heart, Star, Users, Zap, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const PATREON_URL = "https://www.patreon.com/14500946/join";

const perkIcons = [Star, Zap, Users, Heart];

const WGDonations = () => {
  const { t } = useTranslation();
  const perks = t('donations.perks', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <WGLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 wg-bg-grid opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full mb-6">
              <Heart className="w-5 h-5 text-violet-400" />
              <span className="font-body text-sm font-semibold text-violet-400 uppercase tracking-wider">
                {t('donations.badge')}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              {t('donations.title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="wg-text-gradient">{t('donations.title').split(' ').slice(-1)}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              {t('donations.subtitle')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold px-8 gap-3"
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {t('donations.perksTitle').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="wg-text-gradient">{t('donations.perksTitle').split(' ').slice(-1)}</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {perks.map((perk, index) => {
              const Icon = perkIcons[index];
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-violet-500/20 rounded-xl p-8 hover:border-violet-500/40 transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-violet-500/30 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-violet-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{perk.title}</h3>
                  <p className="text-gray-400 text-sm">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 border-t border-violet-500/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t('donations.closingTitle').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="wg-text-gradient">{t('donations.closingTitle').split(' ').slice(-1)}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              {t('donations.closingText')}
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-violet-500/50 text-violet-400 hover:bg-violet-500/10 gap-3 px-8"
              onClick={() => window.open(PATREON_URL, '_blank')}
            >
              <Heart className="w-5 h-5" />
              {t('donations.ctaButton')}
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </WGLayout>
  );
};

export default WGDonations;
