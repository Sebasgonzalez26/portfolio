import { useState } from 'react'
import { Mail, Send, MapPin, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jg1829016@gmail.com',
    href: 'mailto:jg1829016@gmail.com',
    isBrand: false,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/tu-usuario',
    href: 'https://github.com/',
    isBrand: true,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/tu-perfil',
    href: 'https://linkedin.com/in/',
    isBrand: true,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contacto desde portafolio - ${form.name}`)
    const body = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:jg1829016@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm mb-3">// contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hablemos</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            ¿Tenés una oportunidad laboral, un proyecto interesante o simplemente querés charlar?
            Estoy disponible y con muchas ganas de sumarme a un equipo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <div>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
              <MapPin size={15} className="text-cyan-400" />
              <span>San Antonio de Coronado, Costa Rica</span>
            </div>

            <div className="space-y-4 mb-10">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#0f0f0f] border border-white/5 rounded-xl hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all group"
                >
                  <div className="p-2.5 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Icon size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-[#0f0f0f] border border-cyan-500/20 rounded-xl p-5">
              <p className="text-cyan-400 font-mono text-xs mb-2">// estado actual</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Estudiante avanzado en Universidad Fidélitas (Costa Rica), próximo a finalizar el bachillerato.
                <span className="text-white font-medium"> Abierto a pasantías, trabajos part-time o posiciones junior en backend o data.</span>
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Cuéntame sobre la oportunidad o lo que necesitás..."
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-100"
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
