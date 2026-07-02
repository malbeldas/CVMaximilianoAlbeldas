'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Summary() {
  const { t } = useLanguage()

  return (
    <section id="summary" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">{t.summary.heading}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Summary text */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass rounded-2xl p-7 h-full">
              <p className="text-slate-300 leading-relaxed text-base">{t.summary.text}</p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.summary.highlights.map((item, i) => (
              <div
                key={i}
                className="glass rounded-xl px-5 py-4 flex items-start gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <p className="text-sm text-slate-300 leading-snug">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
