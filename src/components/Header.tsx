import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
 
export default function Header() {
  // Controla a sombra do header ao rolar a página
  const [scrolled, setScrolled] = useState(false)
 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    // Limpa o evento quando o componente é desmontado
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
 
  // Classe de link reutilizável para os itens de navegação
  const navLinkClass =
    'no-underline text-[#4E443A] font-bold transition-all duration-300 border-b-2 border-transparent hover:text-[#A1887F] hover:border-[#A1887F] pb-1'
 
  return (
    <header
      className={`bg-white fixed w-full top-0 z-[100] transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto px-8 py-2 md:pb-2 pb-4">
        {/* Logo clicável que leva ao topo */}
        <Link
          to="/"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          aria-label="Logo Jessyane Soares - Ir para início"
          className="mb-4 md:mb-0"
        >
          <img src="/logo.png" alt="Logo Jessyane Soares" className="h-[50px]" />
        </Link>
 
        {/* Links de navegação */}
        <ul className="flex list-none gap-8">
          <li className="mx-4 md:mx-0 md:ml-8">
            <Link to="/#inicio" className={navLinkClass}>Início</Link>
          </li>
          <li className="mx-4 md:mx-0 md:ml-8">
            <Link to="/#sobre" className={navLinkClass}>Sobre</Link>
          </li>
          <li className="mx-4 md:mx-0 md:ml-8">
            <Link to="/#servicos" className={navLinkClass}>Nossos Serviços</Link>
          </li>
          <li className="mx-4 md:mx-0 md:ml-8">
            <Link to="/#contato" className={navLinkClass}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}