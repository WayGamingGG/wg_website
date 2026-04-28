import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import pt from './locales/pt';

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('wg-lang') : null;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    lng: savedLang || 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
