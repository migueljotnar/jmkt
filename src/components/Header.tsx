import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
 
export default function Header() {
  // Controla a sombra do header ao rolar a página
  const [scrolled, setScrolled] = useState(false)
  // Controla se o menu mobile está aberto
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fecha o menu ao mudar de rota
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Impede scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])
 
  // Classe de link reutilizável para os itens de navegação
  const navLinkClass =
    'no-underline text-[#4E443A] font-bold transition-all duration-300 border-b-2 border-transparent hover:text-[#A1887F] hover:border-[#A1887F] pb-1'

  // Classe para links no menu mobile (mais espaço, fonte maior)
  const mobileNavLinkClass =
    'block no-underline text-[#4E443A] font-bold text-lg py-3 transition-all duration-300 hover:text-[#A1887F]'
 
  // Verifica se estamos na página principal para usar âncora nativa
  const isHomePage = location.pathname === '/'

  // Componente de link que usa âncora nativa na home e Link em outras páginas
  const NavLink = ({ sectionId, children, mobile = false }: { sectionId: string; children: React.ReactNode; mobile?: boolean }) => {
    const linkClass = mobile ? mobileNavLinkClass : navLinkClass

    const handleClick = () => {
      if (mobile) setMenuOpen(false)
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

  return (
    <>
      <header
        className={`bg-white fixed w-full top-0 z-[100] transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-4 sm:px-8 py-2">
          {/* Logo clicável que leva ao topo */}
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
            <img src="/logo.png" alt="Logo Jessyane Soares" className="h-[40px] sm:h-[50px]" />
          </Link>

          {/* Botão hambúrguer — visível apenas em mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-transparent border-none cursor-pointer z-[110]"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {/* 3 linhas que se transformam em X quando aberto */}
            <span
              className={`block w-6 h-[2px] bg-[#4E443A] rounded transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#4E443A] rounded transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#4E443A] rounded transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>

          {/* Links de navegação — Desktop (escondido em mobile) */}
          <ul className="hidden md:flex list-none gap-8">
            <li>
              <NavLink sectionId="inicio">Início</NavLink>
            </li>
            <li>
              <NavLink sectionId="sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink sectionId="servicos">Nossos Serviços</NavLink>
            </li>
            <li>
              <NavLink sectionId="contato">Contato</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Overlay escuro quando o menu mobile está aberto */}
      <div
        className={`fixed inset-0 bg-black/50 z-[98] transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Menu mobile — painel lateral que desliza da direita */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[99] shadow-[-5px_0_15px_rgba(0,0,0,0.1)]
          transition-transform duration-300 ease-in-out md:hidden
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <nav className="flex flex-col pt-20 px-8">
          <NavLink sectionId="inicio" mobile>Início</NavLink>
          <NavLink sectionId="sobre" mobile>Sobre</NavLink>
          <NavLink sectionId="servicos" mobile>Nossos Serviços</NavLink>
          <NavLink sectionId="contato" mobile>Contato</NavLink>
        </nav>
      </div>
    </>
  )
}