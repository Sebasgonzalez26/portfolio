import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Ahora', href: '#currently' },
  { label: 'Proyectos', href: '#work' },
]

const contactLink = { label: 'Contacto', href: '#contact' }

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 font-sans">
      <div className="relative w-full px-6 sm:px-10 lg:px-16 py-7 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3"
        >
          <span className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-4 h-4 rounded-full bg-white" />
          </span>
          <span className="text-white text-2xl font-medium">SGR</span>
        </a>

        {/* Desktop links */}
        {/* Desktop links, right-aligned to the same grid as the hero copy below */}
        <div className="hidden lg:flex absolute inset-0 items-center pointer-events-none">
          <div className="w-full px-6 sm:px-10 lg:px-16 flex justify-end">
            <div className="pointer-events-auto flex items-center gap-10 border border-gray-700 rounded-full px-11 py-5">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="text-lg text-white/80 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href={contactLink.href}
                onClick={(e) => handleNavClick(e, contactLink.href)}
                className="text-lg text-white/80 hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                {contactLink.label}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-black/90 backdrop-blur-md border-t border-gray-700"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {[...navLinks, contactLink].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="text-base text-white/80 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
