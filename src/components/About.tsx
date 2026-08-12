import { ArrowUpRight, GraduationCap, Award } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'
import Reveal from './Reveal'

const chipColors = [
  'border-accent-cyan/30 text-accent-cyan',
  'border-accent-pink/30 text-accent-pink',
  'border-accent-purple/30 text-accent-purple',
  'border-accent-coral/30 text-accent-coral',
  'border-ink/20 text-ink',
  'border-accent-cyan/30 text-accent-cyan',
]

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="currently" className="py-24 px-6 bg-paper-soft">
      <div className="max-w-5xl mx-auto">
        {/* Currently */}
        <Reveal className="mb-24">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-cyan mb-4">
            {t.currently.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
            {t.currently.heading}
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed max-w-3xl">
            {t.currently.paragraph}{' '}
            <a
              href="https://www.davisbakery.store"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink font-medium underline decoration-accent-lime decoration-2 underline-offset-4 hover:text-accent-purple transition-colors inline-flex items-center gap-1"
            >
              {t.currently.linkText}
              <ArrowUpRight size={16} />
            </a>
            {t.currently.paragraphEnd}
          </p>
        </Reveal>

        {/* Capabilities */}
        <Reveal className="mb-24">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-pink mb-4">
            {t.capabilities.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-8">
            {t.capabilities.heading}
          </h2>
          <div className="flex flex-wrap gap-3">
            {t.capabilities.categories.map((category, i) => (
              <span
                key={category}
                className={`font-mono text-xs uppercase tracking-wide border rounded-full px-4 py-2 ${chipColors[i % chipColors.length]}`}
              >
                {category}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Education & certifications */}
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-purple mb-4">
            {t.education.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-8">
            {t.education.heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-5">
              {t.education.items.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="p-2 bg-paper rounded-lg border border-ink/10 h-fit">
                    <GraduationCap size={16} className="text-ink" />
                  </div>
                  <div>
                    <p className="text-ink font-medium">{item.title}</p>
                    <p className="font-mono text-xs text-ink-faint mb-1">{item.period}</p>
                    <p className="text-ink-soft text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {t.education.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center justify-between gap-4 bg-paper border border-ink/10 rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <Award size={15} className="text-accent-purple shrink-0" />
                    <p className="text-ink text-sm font-medium">{cert.title}</p>
                  </div>
                  <span className="font-mono text-xs text-ink-faint shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
