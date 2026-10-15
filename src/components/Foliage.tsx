interface FoliageProps {
  className?: string
  mirrored?: boolean
  crop?: 'left-bottom' | 'right-top'
  /** Esmaece uma borda do recorte. A arte da samambaia termina rente às bordas
   *  da imagem, então sem isso o recorte aparece como uma linha reta. */
  fade?: 'top' | 'bottom'
}

const fadeClasses = {
  top: '[mask-image:linear-gradient(to_bottom,transparent,#000_18%)]',
  bottom: '[mask-image:linear-gradient(to_top,transparent,#000_18%)]',
}

export default function Foliage({
  className = '',
  mirrored = false,
  crop = 'right-top',
  fade,
}: FoliageProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none block select-none overflow-hidden ${fade ? fadeClasses[fade] : ''} ${className}`}
    >
      <img
        src="/Imagens/Index/folhagem-samambaia.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover brightness-[.55] saturate-[.7] contrast-[1.05] ${
          crop === 'left-bottom' ? 'object-bottom-left' : 'object-top-right'
        } ${mirrored ? '-scale-x-100' : ''}`}
      />
    </span>
  )
}
