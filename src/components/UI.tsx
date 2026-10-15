import { Link } from 'react-router-dom'

function Diamond() {
  return <span className="block h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
}

export function LeafMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center text-accent ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="h-5 w-5">
        <path d="M12 21V10" strokeLinecap="round" />
        <path d="M12 10c0-4 3-7 7-7 0 4-3 7-7 7Z" strokeLinejoin="round" />
        <path d="M12 14c0-3.5-2.5-6-6-6 0 3.5 2.5 6 6 6Z" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export function Eyebrow({
  children,
  align = 'left',
  className = '',
}: {
  children: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={`flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4 ${align === 'center' ? 'justify-center' : ''
        } ${className}`}
    >
      <Diamond />
      <span>{children}</span>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

interface ButtonProps {
  children: React.ReactNode
  variant?: 'outline' | 'solid'
  to?: string
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
  target?: string
  /** Ícone à direita do texto. Omitido = seta padrão; passe `null` para não mostrar nenhum. */
  icon?: React.ReactNode | null
  ariaLabel?: string
}

// Tamanho único para todos os botões do site; o px menor no celular evita que
// textos longos quebrem em duas linhas.
const buttonBase =
  'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 no-underline outline-none hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-60 sm:px-7 sm:text-sm [&_svg]:shrink-0'

const buttonVariants: Record<'outline' | 'solid', string> = {
  outline:
    'glass-pill text-cream hover:border-accent/60 hover:bg-accent/8 hover:text-accent',
  solid:
    'bg-accent text-ink shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:bg-accent-light hover:shadow-[0_0_34px_rgba(183,173,105,0.38)]',
}

// Botão "pill" reutilizável. Vira <Link> (rota interna), <a> (âncora/link externo)
// ou <button> (ex: submit de formulário), dependendo das props recebidas.
export function Button({
  children,
  variant = 'outline',
  to,
  href,
  type,
  disabled,
  className = '',
  target,
  icon,
  ariaLabel,
}: ButtonProps) {
  const classes = `${buttonBase} ${buttonVariants[variant]} ${className}`
  const trailingIcon = icon === undefined ? <ArrowIcon /> : icon

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
        {trailingIcon}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
        {trailingIcon}
      </a>
    )
  }

  return (
    <button type={type ?? 'button'} disabled={disabled} className={classes} aria-label={ariaLabel}>
      {children}
      {trailingIcon}
    </button>
  )
}
