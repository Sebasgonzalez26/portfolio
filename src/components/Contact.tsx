import { useState } from 'react'
import { Mail, Send, MapPin, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons'
import { useLanguage } from '../i18n/useLanguage'
import Reveal from './Reveal'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const contactLinks = [
    { icon: Mail, label: t.contact.formEmail, value: 'jg1829016@gmail.com', href: 'mailto:jg1829016@gmail.com' },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'github.com/Sebasgonzalez26',
      href: 'https://github.com/Sebasgonzalez26',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sebastián-josué-gonzález',
      href: 'https://www.linkedin.com/in/sebastián-josué-gonzález-68a97b297',
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact - ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:jg1829016@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-paper-soft">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-sky mb-4">
          {t.contact.eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
          {t.contact.heading}
        </h2>
        <p className="text-ink-soft text-base leading-relaxed max-w-xl mb-12">
          {t.contact.description}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <Reveal>
            <div className="flex items-center gap-2 text-ink-soft text-sm mb-8">
              <MapPin size={15} className="text-accent-purple" />
              <span>{t.contact.location}</span>
            </div>

            <div className="space-y-3 mb-8">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-paper border border-ink/10 rounded-xl hover:border-ink/30 transition-colors group"
                >
                  <div className="p-2.5 bg-paper-soft rounded-lg border border-ink/10">
                    <Icon size={16} className="text-ink" />
                  </div>
                  <div>
                    <p className="text-ink-faint text-xs mb-0.5">{label}</p>
                    <p className="text-ink text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-paper border border-ink/10 rounded-xl p-5">
              <p className="font-mono text-accent-cyan text-xs uppercase tracking-wide mb-2">
                {t.hero.available}
              </p>
              <p className="text-ink-soft text-sm leading-relaxed">{t.contact.availability}</p>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-ink-soft text-sm mb-2">
                  {t.contact.formName}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.formPlaceholderName}
                  className="w-full bg-paper border border-ink/15 rounded-xl px-4 py-3 text-ink text-sm placeholder-ink-faint focus:outline-none focus:border-accent-purple/60 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-ink-soft text-sm mb-2">
                  {t.contact.formEmail}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.formPlaceholderEmail}
                  className="w-full bg-paper border border-ink/15 rounded-xl px-4 py-3 text-ink text-sm placeholder-ink-faint focus:outline-none focus:border-accent-purple/60 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-ink-soft text-sm mb-2">
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={t.contact.formPlaceholderMessage}
                  className="w-full bg-paper border border-ink/15 rounded-xl px-4 py-3 text-ink text-sm placeholder-ink-faint focus:outline-none focus:border-accent-purple/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-ink hover:bg-accent-purple text-paper font-semibold py-3 rounded-xl transition-colors duration-200"
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    {t.contact.formSent}
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {t.contact.formSubmit}
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
