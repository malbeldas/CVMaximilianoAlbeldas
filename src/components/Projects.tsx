'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const TAG_COLORS: Record<string, string> = {
  'React Native': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Android: 'bg-green-500/10 text-green-400 border-green-500/20',
  iOS: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
  Multinacional: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  Multinational: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Next.js': 'bg-slate-500/10 text-slate-300 border-slate-500/20',
  Vue: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  React: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Angular: 'bg-red-500/10 text-red-400 border-red-500/20',
  Ionic: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  NestJS: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  Mobile: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  Frontend: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  Arquitectura: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Architecture: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  AI: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Process Design': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Metodología: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  Methodology: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  Documentación: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  Documentation: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
}

function Tag({ label }: { label: string }) {
  const cls = TAG_COLORS[label] ?? 'bg-slate-500/10 text-slate-400 border-slate-500/20'
  return (
    <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${cls}`}>
      {label}
    </span>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const regular = t.projects.items.filter((p) => !p.featured)
  const featured = t.projects.items.find((p) => p.featured)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">{t.projects.heading}</h2>
        </motion.div>

        {/* Regular projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {regular.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-white/15 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-white">{project.name}</h3>
                  {project.client && (
                    <span className="text-xs text-slate-500 shrink-0">· {project.client}</span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{project.subtitle}</p>
                <p className="text-xs text-indigo-400 font-medium mt-1">{project.role}</p>
              </div>

              <ul className="space-y-2 flex-1">
                {project.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                    <div className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured project — full width */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="relative gradient-border-card overflow-hidden"
          >
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-indigo-600/5 to-cyan-600/5 rounded-2xl pointer-events-none" />

            <div className="glass rounded-2xl p-7 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-white">{featured.name}</h3>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/20 uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{featured.subtitle}</p>
                    <p className="text-xs text-indigo-400 font-medium mt-1">{featured.role}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {featured.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>

                <ul className="space-y-3">
                  {featured.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
