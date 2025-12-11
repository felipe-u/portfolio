import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../public/locales/en/translation.json'
import es from '../public/locales/es/translation.json'

i18next.use(initReactI18next).init({
  fallbackLng: 'es',
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  },
})
