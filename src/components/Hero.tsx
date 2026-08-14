import { ArrowRight } from 'lucide-react'
import ShinyText from './ShinyText'
import { useLanguage } from '../i18n/useLanguage'

const VIDEO_SRC = '/hero-background.mp4'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black font-sans"
      // Approximates the video's palette so the hero still reads as designed
      // while the file loads, or if it fails to play at all.
      style={{
        backgroundImage:
          'radial-gradient(120% 90% at 30% 70%, rgba(76,82,162,0.55) 0%, rgba(28,40,87,0.35) 35%, rgba(0,0,0,0) 70%)',
      }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      <div className="relative z-10 h-full w-full px-6 sm:px-10 lg:px-16 flex flex-col">
        {/* Top section */}
        <div className="pt-28 md:pt-32 flex justify-end">
          <p className="text-white/80 text-sm md:text-base lg:text-right">
            {t.hero.stat}
          </p>
        </div>

        {/* Hero center */}
        <div className="flex-1 flex flex-col items-center justify-center text-center pb-16">
          <p className="uppercase text-white/80 text-xs md:text-sm tracking-tight mb-4 md:mb-6">
            {t.hero.role}
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tighter">
            <span className="block text-white font-medium">Sebastián</span>
            <ShinyText text="González Rojas" className="block" />
          </h1>

          <button
            onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
            className="group mt-8 md:mt-12 inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base transition-colors"
          >
            {t.hero.ctaPrimary}
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  )
}
