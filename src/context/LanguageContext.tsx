'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { es } from '@/i18n/es'
import { en } from '@/i18n/en'
import type { Translations } from '@/i18n/es'

type Locale = 'es' | 'en'

interface LanguageContextType {
  locale: Locale
  t: Translations
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'es',
  t: es,
  toggleLocale: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es')

  useEffect(() => {
    const saved = localStorage.getItem('cv-locale') as Locale | null
    if (saved === 'es' || saved === 'en') setLocale(saved)
  }, [])

  const toggleLocale = () => {
    const next: Locale = locale === 'es' ? 'en' : 'es'
    setLocale(next)
    localStorage.setItem('cv-locale', next)
  }

  return (
    <LanguageContext.Provider value={{ locale, t: locale === 'es' ? es : en, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
