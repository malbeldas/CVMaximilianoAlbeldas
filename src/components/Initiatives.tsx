'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const GROUP_ACCENT: Record<string, { dot: string; badge: string }> = {
  iOS: { dot: 'bg-slate-300', badge: 'border-slate-500/20 text-slate-300' },
  Web: { dot: 'bg-cyan-400', badge: 'border-cyan-500/20 text-cyan-300' },
  Android: { dot: 'bg-green-400', badge: 'border-green-500/20 text-green-300' },
}

const DEFAULT_ACCENT = { dot: 'bg-violet-400', badge: 'border-violet-500/20 text-violet-300' }

export default function Initiatives() {
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
          <h2 className="section-heading">{t.initiatives.heading}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {t.initiatives.groups.map((group, i) => {
            const accent = GROUP_ACCENT[group.name] ?? DEFAULT_ACCENT
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className={`w-2 h-2 rounded-full ${accent.dot}`} />
                  <h3 className="text-sm font-bold text-white">{group.name}</h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <span className={`text-[10px] border rounded px-1.5 py-0.5 mt-0.5 shrink-0 ${accent.badge}`}>
                        →
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
