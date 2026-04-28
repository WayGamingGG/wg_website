import { Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

const newsImages = ["/valorant.jpg", "/lplol.jpg", undefined];
const newsCategories = ["Valorant", "League of Legends", "Valorant"];

export const NewsSection = () => {
  const { t } = useTranslation();
  const newsItems = t('news.items', { returnObjects: true }) as Array<{
    title: string;
    excerpt: string;
    date: string;
  }>;

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t('news.title').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-primary">{t('news.title').split(' ').slice(-1)}</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="group bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-video relative overflow-hidden">
                {newsImages[index] && (
                  <img
                    src={newsImages[index]}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold uppercase tracking-wider rounded">
                  {newsCategories[index]}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-body text-sm">{item.date}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
