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

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Top section */}
        <div className="pt-28 md:pt-32 grid gap-6 lg:grid-cols-2">
          <p className="text-white/80 text-sm md:text-base max-w-md">
            We deliver transformative programs that empower emerging product designers with
            cutting-edge expertise and vision to thrive globally.
          </p>
          <p className="text-white/80 text-sm md:text-base lg:text-right">
            8000+ Talented Designers Launched !
          </p>
        </div>

        {/* Hero center */}
        <div className="flex-1 flex flex-col items-center justify-center text-center pb-16">
          <p className="uppercase text-white/80 text-xs md:text-sm tracking-tight mb-4 md:mb-6">
            Seats for Next Program Opening Soon
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tighter">
            <span className="block text-white font-medium">Become</span>
            <ShinyText text="Product Leader." className="block" />
          </h1>

          <button className="group mt-8 md:mt-12 inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base transition-colors">
            Apply for Next Enrollment
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
