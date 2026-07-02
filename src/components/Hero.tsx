'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const [photoError, setPhotoError] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/8 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left — 3 cols */}
          <div className="lg:col-span-3 space-y-7">
            {/* Greeting + name */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <p className="text-cyan-400 font-mono text-sm mb-2 tracking-wider">
                {t.hero.greeting}
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none gradient-text">
                {t.hero.name}
              </h1>
            </motion.div>

            {/* Title + subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            >
              <p className="text-xl sm:text-2xl text-slate-200 font-semibold">{t.hero.title}</p>
              <p className="text-sm text-slate-500 mt-1.5">{t.hero.subtitle}</p>
            </motion.div>

            {/* Contact links */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
            >
              <a
                href={`mailto:${t.hero.contact.email}`}
                className="glass rounded-full px-4 py-2 text-sm text-slate-300 hover:text-white hover:border-cyan-500/30 transition-all flex items-center gap-2"
              >
                <MailIcon />
                {t.hero.contact.email}
              </a>
              <a
                href={t.hero.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-full px-4 py-2 text-sm text-slate-300 hover:text-white hover:border-indigo-500/30 transition-all flex items-center gap-2"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href={`tel:${t.hero.contact.phone}`}
                className="glass rounded-full px-4 py-2 text-sm text-slate-300 hover:text-white hover:border-violet-500/30 transition-all flex items-center gap-2"
              >
                <PhoneIcon />
                {t.hero.contact.phone}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
            >
              {t.hero.stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl font-extrabold gradient-text">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1 leading-snug">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a
                href="#summary"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-indigo-500/20 text-sm"
              >
                {t.hero.cta}
                <ChevronDownIcon />
              </a>
            </motion.div>
          </div>

          {/* Right — photo, 2 cols */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-indigo-500/20 blur-2xl scale-110" />

              {/* Photo container */}
              <div className="relative glass-strong rounded-2xl overflow-hidden w-full h-full gradient-border-card">
                {!photoError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/photo.jpg"
                    alt="Maximiliano Albeldas"
                    className="w-full h-full object-cover object-top"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900/50 via-violet-900/30 to-slate-900/50 gap-2">
                    <span className="text-6xl font-extrabold gradient-text">MA</span>
                  </div>
                )}
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cyan-400/40 blur-[2px]" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-violet-400/40 blur-[2px]" />
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span className="text-[10px] text-slate-700 font-mono uppercase tracking-widest">scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDownIcon className="text-slate-700 w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function ChevronDownIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}
