import { useRef, useState } from 'react'
import { Button, LeafMark } from '../components/UI'
import { services } from '../data/services'

function ArrowIcon({ direction }: { direction: 'previous' | 'next' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${direction === 'previous' ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

const portfolioOrder = ['gastronomia', 'gestao-de-perfil', 'filmmaker', 'videomaker', 'criacao-de-sites', 'fotos-pessoais']
const portfolioServices = portfolioOrder.flatMap((slug) => {
  const service = services.find((item) => item.slug === slug)
  return service ? [service] : []
})

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollPrevious, setCanScrollPrevious] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const updateScrollState = () => {
    const track = trackRef.current
    if (!track) return

    const maxScroll = track.scrollWidth - track.clientWidth
    setCanScrollPrevious(track.scrollLeft > 4)
    setCanScrollNext(track.scrollLeft < maxScroll - 4)
  }

  const scrollTrack = (direction: 'previous' | 'next') => {
    const track = trackRef.current
    if (!track) return

    track.scrollBy({
      left: (direction === 'previous' ? -1 : 1) * track.clientWidth * 0.82,
      behavior: 'smooth',
    })
  }

  return (
    <section id="portfolio" className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <div className="absolute left-1/2 top-1/2 h-80 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/7 blur-[110px]" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div className="mb-7 text-center sm:mb-9">
          <h2 id="portfolio-title" className="section-heading">Portfólio</h2>
          <LeafMark className="mt-3 justify-center [&>span]:hidden" />
        </div>

        <div className="relative px-1 sm:px-14">
          <button
            type="button"
            onClick={() => scrollTrack('previous')}
            disabled={!canScrollPrevious}
            aria-label="Ver projetos anteriores"
            aria-controls="portfolio-track"
            className="glass-pill absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-accent transition-all duration-300 hover:border-accent/60 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:pointer-events-none disabled:opacity-25 sm:flex"
          >
            <ArrowIcon direction="previous" />
          </button>

          <div
            id="portfolio-track"
            ref={trackRef}
            tabIndex={0}
            role="region"
            aria-labelledby="portfolio-title"
            onScroll={updateScrollState}
            className="scrollbar-hidden flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth rounded-2xl pb-3 outline-none focus-visible:ring-2 focus-visible:ring-accent/45 md:snap-none"
          >
            {portfolioServices.map((service) => (
              <article
                key={service.slug}
                className="glass-card group relative aspect-[4/3] min-w-[82%] snap-center overflow-hidden rounded-2xl sm:min-w-[46%] md:min-w-[31%] lg:min-w-[calc((100%_-_4rem)/5)]"
              >
                <img
                  src={service.coverImage}
                  alt={service.coverAlt}
                  className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07160f]/42 via-transparent to-[#d0c27a]/5" />
                <p className="sr-only">{service.title}</p>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollTrack('next')}
            disabled={!canScrollNext}
            aria-label="Ver próximos projetos"
            aria-controls="portfolio-track"
            className="glass-pill absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-accent transition-all duration-300 hover:border-accent/60 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:pointer-events-none disabled:opacity-25 sm:flex"
          >
            <ArrowIcon direction="next" />
          </button>
        </div>

        <div className="mt-7 text-center sm:mt-9">
          <Button href="#contato" variant="outline" className="px-7 py-3.5 text-xs sm:text-sm">
            Vamos criar juntos
          </Button>
        </div>
      </div>
    </section>
  )
}
