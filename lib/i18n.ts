'use client'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '../public/locales/en/common.json'
import fr from '../public/locales/fr/common.json'

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        fr: { translation: fr },
      },
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      detection: {
        order: ['navigator', 'htmlTag'],
      },
    })
}

export default i18n
