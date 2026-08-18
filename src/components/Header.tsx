import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinkClass =
  'no-underline text-cream/90 text-sm font-bold uppercase tracking-wide transition-all duration-300 border-b-2 border-transparent hover:text-accent hover:border-accent pb-1'

const mobileNavLinkClass =
  'block no-underline text-cream font-bold text-lg py-3 transition-all duration-300 hover:text-accent'

// Fica fora do Header para não ser recriado (e perder estado) a cada render.
function NavLink({
  sectionId,
  children,
  mobile = false,
  isHomePage,
  onNavigate,
}: {
  sectionId: string
  children: React.ReactNode
  mobile?: boolean
  isHomePage: boolean
  onNavigate: () => void
}) {
  const linkClass = mobile ? mobileNavLinkClass : navLinkClass
  const handleClick = () => {
    if (mobile) onNavigate()
  }

  if (isHomePage) {
    return (
      <a href={`#${sectionId}`} className={linkClass} onClick={handleClick}>
        {children}
      </a>
    )
  }
  return (
    <Link to={`/#${sectionId}`} className={linkClass} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fecha o menu ao mudar de rota. Ajustado durante o render (em vez de um
  // useEffect) para não causar um re-render extra a cada navegação.
  const [lastLocationKey, setLastLocationKey] = useState(location.key)
  if (location.key !== lastLocationKey) {
    setLastLocationKey(location.key)
    setMenuOpen(false)
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isHomePage = location.pathname === '/'
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed w-full top-0 z-[100] bg-ink/85 backdrop-blur-md border-b transition-shadow duration-300 ${scrolled ? 'shadow-[0_10px_30px_rgba(0,0,0,0.25)] border-hairline' : 'border-transparent'
          }`}
      >
        <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-4 sm:px-8 py-3">
          <Link
            to="/"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
              setMenuOpen(false)
            }}
            aria-label="Logo Jessyane Soares - Ir para início"
          >
            <img
              src="/logo-white.png"
              alt="Logo Jessyane Soares"
              className="h-[36px] sm:h-[44px]"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-transparent border-none cursor-pointer z-[110]"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-cream rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
            />
            <span
              className={`block w-6 h-[2px] bg-cream rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`block w-6 h-[2px] bg-cream rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
            />
          </button>

          <ul className="hidden md:flex list-none gap-8">
            <li>
              <NavLink sectionId="inicio" isHomePage={isHomePage} onNavigate={closeMenu}>Início</NavLink>
            </li>
            <li>
              <NavLink sectionId="sobre" isHomePage={isHomePage} onNavigate={closeMenu}>Sobre</NavLink>
            </li>
            <li>
              <NavLink sectionId="servicos" isHomePage={isHomePage} onNavigate={closeMenu}>Nossos Serviços</NavLink>
            </li>
            <li>
              <NavLink sectionId="contato" isHomePage={isHomePage} onNavigate={closeMenu}>Contato</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-black/60 z-[98] transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-ink-soft z-[99] shadow-[-5px_0_15px_rgba(0,0,0,0.3)] border-l border-hairline
          transition-transform duration-300 ease-in-out md:hidden
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <nav className="flex flex-col pt-20 px-8">
          <NavLink sectionId="inicio" mobile isHomePage={isHomePage} onNavigate={closeMenu}>Início</NavLink>
          <NavLink sectionId="sobre" mobile isHomePage={isHomePage} onNavigate={closeMenu}>Sobre</NavLink>
          <NavLink sectionId="servicos" mobile isHomePage={isHomePage} onNavigate={closeMenu}>Nossos Serviços</NavLink>
          <NavLink sectionId="contato" mobile isHomePage={isHomePage} onNavigate={closeMenu}>Contato</NavLink>
        </nav>
      </div>
    </>
  )
}
