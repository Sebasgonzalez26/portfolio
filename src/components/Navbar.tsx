import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About Us', 'Courses', 'Instructors', 'Testimonials', 'Blog']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-white" />
          </span>
          <span className="text-white text-base font-medium">DesignPro</span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7 border border-gray-700 rounded-full px-7 py-3">
          {navLinks.map((label) => (
            <a
              key={label}
              href="#"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#"
            className="text-sm text-white/80 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            Contact us
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
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
            <div className="px-6 py-5 flex flex-col gap-4">
              {[...navLinks, 'Contact us'].map((label) => (
                <a
                  key={label}
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-white/80 hover:text-white transition-colors"
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
