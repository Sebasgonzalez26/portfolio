import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Code2, Layers, Sparkles } from 'lucide-react'
import { GithubIcon } from './icons/SocialIcons'
import { useLanguage } from '../i18n/useLanguage'
import { projectPreviews } from './projectPreviewMap'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  const project = t.projects.items.find((p) => p.id === projectId)

  if (!project) {
    return (
      <section className="min-h-screen bg-paper flex flex-col items-center justify-center gap-6 px-6">
        <p className="text-white/60">{t.projects.notFound}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-white/20 text-white text-sm px-5 py-3 rounded-lg hover:border-white/50 transition-colors"
        >
          <ArrowLeft size={16} />
          {t.projects.backLabel}
        </Link>
      </section>
    )
  }

  const Preview = projectPreviews[project.id]

  const stats = [
    { icon: Code2, value: project.technologies.length, label: t.projects.technologiesStat },
    { icon: Layers, value: project.keyFeatures.length, label: t.projects.keyFeaturesStat },
  ]

  return (
    <section className="relative min-h-screen bg-paper pt-32 pb-24 px-6 overflow-hidden">
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
          background: 'radial-gradient(ellipse at 50% 20%, transparent 25%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-6xl mx-auto"
      >
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors"
        >
          <ArrowLeft size={16} />
          {t.projects.backLabel}
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
              {project.title}
            </h1>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/45 mb-8">
              {project.subtitle}
            </p>

            <p className="text-white/55 text-base leading-relaxed mb-10">{project.context}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="border border-white/12 rounded-xl px-5 py-4 bg-white/[0.02]"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg border border-white/12 shrink-0">
                      <Icon size={15} className="text-white/70" />
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-white leading-none mb-1">
                        {value}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">
                        {label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mb-10">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-5 py-3 rounded-lg hover:bg-white/90 transition-colors"
                >
                  <ArrowUpRight size={16} />
                  {t.projects.liveLabel}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 border border-white/10 text-white/30 text-sm px-5 py-3 rounded-lg">
                  <ArrowUpRight size={16} />
                  {t.projects.noLinkLabel}
                </span>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-5 py-3 rounded-lg hover:border-white/50 hover:bg-white/[0.04] transition-colors"
                >
                  <GithubIcon size={16} />
                  {t.projects.codeLabel}
                </a>
              )}
            </div>

            {/* Technologies */}
            <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-white/70 mb-4">
              <Code2 size={14} />
              {t.projects.technologiesLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs border border-white/12 text-white/70 rounded-lg px-3 py-2 bg-white/[0.02]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/12">
              {Preview && <Preview base={16} />}
            </div>

            <div className="border border-white/12 rounded-2xl p-6 bg-white/[0.02]">
              <p className="flex items-center gap-2 font-display text-lg font-semibold text-white mb-5">
                <Sparkles size={17} className="text-white/70" />
                {t.projects.keyFeaturesLabel}
              </p>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3 text-white/55 text-sm leading-relaxed">
                    <span className="mt-[0.5em] w-1 h-1 rounded-full bg-white/40 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
