import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import eng from './locales/eng/eng.json'
import ru from './locales/ru/ru.json'
import de from './locales/de/de.json'
import hu from './locales/hu/hu.json'

const STORAGE_KEY = 'trinity-lang'
const savedLang = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null

i18n.use(initReactI18next).init({
  resources: {
    eng: { translation: eng },
    ru: { translation: ru },
    de: { translation: de },
    hu: { translation: hu },
  },
  lng: savedLang || 'eng',
  fallbackLng: 'eng',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lng)
  }
})

export default i18n
