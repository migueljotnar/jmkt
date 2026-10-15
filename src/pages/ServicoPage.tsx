import { useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { services } from '../data/services'
import ServicePage from '../components/ServicePage'

// Renderiza a página de um serviço a partir da rota /servicos/:slug
// (ex: /servicos/fotografia).
export default function ServicoPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  useEffect(() => {
    if (!service) return

    const previousTitle = document.title
    document.title = service.pageTitle

    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content') ?? ''
    metaDescription?.setAttribute('content', service.description)

    return () => {
      document.title = previousTitle
      metaDescription?.setAttribute('content', previousDescription)
    }
  }, [service])

  if (!service) {
    return <Navigate to="/" replace />
  }

  return <ServicePage service={service} />
}