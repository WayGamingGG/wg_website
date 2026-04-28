import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[128px]" />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-border">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/waylogo.png"
            alt="Way Gaming"
            className="w-10 h-10 drop-shadow-[0_0_8px_rgba(0,255,200,0.5)] group-hover:drop-shadow-[0_0_14px_rgba(0,255,200,0.8)] transition-all duration-300"
          />
          <span className="font-display text-xl font-bold text-foreground">
            WAY<span className="text-primary">GAMING</span>
          </span>
        </Link>
        <LanguageSwitcher />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 number */}
          <div className="relative mb-6">
            <span className="font-display text-[180px] md:text-[240px] font-black leading-none gradient-text opacity-20 select-none absolute inset-0 flex items-center justify-center">
              404
            </span>
            <span className="font-display text-[180px] md:text-[240px] font-black leading-none gradient-text select-none relative block">
              404
            </span>
          </div>

          {/* Message */}
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('notFound.title')}
          </h1>
          <p className="font-body text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            {t('notFound.description')}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                {t('notFound.goHome')}
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/wg">
                {t('notFound.goOrg')}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="relative z-10 text-center pb-8">
        <p className="font-body text-sm text-muted-foreground/50">
          {t('nav.footerCopyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
