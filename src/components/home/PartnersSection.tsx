import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export {};

declare global {
  interface Window {
    igBannerConfig: any;
  }
}

export const PartnersSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.igBannerConfig = {
      lang: 'en',
      igr: 'WayGaming',
      banners: ['my-banner']
    };

    if (!document.querySelector('#ig-partner-script')) {
      const script = document.createElement('script');
      script.src = "https://www.instant-gaming.com/api/banner/partner/loader.js";
      script.defer = true;
      script.id = "ig-partner-script";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 border-y border-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          {t('partners.title').split(' ').slice(0, -1).join(' ')}{' '}
          <span className="text-primary">{t('partners.title').split(' ').slice(-1)}</span>
        </h2>
        <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          {t('partners.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          <div className="w-64 h-30 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="my-banner w-full h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
