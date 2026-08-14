/**
 * Miniature recreations of the real screens each project links to.
 *
 * Every size inside a preview is expressed in `em`, so the whole mock scales
 * from the root font size: small for the grid cards, larger on detail pages.
 */

interface PreviewProps {
  /** Root font size in px that every internal `em` scales from. */
  base?: number
}

export function BakeryPreview({ base = 10 }: PreviewProps) {
  return (
    <div className="absolute inset-0 flex bg-[#1a0f09]" style={{ fontSize: `${base}px` }}>
      <div className="flex-1 p-[1.4em] flex flex-col justify-between text-white">
        <div className="flex items-center gap-[0.5em]">
          <div className="w-[1.8em] h-[1.8em] rounded-[0.4em] bg-white/10 flex items-center justify-center font-display text-[0.8em]">
            D
          </div>
          <span className="font-display text-[0.9em]">Davi&apos;s Bakery</span>
        </div>
        <div>
          <p className="font-display text-[1.7em] font-bold mb-[0.4em] leading-tight">
            Welcome back.
          </p>
          <p className="text-white/50 text-[0.72em] mb-[0.9em] hidden sm:block">
            Gestioná pedidos, inventario, pagos y finanzas desde un solo lugar
          </p>
          <div className="flex flex-wrap gap-[0.4em]">
            {['Pedidos', 'Inventario', 'Finanzas', 'Pagos'].map((tag) => (
              <span
                key={tag}
                className="text-[0.65em] bg-white/10 rounded-full px-[0.8em] py-[0.3em]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Panel keeps the cream background of the real screen, so its ink stays dark. */}
      <div className="flex-1 bg-[#FAF7F2] p-[1.4em] hidden sm:flex flex-col justify-center gap-[0.6em]">
        <p className="font-display text-[0.8em] font-semibold text-[#1a0f09] mb-[0.3em]">
          Iniciá sesión
        </p>
        <div className="h-[1.8em] rounded-[0.35em] bg-white border border-black/10" />
        <div className="h-[1.8em] rounded-[0.35em] bg-white border border-black/10" />
        <div className="h-[1.8em] rounded-[0.35em] bg-[#1a0f09] mt-[0.2em]" />
      </div>
    </div>
  )
}

export function PortfolioPreview({ base = 10 }: PreviewProps) {
  return (
    <div
      className="absolute inset-0 bg-black flex flex-col items-center justify-center gap-[0.35em]"
      style={{ fontSize: `${base}px` }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 30% 70%, rgba(76,82,162,0.6) 0%, rgba(28,40,87,0.35) 40%, rgba(0,0,0,0) 75%)',
        }}
      />
      <p className="relative font-mono text-[0.6em] tracking-[0.25em] uppercase text-white/60">
        Construyo software real
      </p>
      <p className="relative font-instrument-sans text-[2.2em] font-semibold leading-none text-white">
        Sebastián
      </p>
      <p className="relative font-instrument-sans text-[2.2em] font-semibold leading-none text-[#8fd4f5]">
        González Rojas
      </p>
      <span className="relative mt-[0.6em] bg-white text-black text-[0.62em] font-medium rounded-full px-[1.4em] py-[0.55em]">
        Ver lo que estoy construyendo
      </span>
    </div>
  )
}
