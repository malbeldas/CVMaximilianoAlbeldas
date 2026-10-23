'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const DOT_COLORS = ['bg-cyan-400', 'bg-violet-400', 'bg-indigo-400']

export default function Approach() {
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
          <h2 className="section-heading">{t.approach.heading}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.approach.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2 h-2 rounded-full ${DOT_COLORS[i % DOT_COLORS.length]}`} />
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
