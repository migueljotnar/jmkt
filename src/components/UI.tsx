import { Link } from 'react-router-dom'

function Diamond() {
  return <span className="block h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
}

export function LeafMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 text-accent ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="h-5 w-5">
        <path d="M12 21V10" strokeLinecap="round" />
        <path d="M12 10c0-4 3-7 7-7 0 4-3 7-7 7Z" strokeLinejoin="round" />
        <path d="M12 14c0-3.5-2.5-6-6-6 0 3.5 2.5 6 6 6Z" strokeLinejoin="round" />
      </svg>
      <span className="h-px w-14 bg-accent/25" />
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
      className={`flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4 font-['Lato',sans-serif] ${align === 'center' ? 'justify-center' : ''
        } ${className}`}
    >
      <Diamond />
      <span>{children}</span>
      <span className="h-px w-14 sm:w-20 bg-accent/20" aria-hidden="true" />
    </div>
  )
}

export function IconCircle({
  children,
  size = 'md',
  className = '',
}: {
  children: React.ReactNode
  size?: 'sm' | 'md'
  className?: string
}) {
  const sizeClasses = size === 'sm' ? 'h-8 w-8' : 'h-11 w-11'
  return (
    <span
      className={`glass-pill inline-flex ${sizeClasses} shrink-0 items-center justify-center rounded-full text-accent [&>svg]:h-[46%] [&>svg]:w-[46%] ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
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

const buttonBase =
  'group inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-[0.1em] transition-all duration-300 no-underline outline-none hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-60'

const buttonVariants: Record<'outline' | 'solid', string> = {
  outline:
    'glass-pill text-cream hover:border-accent/55 hover:bg-accent/8 hover:text-accent',
  solid:
    'border border-accent/45 bg-accent-strong/90 text-ink shadow-[0_12px_30px_rgba(0,0,0,.18)] backdrop-blur-md hover:bg-accent',
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
