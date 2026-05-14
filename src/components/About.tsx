import { GraduationCap, Briefcase, Globe, Award } from 'lucide-react'

const skillGroups = [
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'C# / .NET', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'APIs REST', level: 85 },
    ],
  },
  {
    category: 'Bases de Datos',
    skills: [
      { name: 'SQL Server / MySQL / Oracle', level: 80 },
      { name: 'MongoDB (NoSQL)', level: 70 },
    ],
  },
  {
    category: 'Data Engineering & BI',
    skills: [
      { name: 'Pentaho ETL', level: 72 },
      { name: 'Power BI', level: 70 },
      { name: 'Tableau', level: 65 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'Microsoft Azure', level: 65 },
      { name: 'Git / GitHub', level: 85 },
      { name: 'Postman', level: 82 },
    ],
  },
]

const highlights = [
  {
    icon: GraduationCap,
    title: 'Universidad Fidélitas',
    description: 'Bachillerato en Ingeniería en Sistemas (2023 – Presente). Próximo a finalizar.',
  },
  {
    icon: Briefcase,
    title: 'Concentrix / Goldman Sachs',
    description: 'Especialista Apple Card desde dic. 2025 — análisis de cuentas, normativas y atención al cliente.',
  },
  {
    icon: Award,
    title: 'Certificaciones',
    description: 'Cisco CCNA (2024) · BELT English C1 (Marzo 2026). Comprometido con el aprendizaje continuo.',
  },
  {
    icon: Globe,
    title: 'Bilingüe',
    description: 'Español nativo · Inglés C1 (BELT). Capaz de trabajar en entornos internacionales.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm mb-3">// sobre mí</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">¿Quién soy?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: bio + highlights */}
          <div>
            <p className="text-gray-400 text-base leading-relaxed mb-5">
              Soy <span className="text-white font-medium">Sebastián González Rojas</span>, estudiante avanzado de
              Ingeniería en Sistemas en la Universidad Fidélitas (Costa Rica). Mi enfoque está en el
              desarrollo <span className="text-white font-medium">backend con C# (.NET) y Node.js</span> bajo
              arquitectura limpia, y en la ingeniería de datos con <span className="text-white font-medium">Pentaho ETL</span> y
              construcción de Data Warehouses.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Cuento con inglés C1 certificado y estoy listo para dar el siguiente paso en mi carrera dentro del mundo tech.
              Podés ver todos mis repositorios y proyectos en{' '}
              <a
                href="https://github.com/Sebasgonzalez26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
              >
                github.com/Sebasgonzalez26
              </a>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-[#0f0f0f] border border-white/5 rounded-xl p-4 hover:border-cyan-500/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                      <Icon size={16} className="text-cyan-400" />
                    </div>
                    <h3 className="text-white text-sm font-semibold">{title}</h3>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: skills grouped */}
          <div className="space-y-7">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <p className="text-cyan-400 font-mono text-xs mb-3">{group.category}</p>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-cyan-400 text-xs font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-cyan-400 mb-1">C1</p>
                <p className="text-gray-500 text-xs">Inglés BELT</p>
              </div>
              <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-cyan-400 mb-1">2</p>
                <p className="text-gray-500 text-xs">Certificaciones</p>
              </div>
              <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-cyan-400 mb-1">CCNA</p>
                <p className="text-gray-500 text-xs">Cisco 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
