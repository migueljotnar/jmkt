interface FoliageProps {
  className?: string
  mirrored?: boolean
  crop?: 'left-bottom' | 'right-top'
}

export default function Foliage({
  className = '',
  mirrored = false,
  crop = 'right-top',
}: FoliageProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none block select-none overflow-hidden ${className}`}
    >
      <img
        src="/Imagens/Index/folhagem-samambaia.png?v=2"
        alt=""
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover brightness-[.55] saturate-[.7] contrast-[1.05] ${
          crop === 'left-bottom' ? 'object-left-bottom' : 'object-right-top'
        } ${mirrored ? '-scale-x-100' : ''}`}
      />
    </span>
  )
}
