import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons'
import { useLanguage } from '../i18n/useLanguage'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-near-black py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs tracking-[0.15em] uppercase text-white/70">
          Sebastián González Rojas
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Sebasgonzalez26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastián-josué-gonzález-68a97b297"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:jg1829016@gmail.com"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="font-mono text-[11px] text-white/40 text-center sm:text-right">
          {t.footer.builtWith}
          <br />© {year} — {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
