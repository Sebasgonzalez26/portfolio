import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons'
import { useLanguage } from '../i18n/useLanguage'

function HeroGraphic() {
  const dots = Array.from({ length: 5 }, (_, row) =>
    Array.from({ length: 5 }, (_, col) => ({ row, col })),
  ).flat()

  return (
    <svg viewBox="0 0 400 440" className="w-full h-full" aria-hidden="true">
      <circle cx="290" cy="110" r="120" fill="#AFE7FD" opacity="0.5" />
      <rect
        x="40"
        y="210"
        width="190"
        height="190"
        rx="28"
        fill="#ECFE88"
        opacity="0.55"
        transform="rotate(-8 135 305)"
      />
      <circle cx="110" cy="90" r="46" stroke="#734BEB" strokeWidth="2.5" fill="none" />
      <path
        d="M180 250 L145 290 L180 330 M240 250 L275 290 L240 330"
        stroke="#111111"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <g>
        {dots.map(({ row, col }) => (
          <circle
            key={`${row}-${col}`}
            cx={260 + col * 22}
            cy={20 + row * 22}
            r="3"
            fill="#FF0089"
            opacity={0.15 + (row + col) * 0.03}
          />
        ))}
      </g>
    </svg>
  )
}

export default function Hero() {
  const { t } = useLanguage()

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-24 pb-16 relative overflow-hidden bg-paper"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-purple mb-6">
            {t.hero.eyebrow}
          </p>

          <h1 className="font-display text-5xl md:text-7xl font-semibold text-ink mb-6 leading-[1.05]">
            {t.hero.name}
          </h1>

          <p className="text-xl md:text-2xl text-ink font-medium mb-6 max-w-xl">{t.hero.role}</p>

          <p className="text-ink-soft text-base leading-relaxed mb-8 max-w-lg">
            {t.hero.description}
          </p>

          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-soft border border-ink/10 rounded-full px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
            {t.hero.available}
          </div>

          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => scrollTo('#work')}
              className="inline-flex items-center gap-2 bg-ink text-paper font-medium px-6 py-3 rounded-full hover:bg-accent-purple transition-colors duration-200"
            >
              {t.hero.ctaPrimary} ⟶
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 border border-ink/20 text-ink font-medium px-6 py-3 rounded-full hover:border-ink transition-colors duration-200"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>

          <div className="flex gap-5">
            <a
              href="https://github.com/Sebasgonzalez26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-ink transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sebastián-josué-gonzález-68a97b297"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-ink transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:jg1829016@gmail.com"
              className="text-ink-soft hover:text-ink transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hidden md:block relative h-96">
          <HeroGraphic />
        </div>
      </div>

      <button
        onClick={() => scrollTo('#currently')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-ink transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={18} />
      </button>
    </section>
  )
}
