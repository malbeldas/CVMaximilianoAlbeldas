'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const { t, locale, toggleLocale } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#summary', label: t.nav.summary },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#stack', label: t.nav.stack },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-extrabold gradient-text tracking-tight">
          MA
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right: language toggle + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            aria-label={`Switch to ${locale === 'es' ? 'English' : 'Spanish'}`}
            className="glass rounded-full px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 hover:border-white/20 transition-all"
          >
            <span className={locale === 'es' ? 'text-cyan-400 font-semibold' : 'text-slate-500'}>
              ES
            </span>
            <span className="text-slate-700">|</span>
            <span className={locale === 'en' ? 'text-cyan-400 font-semibold' : 'text-slate-500'}>
              EN
            </span>
          </button>

          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <nav className="flex flex-col py-2">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
