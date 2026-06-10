import { useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { services } from '../data/services'
import ServicePage from '../components/ServicePage'
 
// Esta página é chamada para qualquer rota /servicos/:slug
// Ex: /servicos/filmmaker, /servicos/gastronomia, etc.
export default function ServicoPage() {
  // Pega o "slug" da URL (o texto depois de /servicos/)
  const { slug } = useParams<{ slug: string }>()
 
  // Busca o serviço correspondente na lista de dados
  const service = services.find((s) => s.slug === slug)
 
  // Atualiza o título da aba do navegador
  useEffect(() => {
    if (service) {
      document.title = service.pageTitle
    }
    // Restaura o título ao sair da página
    return () => {
      document.title = 'Jessyane Soares | Filmmaker e Videomaker'
    }
  }, [service])
 
  // Se o slug não existe (ex: /servicos/pagina-errada), volta para a home
  if (!service) {
    return <Navigate to="/" replace />
  }
 
  return <ServicePage service={service} />
}