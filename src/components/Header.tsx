import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useEscapeAndScrollLock } from '../hooks/useEscapeAndScrollLock'

const sectionIds = ['inicio', 'sobre', 'servicos', 'portfolio', 'contato']

const navLinkClass =
  'relative pb-2 text-xs font-bold uppercase tracking-[0.14em] text-cream/80 no-underline transition-colors duration-300 before:absolute before:-bottom-[5px] before:left-1/2 before:h-1 before:w-1 before:-translate-x-1/2 before:rotate-45 before:bg-accent before:opacity-0 before:transition-opacity after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-accent hover:after:scale-x-100 focus-visible:outline-none focus-visible:text-accent'

const mobileNavLinkClass =
  'flex items-center justify-between border-b border-cream/8 py-4 text-lg font-bold text-cream/85 no-underline transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:text-accent'

// Fica fora do Header para não ser recriado (e perder estado) a cada render.
function NavLink({
  sectionId,
  children,
  mobile = false,
  isHomePage,
  active = false,
  onNavigate,
}: {
  sectionId: string
  children: React.ReactNode
  mobile?: boolean
  isHomePage: boolean
  active?: boolean
  onNavigate: () => void
}) {
  const linkClass = `${mobile ? mobileNavLinkClass : navLinkClass} ${
    active ? (mobile ? 'text-accent' : 'text-accent before:opacity-100 after:scale-x-100') : ''
  }`
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (mobile) onNavigate()

    if (isHomePage) {
      // Garante scroll suave mesmo que o hash já esteja na URL
      const target = document.getElementById(sectionId)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', `#${sectionId}`)
      }
    }
  }

  if (isHomePage) {
    return (
      <a
        href={`#${sectionId}`}
        className={linkClass}
        onClick={handleClick}
        aria-current={active ? 'location' : undefined}
      >
        {children}
        {mobile && <span className="text-sm text-accent/70" aria-hidden="true">↗</span>}
      </a>
    )
  }
  return (
    <Link
      to={`/#${sectionId}`}
      className={linkClass}
      onClick={() => {
        if (mobile) onNavigate()
      }}
      aria-current={active ? 'location' : undefined}
    >
      {children}
      {mobile && <span className="text-sm text-accent/70" aria-hidden="true">↗</span>}
    </Link>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  // Fecha o menu ao mudar de rota. Ajustado durante o render (em vez de um
  // useEffect) para não causar um re-render extra a cada navegação.
  const [lastLocationKey, setLastLocationKey] = useState(location.key)
  if (location.key !== lastLocationKey) {
    setLastLocationKey(location.key)
    setMenuOpen(false)
  }

  useEffect(() => {
    const updateFromScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 40)

      if (!isHomePage) return

      if (scrollY < 120) {
        setActiveSection('inicio')
        return
      }

      // Se o usuário rolou até o final da página, ativa 'contato'
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contato')
        return
      }

      const scrollLine = scrollY + 200 // linha de visão logo abaixo do header

      let currentSection = 'inicio'
      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element && scrollLine >= element.offsetTop) {
          currentSection = id
        }
      }

      setActiveSection(currentSection)
    }

    // Agrupa leituras de scroll no próximo frame para evitar recalcular a
    // seção ativa várias vezes durante um mesmo repaint.
    let frameId = 0
    const handleScroll = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(updateFromScroll)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateFromScroll()
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isHomePage])

  useEscapeAndScrollLock(menuOpen, () => setMenuOpen(false))

  useEffect(() => {
    const desktopMedia = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false)
    }

    desktopMedia.addEventListener('change', closeOnDesktop)
    return () => desktopMedia.removeEventListener('change', closeOnDesktop)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
          scrolled
            ? 'glass-nav border-b'
            : 'border-b-0 bg-gradient-to-b from-ink/85 via-ink/25 to-transparent'
        }`}
      >
        <nav className={`mx-auto flex max-w-[1320px] items-center justify-between px-5 sm:px-8 ${scrolled ? 'py-3' : 'py-4'} transition-all duration-500`}>
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
            <span
              className="block h-10 w-10 sm:h-12 sm:w-12 bg-accent"
              aria-hidden="true"
              style={{
                WebkitMask: "url('/logo-white.png') center / contain no-repeat",
                mask: "url('/logo-white.png') center / contain no-repeat",
              }}
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-transparent border-none cursor-pointer z-[110]"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="menu-principal-mobile"
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

          <ul className="hidden md:flex list-none gap-9">
            <li>
              <NavLink sectionId="inicio" isHomePage={isHomePage} active={isHomePage && activeSection === 'inicio'} onNavigate={closeMenu}>Início</NavLink>
            </li>
            <li>
              <NavLink sectionId="sobre" isHomePage={isHomePage} active={isHomePage && activeSection === 'sobre'} onNavigate={closeMenu}>Sobre</NavLink>
            </li>
            <li>
              <NavLink sectionId="servicos" isHomePage={isHomePage} active={isHomePage && activeSection === 'servicos'} onNavigate={closeMenu}>Nossos Serviços</NavLink>
            </li>
            <li>
              <NavLink sectionId="portfolio" isHomePage={isHomePage} active={isHomePage && activeSection === 'portfolio'} onNavigate={closeMenu}>Portfólio</NavLink>
            </li>
            <li>
              <NavLink sectionId="contato" isHomePage={isHomePage} active={isHomePage && activeSection === 'contato'} onNavigate={closeMenu}>Contato</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[98] bg-black/45 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        id="menu-principal-mobile"
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
        className={`glass-nav fixed right-0 top-0 z-[99] h-full w-[min(84vw,320px)] border-l
          transition-transform duration-300 ease-in-out md:hidden
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <nav className="flex flex-col px-8 pt-24">
          <NavLink sectionId="inicio" mobile isHomePage={isHomePage} active={isHomePage && activeSection === 'inicio'} onNavigate={closeMenu}>Início</NavLink>
          <NavLink sectionId="sobre" mobile isHomePage={isHomePage} active={isHomePage && activeSection === 'sobre'} onNavigate={closeMenu}>Sobre</NavLink>
          <NavLink sectionId="servicos" mobile isHomePage={isHomePage} active={isHomePage && activeSection === 'servicos'} onNavigate={closeMenu}>Nossos Serviços</NavLink>
          <NavLink sectionId="portfolio" mobile isHomePage={isHomePage} active={isHomePage && activeSection === 'portfolio'} onNavigate={closeMenu}>Portfólio</NavLink>
          <NavLink sectionId="contato" mobile isHomePage={isHomePage} active={isHomePage && activeSection === 'contato'} onNavigate={closeMenu}>Contato</NavLink>
        </nav>
      </div>
    </>
  )
}
