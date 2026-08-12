import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.currently, href: '#currently' },
    { label: t.nav.work, href: '#work' },
    { label: t.nav.contact, href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-near-black">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('#hero')}
          className="font-mono text-xs tracking-[0.2em] uppercase text-white hover:text-accent-sky transition-colors"
        >
          Sebastián González
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="font-mono text-xs tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="font-mono text-xs tracking-[0.15em] uppercase text-white/70 hover:text-white hover:border-white/50 border border-white/20 rounded-full px-3 py-1.5 transition-colors"
            aria-label="Toggle language"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-near-black border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4 mb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="font-mono text-xs tracking-[0.15em] uppercase text-white/70 hover:text-white w-full text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleLanguage}
            className="font-mono text-xs tracking-[0.15em] uppercase text-white border border-white/20 rounded-full px-3 py-1.5"
          >
            {language === 'es' ? 'English' : 'Español'}
          </button>
        </div>
      )}
    </nav>
  )
}
