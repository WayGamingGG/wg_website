import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'pt', flag: '🇵🇹', label: 'PT' },
  { code: 'en', flag: '🇬🇧', label: 'EN' },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const current = languages.find(l => l.code === currentLang) ?? languages[0];

  const setLang = useCallback((code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('wg-lang', code);
  }, [i18n]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary border border-border/60 rounded-lg text-xs font-bold font-body uppercase tracking-wider text-foreground hover:bg-secondary/80 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={currentLang === 'pt'
          ? `Idioma atual: ${current.label}. Clica para alterar.`
          : `Current language: ${current.label}. Click to change.`}
      >
        <span className="text-sm leading-none">{current.flag}</span>
        {current.label}
        <ChevronDown className="w-3 h-3 text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[110px]">
        {languages.map(({ code, flag, label }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLang(code)}
            className={cn(
              "flex items-center gap-2 cursor-pointer",
              currentLang === code && "text-primary"
            )}
          >
            <span className="text-sm leading-none">{flag}</span>
            <span className="font-body font-bold text-xs uppercase tracking-wider flex-1">{label}</span>
            {currentLang === code && <Check className="w-3 h-3 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
