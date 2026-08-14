import { useState } from 'react'
import { CheckCircle, Mail, MapPin, MessageSquare, Send, User } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons'
import { useLanguage } from '../i18n/useLanguage'
import Reveal from './Reveal'

const EMAIL = 'jg1829016@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/sebastián-josué-gonzález-68a97b297'
const GITHUB = 'https://github.com/Sebasgonzalez26'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n—\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const fieldClass =
    'w-full bg-white/[0.03] border border-white/12 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm placeholder-white/35 focus:outline-none focus:border-white/40 transition-colors'

  return (
    <section id="contact" className="relative py-24 px-6 bg-paper-soft overflow-hidden">
      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, transparent 25%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              {t.contact.heading}
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Form card */}
          <Reveal>
            <div className="h-full border border-white/12 rounded-3xl p-7 sm:p-9 bg-white/[0.02]">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                {t.contact.formCardTitle}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-7">
                {t.contact.formCardDescription}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <label htmlFor="name" className="sr-only">
                    {t.contact.formName}
                  </label>
                  <User
                    size={17}
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.formPlaceholderName}
                    className={fieldClass}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="email" className="sr-only">
                    {t.contact.formEmail}
                  </label>
                  <Mail
                    size={17}
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.formPlaceholderEmail}
                    className={fieldClass}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="message" className="sr-only">
                    {t.contact.formMessage}
                  </label>
                  <MessageSquare
                    size={17}
                    aria-hidden="true"
                    className="absolute left-4 top-4 text-white/40"
                  />
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={t.contact.formPlaceholderMessage}
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium py-3.5 rounded-xl hover:bg-white/90 transition-colors"
                >
                  {sent ? (
                    <>
                      <CheckCircle size={17} />
                      {t.contact.formSent}
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      {t.contact.formSubmit}
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>

          {/* Connect card */}
          <Reveal delay={0.1}>
            <div className="h-full border border-white/12 rounded-3xl p-7 sm:p-9 bg-white/[0.02] flex flex-col">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                {t.contact.connectTitle}
              </h3>
              <p className="flex items-center gap-2 text-white/50 text-sm mb-7">
                <MapPin size={15} aria-hidden="true" />
                {t.contact.location}
              </p>

              {/* Primary: email */}
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 border border-white/12 rounded-2xl p-5 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06] transition-colors mb-3"
              >
                <span className="p-3 rounded-xl border border-white/12 shrink-0">
                  <Mail size={20} className="text-white/80" />
                </span>
                <span className="min-w-0">
                  <span className="block text-white font-medium">Email</span>
                  <span className="block text-white/45 text-sm truncate">{EMAIL}</span>
                </span>
              </a>

              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border border-white/12 rounded-2xl p-5 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06] transition-colors"
                >
                  <span className="shrink-0">
                    <LinkedinIcon size={20} className="text-white/80" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-white font-medium">LinkedIn</span>
                    <span className="block text-white/45 text-xs truncate">
                      sebastián-josué-gonzález
                    </span>
                  </span>
                </a>

                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border border-white/12 rounded-2xl p-5 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06] transition-colors"
                >
                  <span className="shrink-0">
                    <GithubIcon size={20} className="text-white/80" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-white font-medium">GitHub</span>
                    <span className="block text-white/45 text-xs truncate">Sebasgonzalez26</span>
                  </span>
                </a>
              </div>

              {/* Availability */}
              <div className="mt-auto pt-6">
                <div className="border border-white/12 rounded-2xl p-5 bg-white/[0.03]">
                  <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                    {t.contact.availabilityTitle}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">{t.contact.availability}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
