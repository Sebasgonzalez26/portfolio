import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Lock } from 'lucide-react'
import { GithubIcon } from './icons/SocialIcons'
import { useLanguage } from '../i18n/useLanguage'
import { projectPreviews } from './projectPreviewMap'
import { stackIcons } from './stackIcons'
import Reveal from './Reveal'

type Tab = 'projects' | 'certificates' | 'stack'

export default function Portfolio() {
  const { t } = useLanguage()
  const [tab, setTab] = useState<Tab>('projects')

  const tabs: { key: Tab; label: string }[] = [
    { key: 'projects', label: t.projects.tabs.projects },
    { key: 'certificates', label: t.projects.tabs.certificates },
    { key: 'stack', label: t.projects.tabs.stack },
  ]

  return (
    <section id="work" className="relative py-24 px-6 bg-paper overflow-hidden">
      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, transparent 25%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              {t.projects.heading}
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal>
          <div
            role="tablist"
            aria-label={t.projects.heading}
            className="flex flex-col sm:flex-row sm:inline-flex mx-auto sm:w-auto w-full gap-1 p-1.5 mb-12 rounded-2xl sm:rounded-full border border-white/12 bg-white/[0.03] sm:mx-auto"
            style={{ marginInline: 'auto' }}
          >
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={`relative px-8 py-3 rounded-xl sm:rounded-full text-sm transition-colors ${
                  tab === key ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
              >
                {tab === key && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-xl sm:rounded-full bg-white/10 border border-white/15"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Keyed rather than wrapped in AnimatePresence: swapping the key
            unmounts the old panel immediately, so the new one never waits on
            an exit animation to finish before it appears. */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
            {tab === 'projects' && (
              <div className="grid md:grid-cols-2 gap-6">
                {t.projects.items.map((project) => {
                  const Preview = projectPreviews[project.id]
                  return (
                    <article
                      key={project.id}
                      className="group flex flex-col border border-white/12 rounded-2xl p-4 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 mb-5">
                        {Preview && <Preview />}
                      </div>

                      <h3 className="font-display text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] uppercase tracking-[0.12em] border border-white/12 text-white/55 rounded-full px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between gap-3 mt-auto pt-1">
                        {project.repoUrl ? (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors"
                          >
                            <GithubIcon size={14} />
                            {t.projects.codeLabel}
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-white/30 text-xs">
                            <Lock size={13} />
                            {t.projects.noLinkLabel}
                          </span>
                        )}

                        <Link
                          to={`/proyecto/${project.id}`}
                          className="inline-flex items-center gap-1.5 bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
                        >
                          {t.projects.detailsLabel}
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>
            )}

            {tab === 'certificates' && (
              <div className="grid sm:grid-cols-2 gap-4">
                {t.education.certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="group flex items-center justify-between gap-4 border border-white/12 rounded-xl px-5 py-5 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-lg border border-white/12 shrink-0">
                        <Award size={15} className="text-white/70" />
                      </span>
                      <p className="text-white text-sm font-medium">{cert.title}</p>
                    </div>
                    <span className="font-mono text-xs text-white/40 shrink-0">{cert.year}</span>
                  </div>
                ))}
              </div>
            )}

            {tab === 'stack' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {t.projects.stack.map((item) => {
                  const brand = stackIcons[item.name]
                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="group flex flex-col items-center justify-center text-center gap-3 aspect-square border border-white/12 rounded-2xl p-4 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06] transition-colors"
                    >
                      {brand && (
                        <brand.Icon
                          size={40}
                          style={{ color: brand.color }}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      )}
                      <div>
                        <p className="text-white text-xs sm:text-sm font-medium leading-tight">
                          {item.name}
                        </p>
                        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/35 mt-1">
                          {item.category}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            )}
        </motion.div>
      </div>
    </section>
  )
}
