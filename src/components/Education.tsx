'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Education() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">{t.education.heading}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="glass rounded-2xl p-6 flex items-center gap-5"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <GradCapIcon />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{t.education.institution}</p>
              <p className="text-slate-400 text-sm mt-0.5">{t.education.degree}</p>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-4">
              {t.education.languagesLabel}
            </p>
            <div className="flex flex-col gap-3">
              {t.education.languages.map((lang) => (
                <div key={lang.lang} className="flex items-center justify-between">
                  <span className="text-sm text-slate-300 font-medium">{lang.lang}</span>
                  <span className="glass rounded-full px-3 py-1 text-xs text-slate-400">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function GradCapIcon() {
  return (
    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>
  )
}
