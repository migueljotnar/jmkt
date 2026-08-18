import { Link } from 'react-router-dom'

// Pequenos blocos visuais reutilizados em várias seções (Hero, Sobre, Serviços,
// Contato, páginas de serviço) para não repetir as mesmas classes longas em
// cada arquivo.

// Losango decorativo usado antes dos rótulos pequenos ("eyebrows")
function Diamond() {
  return <span className="block h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
}

// Rótulo pequeno, uppercase, com tracking largo — ex: "SOBRE MIM ◆"
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
    </div>
  )
}

// Círculo com borda fina usado em ícones de serviço, contato e selos decorativos
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
      className={`inline-flex ${sizeClasses} shrink-0 items-center justify-center rounded-full border border-hairline bg-ink-elevated text-accent ${className}`}
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
  'group inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide transition-all duration-300 no-underline disabled:opacity-60 disabled:cursor-not-allowed'

const buttonVariants: Record<'outline' | 'solid', string> = {
  outline:
    'border border-hairline text-cream hover:border-accent hover:text-accent',
  solid:
    'bg-accent-strong text-ink hover:bg-accent',
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
