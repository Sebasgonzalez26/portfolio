import { ExternalLink, Tag } from 'lucide-react'
import { GithubIcon } from './icons/SocialIcons'

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'API REST con C# y Arquitectura Limpia',
    description:
      'Backend con .NET Core aplicando arquitectura limpia: Controller, Service, Repository, Data Access, Reglas y Abstracciones. Autenticación y autorización por roles. Validada con Postman.',
    tags: ['C#', '.NET Core', 'SQL Server', 'Postman', 'REST API'],
    github: 'https://github.com/',
  },
  {
    title: 'Data Warehouse con Modelo Estrella',
    description:
      'Diseño e implementación de un Data Warehouse bajo modelo estrella. Procesos ETL con Pentaho Data Integration para extracción, transformación y carga de datos desde múltiples fuentes.',
    tags: ['Pentaho ETL', 'Data Warehouse', 'SQL Server', 'BI'],
    github: 'https://github.com/',
  },
  {
    title: 'Dashboard de Análisis con Power BI',
    description:
      'Panel interactivo de visualización de datos con KPIs, filtros dinámicos y reportes ejecutivos. Conectado a base de datos SQL para análisis en tiempo real.',
    tags: ['Power BI', 'SQL Server', 'DAX', 'BI'],
    github: 'https://github.com/',
  },
  {
    title: 'API REST con Node.js y MongoDB',
    description:
      'API REST desarrollada con Node.js e integrada con MongoDB para gestión de datos NoSQL. Incluye autenticación JWT, manejo de errores y documentación de endpoints.',
    tags: ['Node.js', 'MongoDB', 'JWT', 'REST API'],
    github: 'https://github.com/',
  },
  {
    title: 'Deploy en Microsoft Azure',
    description:
      'Despliegue de aplicación backend en Microsoft Azure con control de versiones en GitHub. Configuración de entornos, variables y pipeline básico de CI/CD.',
    tags: ['Azure', 'Git / GitHub', 'DevOps', '.NET'],
    github: 'https://github.com/',
  },
  {
    title: 'Portafolio Personal',
    description:
      'Este mismo sitio. Construido con React, TypeScript y Tailwind CSS. Diseño dark mode con acento cian, totalmente responsive y deployable en Vercel.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/',
    demo: '#',
  },
]

const tagColor: Record<string, string> = {
  'C#': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  '.NET Core': 'bg-purple-400/10 text-purple-300 border-purple-400/20',
  '.NET': 'bg-purple-400/10 text-purple-300 border-purple-400/20',
  'SQL Server': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Postman: 'bg-orange-400/10 text-orange-300 border-orange-400/20',
  'REST API': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Pentaho ETL': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Data Warehouse': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  BI: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  'Power BI': 'bg-yellow-600/10 text-yellow-300 border-yellow-600/20',
  DAX: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Node.js': 'bg-green-500/10 text-green-400 border-green-500/20',
  MongoDB: 'bg-green-600/10 text-green-400 border-green-600/20',
  JWT: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  Azure: 'bg-blue-400/10 text-blue-300 border-blue-400/20',
  'Git / GitHub': 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  DevOps: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  React: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  TypeScript: 'bg-blue-400/10 text-blue-300 border-blue-400/20',
  'Tailwind CSS': 'bg-cyan-600/10 text-cyan-300 border-cyan-600/20',
  Vite: 'bg-purple-400/10 text-purple-300 border-purple-400/20',
}

function getTagClass(tag: string) {
  return tagColor[tag] ?? 'bg-gray-500/10 text-gray-400 border-gray-500/20'
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm mb-3">// proyectos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mis Proyectos</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Proyectos técnicos que reflejan mi experiencia en backend, ingeniería de datos y desarrollo fullstack.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-hover bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 bg-cyan-500/10 rounded-xl">
                  <Tag size={16} className="text-cyan-400" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-cyan-400 transition-colors"
                      aria-label="Ver en GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-cyan-400 transition-colors"
                      aria-label="Ver demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & description */}
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full border font-mono ${getTagClass(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 px-6 py-3 rounded-lg transition-all text-sm font-medium"
          >
            <GithubIcon size={16} />
            Ver todos mis repositorios
          </a>
        </div>
      </div>
    </section>
  )
}
