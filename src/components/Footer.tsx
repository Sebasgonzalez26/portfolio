import { Code2, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0f0f0f] border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Code2 size={16} className="text-cyan-400" />
          <span className="font-mono text-gray-500">Sebastián González Rojas</span>
        </div>

        <p className="flex items-center gap-1.5">
          Construido con
          <Heart size={13} className="text-red-500 fill-red-500" />
          usando React + TypeScript
        </p>

        <p className="font-mono text-xs">© {year} — Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
