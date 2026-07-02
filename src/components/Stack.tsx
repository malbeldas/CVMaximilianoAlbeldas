'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const CATEGORY_ACCENT: Record<string, string> = {
  Web: 'text-cyan-400',
  Mobile: 'text-violet-400',
  Herramientas: 'text-indigo-400',
  Tools: 'text-indigo-400',
}

export default function Stack() {
  const { t } = useLanguage()

  return (
    <section id="stack" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">{t.stack.heading}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {t.stack.categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className={`text-sm font-bold mb-4 ${CATEGORY_ACCENT[cat.name] ?? 'text-cyan-400'}`}>
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="glass rounded-lg px-3 py-1.5 text-xs text-slate-300 hover:text-white hover:border-white/15 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
