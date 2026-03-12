import { createI18n } from 'vue-i18n'

// Import locale messages
import es from './locales/es.json'
import en from './locales/en.json'
import fr from './locales/fr.json'

const messages = {
  es,
  en,
  fr,
}

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'es', // Default language - Spanish
  fallbackLocale: 'es', // Fallback to Spanish
  messages,
  globalInjection: true, // Make $t available in templates
})

export default i18n
