import { Link } from 'react-router-dom'
import { services, type ServiceData } from '../data/services'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Foliage from '../components/Foliage'
import { Button, Eyebrow } from '../components/UI'

function ServiceCard({ service }: { service: ServiceData }) {
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>()

  return (
    <Link
      ref={ref}
      to={`/servicos/${service.slug}`}
      className={`glass-card group relative block overflow-hidden rounded-2xl transition-all duration-500 outline-none hover:-translate-y-1 hover:border-accent/60 hover:shadow-accent/10 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
    >
      <div className="relative aspect-[16/11] overflow-hidden sm:aspect-[4/5]">
        <img
          src={service.coverImage}
          alt={service.coverAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        <span
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-ink/55 text-sm text-cream backdrop-blur-md transition-colors duration-300 group-hover:border-accent/60 group-hover:text-accent"
          aria-hidden="true"
        >
          ↗
        </span>

        <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-ink-soft/60 p-4 backdrop-blur-md">
          <span className="mb-1 block text-[0.62rem] font-semibold uppercase leading-snug tracking-[0.16em] text-accent">
            {service.tag}
          </span>
          <h3 className="text-base font-semibold leading-snug text-cream">{service.title}</h3>
          <span className="mt-2 block text-[0.7rem] font-medium text-cream/45 transition-colors duration-300 group-hover:text-accent">
            Explorar processo &amp; cases <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function Servicos() {
  return (
    <section id="servicos" className="relative px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      <Foliage
        mirrored
        fade="top"
        className="absolute -left-28 top-8 hidden h-[34rem] w-[21rem] opacity-[.13] md:block lg:w-[24rem] lg:opacity-[.19]"
      />
      <div className="absolute right-[7%] top-[25%] h-72 w-72 rounded-full bg-[#55704f]/10 blur-[100px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <Eyebrow className="justify-center lg:justify-start">Soluções integradas</Eyebrow>
          <h2 className="section-title">
            Fotografia, vídeo e design em um só lugar,{' '}
            <span className="highlight">sem múltiplos intermediários.</span>
          </h2>
          <p className="section-lead mx-auto mb-9 max-w-[30rem] lg:mx-0">
            Do briefing inicial à publicação final, acompanho cada etapa de perto com um olhar
            estético rigoroso e o compromisso inegociável com as suas datas de entrega.
          </p>
          <Button href="#contato" variant="outline">
            Montar meu pacote de serviços
          </Button>
          <p className="mb-0 mt-6 text-[0.7rem] uppercase tracking-[0.18em] text-body/55">
            4 frentes · 1 ponto de contato
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
