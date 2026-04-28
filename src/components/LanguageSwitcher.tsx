import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
    localStorage.setItem('wg-lang', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-xs font-bold font-body uppercase tracking-widest border border-primary/40 rounded-md text-primary hover:bg-primary/10 transition-colors duration-200"
      aria-label="Toggle language"
    >
      {i18n.language === 'pt' ? 'EN' : 'PT'}
    </button>
  );
};
