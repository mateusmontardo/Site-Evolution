/**
 * Divisor entre seções — no lugar de uma linha reta genérica, meia-luas concêntricas
 * que remetem aos anéis do tronco, cortadas pela borda da seção.
 */
export function SectionDivider({ className = '' }: { className?: string }) {
  const arcs = [10, 20, 30, 40, 52]

  return (
    <div className={`relative h-16 w-full overflow-hidden ${className}`} aria-hidden="true">
      <div className="hairline-gold absolute inset-x-0 top-0 h-px opacity-60" />
      <svg
        viewBox="0 0 200 60"
        preserveAspectRatio="xMidYMin slice"
        className="absolute inset-x-0 top-0 h-full w-full text-gold"
        fill="none"
      >
        {arcs.map((radius, index) => (
          <circle
            key={radius}
            cx={100}
            cy={0}
            r={radius}
            stroke="currentColor"
            strokeWidth={0.5}
            opacity={0.5 - index * 0.07}
          />
        ))}
      </svg>
    </div>
  )
}
