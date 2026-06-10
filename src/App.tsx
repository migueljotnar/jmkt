import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import ServicoPage from './pages/ServicoPage'
 
// Componente que rola a página corretamente ao navegar
// - Se a URL tem uma âncora (#sobre, #servicos...), rola até ela
// - Se não tem, vai para o topo
function ScrollHandler() {
  const { pathname, hash } = useLocation()
 
  useEffect(() => {
    if (hash) {
      // Pequeno delay para garantir que a página renderizou
      setTimeout(() => {
        const elemento = document.querySelector(hash)
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])
 
  return null
}
 
export default function App() {
  return (
    <>
      <ScrollHandler />
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<HomePage />} />
        {/* Páginas de serviço: /servicos/filmmaker, /servicos/gastronomia, etc. */}
        <Route path="/servicos/:slug" element={<ServicoPage />} />
      </Routes>
    </>
  )
}
