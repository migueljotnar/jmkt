import { useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { services } from '../data/services'
import ServicePage from '../components/ServicePage'

// Renderiza a página de um serviço a partir da rota /servicos/:slug
// (ex: /servicos/filmmaker).
export default function ServicoPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  useEffect(() => {
    if (service) {
      document.title = service.pageTitle
    }
    return () => {
      document.title = 'Jessyane Soares | Filmmaker e Videomaker'
    }
  }, [service])

  if (!service) {
    return <Navigate to="/" replace />
  }

  return <ServicePage service={service} />
}