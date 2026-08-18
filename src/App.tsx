import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import ServicoPage from './pages/ServicoPage'
 
function ScrollHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Delay para garantir que a página já renderizou antes de rolar
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
        <Route path="/" element={<HomePage />} />
        <Route path="/servicos/:slug" element={<ServicoPage />} />
      </Routes>
    </>
  )
}
