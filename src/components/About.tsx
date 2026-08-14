import { ArrowUpRight, Award, Code2, FileText, Globe, GraduationCap } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'
import Reveal from './Reveal'

const stats = [
  { icon: Code2, value: '1', label: 'Proyecto en producción' },
  { icon: Award, value: '4', label: 'Certificaciones' },
  { icon: Globe, value: 'C1', label: 'Inglés certificado' },
]

/** Concentric-ring frame standing in for a portrait. */
function Monogram() {
  return (
    <div className="relative aspect-square w-full max-w-[340px] mx-auto">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[6%] rounded-full border border-white/15" />
      <div className="absolute inset-[12%] rounded-full border border-dashed border-white/10" />
      <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-white/[0.09] to-white/[0.02] border border-white/10 flex items-center justify-center overflow-hidden">
        <span className="font-display text-6xl font-bold tracking-tight text-white/90">SGR</span>
      </div>
      <span className="absolute top-[14%] right-[10%] w-2 h-2 rounded-full bg-white/40" />
      <span className="absolute bottom-[18%] left-[8%] w-1.5 h-1.5 rounded-full bg-white/25" />
    </div>
  )
}

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="currently" className="relative py-24 px-6 bg-paper-soft overflow-hidden">
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
          background:
            'radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-white/45 mb-8">
            Sobre mí
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.92] tracking-tight text-white mb-7">
              Sebastián
              <br />
              González
              <br />
              Rojas
            </h2>

            <p className="text-white/55 text-base leading-relaxed max-w-lg mb-7">
              {t.currently.paragraph}{' '}
              <a
                href="https://www.davisbakery.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors"
              >
                {t.currently.linkText}
              </a>
              {t.currently.paragraphEnd}
            </p>

            <blockquote className="border border-white/12 rounded-lg px-5 py-3.5 inline-block mb-8 bg-white/[0.02]">
              <p className="italic text-white/65 text-sm">
                «Construyo software real que resuelve problemas reales.»
              </p>
            </blockquote>

            <div className="flex flex-wrap gap-3">
              <a
                href="/CV_SebastianGonzalez.pdf"
                download
                className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-5 py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                <FileText size={16} />
                Descargar CV
              </a>
              <button
                onClick={() =>
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-5 py-3 rounded-lg hover:border-white/50 hover:bg-white/[0.04] transition-colors"
              >
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                Ver proyectos
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Monogram />
          </Reveal>
        </div>

        {/* Stat cards */}
        <div className="grid sm:grid-cols-3 gap-4 mt-16">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="group h-full border border-white/12 rounded-xl p-5 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04] transition-colors">
                <div className="flex items-start justify-between mb-10">
                  <span className="p-2 rounded-lg border border-white/12">
                    <Icon size={15} className="text-white/70" />
                  </span>
                  <span className="font-display text-lg font-semibold text-white">{value}</span>
                </div>
                <div className="flex items-end justify-between gap-3">
                  <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/55">
                    {label}
                  </p>
                  <ArrowUpRight
                    size={15}
                    className="text-white/25 group-hover:text-white/60 transition-colors shrink-0"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education — certifications and stack live in the projects tabs */}
        <Reveal>
          <div className="mt-24">
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-white/45 mb-6">
              {t.education.eyebrow}
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-white mb-8">
              {t.education.heading}
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {t.education.items.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 border border-white/12 rounded-xl p-5 bg-white/[0.02]"
                >
                  <div className="p-2 rounded-lg border border-white/12 h-fit shrink-0">
                    <GraduationCap size={16} className="text-white/70" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="font-mono text-xs text-white/40 mb-1">{item.period}</p>
                    <p className="text-white/55 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
