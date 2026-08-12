import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, Database, Layers, BarChart3 } from 'lucide-react'
import { GithubIcon } from './icons/SocialIcons'
import { useLanguage } from '../i18n/useLanguage'
import Reveal from './Reveal'

const tagColors = [
  'border-accent-cyan/30 text-accent-cyan',
  'border-accent-pink/30 text-accent-pink',
  'border-accent-purple/30 text-accent-purple',
  'border-accent-coral/30 text-accent-coral',
  'border-ink/20 text-ink',
  'border-accent-cyan/30 text-accent-cyan',
]

const otherIcons = [Code2, Database, Layers, BarChart3]

function BakeryPreview() {
  return (
    <div className="aspect-[16/10] rounded-xl overflow-hidden border border-ink/10 flex bg-[#1a0f09]">
      <div className="flex-1 p-5 flex flex-col justify-between text-white">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center font-display text-xs">
            D
          </div>
          <span className="font-display text-xs">Davi's Bakery</span>
        </div>
        <div>
          <p className="font-display text-xl sm:text-2xl font-bold mb-2 leading-tight">
            Welcome back.
          </p>
          <p className="text-white/50 text-[11px] mb-3 hidden sm:block">
            Gestioná pedidos, inventario, pagos y finanzas desde un solo lugar
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['Pedidos', 'Inventario', 'Finanzas', 'Pagos'].map((tag) => (
              <span key={tag} className="text-[10px] bg-white/10 rounded-full px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#FAF7F2] p-5 hidden sm:flex flex-col justify-center gap-2.5">
        <p className="font-display text-xs font-semibold text-ink mb-1">Iniciá sesión</p>
        <div className="h-7 rounded-md bg-white border border-ink/10" />
        <div className="h-7 rounded-md bg-white border border-ink/10" />
        <div className="h-7 rounded-md bg-[#1a0f09] mt-1" />
      </div>
    </div>
  )
}

export default function Portfolio() {
  const { t } = useLanguage()
  const { featured } = t.projects

  return (
    <section id="work" className="py-24 px-6 bg-paper">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-coral mb-4">
          {t.projects.eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-12">
          {t.projects.heading}
        </h2>

        {/* Featured project */}
        <Reveal className="mb-20">
          <div className="border border-ink/10 rounded-2xl p-6 sm:p-8 grid md:grid-cols-2 gap-8 items-center hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] transition-all duration-300">
            <BakeryPreview />

          <div>
            <h3 className="font-display text-2xl font-semibold text-ink mb-1">{featured.title}</h3>
            <p className="text-ink-soft text-sm mb-4">{featured.subtitle}</p>
            <p className="text-ink-soft text-sm leading-relaxed mb-6">{featured.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {featured.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={`font-mono text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 ${tagColors[i % tagColors.length]}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.davisbakery.store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-ink text-paper font-medium text-sm px-5 py-2.5 rounded-full hover:bg-accent-purple transition-colors"
              >
                {featured.liveLabel}
                <ArrowUpRight size={15} />
              </a>
              <a
                href="https://github.com/Sebasgonzalez26/david-s-bakery-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-ink/20 text-ink font-medium text-sm px-5 py-2.5 rounded-full hover:border-ink transition-colors"
              >
                <GithubIcon size={15} />
                {featured.codeLabel}
              </a>
            </div>
          </div>
          </div>
        </Reveal>

        {/* Other things I've built */}
        <h3 className="font-display text-xl font-semibold text-ink mb-6">
          {t.projects.otherHeading}
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {t.projects.otherItems.map((item, i) => {
            const Icon = otherIcons[i % otherIcons.length]
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="border border-ink/10 rounded-xl p-5 bg-paper-soft h-full"
                >
                  <div className="p-2 bg-paper rounded-lg border border-ink/10 w-fit mb-3">
                    <Icon size={16} className="text-ink" />
                  </div>
                  <p className="text-ink font-medium text-sm mb-1">{item.title}</p>
                  <p className="text-ink-soft text-xs leading-relaxed">{item.description}</p>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
