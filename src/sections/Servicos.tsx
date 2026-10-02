import { Link } from 'react-router-dom'
import { services, type ServiceData } from '../data/services'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Foliage from '../components/Foliage'
import { Button, IconCircle, LeafMark } from '../components/UI'

// Ficam aqui (e não em services.tsx) para manter o arquivo de dados livre de JSX.
const serviceIcons: Record<string, React.ReactNode> = {
  fotografia: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8a1 1 0 0 1 1-1h2l1.2-2h7.6L17 7h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Z" />
      <circle cx="12" cy="13" r="3.3" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="12" height="12" rx="1.5" />
      <path d="M15 10l5-3v10l-5-3v-4Z" />
    </svg>
  ),
  arte: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 2.2 1.8 4 4 4h1.5a1.5 1.5 0 0 1 1.5 1.5V19c0 1.7 1.3 3 3 3 5.5 0 10-4.5 10-10S17.5 2 12 2Z" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" />
      <circle cx="16.5" cy="10.5" r="1" fill="currentColor" />
    </svg>
  ),
  'gestao-de-redes-sociais': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  ),
  'criacao-de-sites': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
      <path d="M3 8.5h18M8 20h8M12 16.5V20" />
    </svg>
  ),
}

const serviceOrder = ['fotografia', 'video', 'arte', 'gestao-de-redes-sociais', 'criacao-de-sites']
const displayedServices = serviceOrder
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is ServiceData => Boolean(service))

function ServiceCard({ service }: { service: ServiceData }) {
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>()

  return (
    <Link
      ref={ref}
      to={`/servicos/${service.slug}`}
      className={`glass-card group block overflow-hidden rounded-xl transition-all duration-700 outline-none hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_20px_44px_rgba(0,0,0,.24)] focus-visible:ring-2 focus-visible:ring-accent/55
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
    >
      <div className="relative overflow-hidden">
        <img
          src={service.coverImage}
          alt={service.coverAlt}
          loading="lazy"
          className="h-[170px] w-full object-cover opacity-95 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 sm:h-[185px]"
        />
        <div className="image-glass-overlay absolute inset-0 transition-opacity duration-500 group-hover:opacity-70" aria-hidden="true" />
      </div>
      <div className="relative flex min-h-14 items-center gap-3 border-t border-accent/12 bg-ink/28 px-4 py-2 backdrop-blur-xl">
        <IconCircle size="sm" className="-mt-8 h-10 w-10 bg-ink/45">{serviceIcons[service.slug]}</IconCircle>
        <span className="text-sm font-semibold tracking-wide text-cream">{service.title}</span>
      </div>
    </Link>
  )
}

export default function Servicos() {
  return (
    <section id="servicos" className="relative px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      <Foliage
        mirrored
        className="absolute -left-28 top-8 hidden h-[34rem] w-[21rem] opacity-[.13] md:block lg:w-[24rem] lg:opacity-[.19]"
      />
      <div className="absolute right-[7%] top-[25%] h-72 w-72 rounded-full bg-[#55704f]/10 blur-[100px]" aria-hidden="true" />
      <div className="glass-panel relative z-10 mx-auto max-w-[1120px] rounded-[1.65rem] px-6 py-10 sm:px-9 sm:py-12 md:p-12">
        <div className="mb-8 text-center">
          <h2 className="section-heading">Nossos Serviços</h2>
          <LeafMark className="mt-3 justify-center" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[280px_1fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <h3 className="mb-5 text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
              Fotografia, vídeo e design em um só lugar, sem a dor de cabeça de lidar com <span className="italic text-accent">vários fornecedores</span>.
            </h3>
            <p className="mb-8 text-sm text-body/88 sm:text-base">
              Do primeiro contato à entrega final, acompanho pessoalmente cada projeto, do jeito que negócio da região merece.
            </p>
            <Button href="#contato" variant="outline" className="px-7 py-3.5 text-xs sm:text-sm">
              Ver todos os serviços
            </Button>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {displayedServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
