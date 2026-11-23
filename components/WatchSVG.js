export default function WatchSVG({ caseColor = "#FFC72C", dial = "#0d0d0d", accent = "#FFC72C", strap = "#222", size = 260 }) {
  const ticks = Array.from({ length: 12 }, (_, i) => i);
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 200 300" role="img" aria-label="Montre">
      <rect x="62" y="0" width="76" height="110" rx="14" fill={strap} />
      <rect x="62" y="190" width="76" height="110" rx="14" fill={strap} />
      {[20, 40, 60, 80].map((y) => (
        <rect key={y} x="70" y={y} width="60" height="3" rx="1.5" fill="rgba(255,255,255,.08)" />
      ))}
      {[210, 230, 250, 270].map((y) => (
        <rect key={y} x="70" y={y} width="60" height="3" rx="1.5" fill="rgba(255,255,255,.08)" />
      ))}
      <rect x="168" y="138" width="10" height="24" rx="4" fill={caseColor} />
      <circle cx="100" cy="150" r="76" fill={caseColor} />
      <circle cx="100" cy="150" r="68" fill="rgba(0,0,0,.35)" />
      <circle cx="100" cy="150" r="64" fill={dial} />
      {ticks.map((i) => (
        <rect
          key={i}
          x="99"
          y="92"
          width={i % 3 === 0 ? 3 : 1.6}
          height={i % 3 === 0 ? 10 : 6}
          fill={accent}
          transform={`rotate(${i * 30} 100 150)`}
        />
      ))}
      <rect x="98.5" y="108" width="3" height="44" rx="1.5" fill={accent} transform="rotate(-50 100 150)" />
      <rect x="98.8" y="96" width="2.4" height="56" rx="1.2" fill={accent} transform="rotate(65 100 150)" />
      <rect x="99.4" y="92" width="1.2" height="68" fill="#ff5a1f" transform="rotate(140 100 150)" />
      <circle cx="100" cy="150" r="4" fill={accent} />
      <path d="M52 120 A64 64 0 0 1 100 86" stroke="rgba(255,255,255,.18)" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}
