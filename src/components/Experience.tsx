'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">{t.experience.heading}</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-8 pl-12 sm:pl-16">
            {t.experience.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 sm:-left-16 top-5 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full border-2 border-cyan-400 bg-[#070711]" />
                </div>

                <div className="glass rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">{item.role}</h3>
                      <p className="text-sm text-indigo-400 font-medium mt-0.5">{item.company}</p>
                    </div>
                    <span className="glass rounded-full px-3 py-1 text-xs text-slate-400 whitespace-nowrap self-start">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                        <div className="w-1 h-1 rounded-full bg-violet-400 mt-2.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
