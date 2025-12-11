import 'i18next'
import es from '../public/locales/es/translation.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof es
    }
  }
}
