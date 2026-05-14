import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons'

export default function Hero() {
  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm px-4 py-2 rounded-full mb-8 font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Disponible para oportunidades laborales
        </div>

        {/* Greeting */}
        <p className="text-gray-400 text-lg mb-3 font-mono">
          Hola, soy
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="gradient-text">Sebastián González</span>
        </h1>

        {/* Role */}
        <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
          Ingeniería en Sistemas · Backend & Data Engineering
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Estudiante avanzado con experiencia en desarrollo backend con <span className="text-white">C# (.NET)</span> y <span className="text-white">Node.js</span>,
          construcción de APIs REST, ingeniería de datos con <span className="text-white">Pentaho ETL</span> y análisis con <span className="text-white">Power BI</span>.
          Orientado a generar valor real a partir de los datos.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToPortfolio}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Ver proyectos
          </button>
          <button
            onClick={scrollToContact}
            className="border border-cyan-500/40 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/5 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
          >
            Contáctame
          </button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-5">
          <a
            href="https://github.com/Sebasgonzalez26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href="mailto:jg1829016@gmail.com"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 text-gray-600 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  )
}
