import { ArrowRight } from 'lucide-react'
import ShinyText from './ShinyText'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black font-sans">
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
            Un sistema en producción, usado a diario por un negocio real.
          </p>
        </div>

        {/* Hero center */}
        <div className="flex-1 flex flex-col items-center justify-center text-center pb-16">
          <p className="uppercase text-white/80 text-xs md:text-sm tracking-tight mb-4 md:mb-6">
            Construyo software real que resuelve problemas reales
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tighter">
            <span className="block text-white font-medium">Sebastián</span>
            <ShinyText text="González Rojas" className="block" />
          </h1>

          <button
            onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
            className="group mt-8 md:mt-12 inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base transition-colors"
          >
            Ver lo que estoy construyendo
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
