import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Award, Lock } from 'lucide-react'
import { GithubIcon } from './icons/SocialIcons'
import { useLanguage } from '../i18n/useLanguage'
import Reveal from './Reveal'

type Tab = 'projects' | 'certificates' | 'stack'

/** Recreation of the real davisbakery.store login screen. */
function BakeryPreview() {
  return (
    <div className="absolute inset-0 flex bg-[#1a0f09]">
      <div className="flex-1 p-4 flex flex-col justify-between text-white">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center font-display text-[9px]">
            D
          </div>
          <span className="font-display text-[10px]">Davi&apos;s Bakery</span>
        </div>
        <div>
          <p className="font-display text-base font-bold mb-1.5 leading-tight">Welcome back.</p>
          <div className="flex flex-wrap gap-1">
            {['Pedidos', 'Inventario', 'Finanzas'].map((tag) => (
              <span key={tag} className="text-[8px] bg-white/10 rounded-full px-1.5 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Panel keeps the cream background of the real screen, so its ink stays dark. */}
      <div className="flex-1 bg-[#FAF7F2] p-4 hidden sm:flex flex-col justify-center gap-2">
        <p className="font-display text-[9px] font-semibold text-[#1a0f09]">Iniciá sesión</p>
        <div className="h-5 rounded bg-white border border-black/10" />
        <div className="h-5 rounded bg-white border border-black/10" />
        <div className="h-5 rounded bg-[#1a0f09]" />
      </div>
    </div>
  )
}

/** Miniature of this site's own hero. */
function PortfolioPreview() {
  return (
    <div className="absolute inset-0 bg-black flex flex-col items-center justify-center gap-1.5">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(120% 90% at 30% 70%, rgba(76,82,162,0.6) 0%, rgba(28,40,87,0.35) 40%, rgba(0,0,0,0) 75%)',
        }}
      />
      <p className="relative font-mono text-[6px] tracking-[0.25em] uppercase text-white/60">
        Sebastián González Rojas
      </p>
      <p className="relative font-instrument-sans text-xl font-semibold leading-none text-white">
        Sebastián
      </p>
      <p className="relative font-instrument-sans text-xl font-semibold leading-none text-[#8fd4f5]">
        González Rojas
      </p>
    </div>
  )
}

const previews: Record<string, () => React.JSX.Element> = {
  bakery: BakeryPreview,
  portfolio: PortfolioPreview,
}

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
                  const Preview = previews[project.id]
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

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
                          >
                            {t.projects.liveLabel}
                            <ArrowUpRight size={14} />
                          </a>
                        )}
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {t.projects.stack.map((item) => (
                  <div
                    key={item.name}
                    className="border border-white/12 rounded-xl px-4 py-4 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04] transition-colors"
                  >
                    <p className="text-white text-sm font-medium mb-1">{item.name}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
                      {item.category}
                    </p>
                  </div>
                ))}
              </div>
            )}
        </motion.div>
      </div>
    </section>
  )
}
