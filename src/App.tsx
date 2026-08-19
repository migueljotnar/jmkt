import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import ServicoPage from './pages/ServicoPage'

function ScrollHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Delay para garantir que o DOM renderizou antes de rolar
      const timeoutId = window.setTimeout(() => {
        const elemento = document.querySelector(hash)
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)

      return () => window.clearTimeout(timeoutId)
    }

    // Ao mudar de página sem hash, volta para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
        {/* Rota de fallback: redireciona rotas inexistentes para a página inicial */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
