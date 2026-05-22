import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string | null;
  date: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const REFRESH_INTERVAL = 60_000;

export const NewsSection = () => {
  const { t, i18n } = useTranslation();
  const [liveNews, setLiveNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const res = await fetch(`${API_URL}/news`);
      if (!res.ok) throw new Error('fetch failed');
      const data: NewsItem[] = await res.json();
      setLiveNews(data);
    } catch {
      // keep existing state on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(i18n.language === 'pt' ? 'pt-PT' : 'en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

  const staticItems = t('news.items', { returnObjects: true }) as Array<{
    title: string;
    excerpt: string;
    date: string;
  }>;
  const staticImages = ["/valorant.jpg", "/lplol.jpg", undefined];

  const showLive = !loading && liveNews.length > 0;

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
          {showLive
            ? liveNews.map((item) => (
                <article
                  key={item.id}
                  className="group bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden bg-secondary">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="font-body text-sm">{formatDate(item.date)}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground">{item.content}</p>
                  </div>
                </article>
              ))
            : staticItems.map((item, index) => (
                <article
                  key={index}
                  className="group bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    {staticImages[index] && (
                      <img
                        src={staticImages[index]}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
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
