import { Link } from 'react-router-dom'
import { services, type ServiceData } from '../data/services'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Button, Eyebrow, IconCircle } from '../components/UI'

// Ficam aqui (e não em services.tsx) para manter o arquivo de dados livre de JSX.
const serviceIcons: Record<string, React.ReactNode> = {
  gastronomia: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2v7a2 2 0 0 0 4 0V2M8 9v13M16 2c-1.7 0-3 2-3 5s1.3 5 3 5v10" />
    </svg>
  ),
  'gestao-de-perfil': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
    </svg>
  ),
  filmmaker: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9Z" />
      <path d="M4 10 5 5h14l1 5M8 5l1 5M13 5l1 5" />
    </svg>
  ),
  videomaker: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="12" height="10" rx="1.5" />
      <path d="M15 10.5 21 7.5v9L15 13.5" />
    </svg>
  ),
  'fotos-pessoais': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8a1 1 0 0 1 1-1h2l1.2-2h7.6L17 7h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Z" />
      <circle cx="12" cy="13" r="3.3" />
    </svg>
  ),
  'criacao-de-sites': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
      <path d="M3 8.5h18M8 20h8M12 16.5V20" />
    </svg>
  ),
}

function ServiceCard({ service }: { service: ServiceData }) {
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>()

  return (
    <Link
      ref={ref}
      to={`/servicos/${service.slug}`}
      className={`group relative block rounded-2xl overflow-hidden border border-hairline transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
    >
      <img
        src={service.coverImage}
        alt={service.coverAlt}
        className="w-full h-[200px] sm:h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />
      <div className="absolute left-3 right-3 bottom-3 flex items-center gap-3 rounded-full bg-ink/80 backdrop-blur-sm border border-hairline py-1.5 pl-1.5 pr-4">
        <IconCircle size="sm">{serviceIcons[service.slug]}</IconCircle>
        <span className="text-cream font-semibold text-sm truncate">{service.title}</span>
      </div>
    </Link>
  )
}

export default function Servicos() {
  return (
    <section id="servicos" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="bg-ink-soft border border-hairline rounded-3xl px-6 py-12 sm:px-10 sm:py-16 md:p-16">
        <Eyebrow align="center">Nossos Serviços</Eyebrow>

        <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-start">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl leading-tight mb-4">
              Soluções criativas para marcas que querem <span className="italic text-accent">se destacar</span>.
            </h2>
            <p className="text-body mb-8">
              Estratégia, criatividade e produção em um só lugar para transformar ideias em resultados.
            </p>
            <Button href="#contato" variant="outline" className="px-7 py-3.5 text-sm sm:text-base">
              Fale comigo
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
