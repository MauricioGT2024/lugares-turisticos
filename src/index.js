
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: 'Home',
      places: 'Places',
      about: 'About',
      // Agrega más traducciones según necesites
    }
  },
  es: {
    translation: {
      home: 'Inicio',
      places: 'Lugares',
      about: 'Acerca de',
      // Agrega más traducciones según necesites
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;