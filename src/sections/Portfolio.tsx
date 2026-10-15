import { useRef, useState, useEffect, useCallback } from 'react'
import { LeafMark } from '../components/UI'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

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

interface PortfolioPhoto {
  src: string
  alt: string
  title: string
  category: string
}

const portfolioPhotos: PortfolioPhoto[] = [
  {
    src: '/Imagens/Index/gastronomia-principal.webp',
    alt: 'Fotografia gastronômica e produtos',
    title: 'Gastronomia & Produtos',
    category: 'Fotografia',
  },
  {
    src: '/Imagens/Index/videomaker-principal.webp',
    alt: 'Produção e direção de vídeo',
    title: 'Comercial & Institucional',
    category: 'Vídeo',
  },
  {
    src: '/Imagens/Index/pessoais-principal.webp',
    alt: 'Ensaios fotográficos autorais',
    title: 'Ensaios Autorais',
    category: 'Fotografia',
  },
  {
    src: '/Imagens/Index/gestao-de-perfil-principal.webp',
    alt: 'Identidade visual e arte para redes sociais',
    title: 'Design & Redes Sociais',
    category: 'Arte',
  },
  {
    src: '/Imagens/Index/sites-principal.webp',
    alt: 'Criação de sites e landing pages',
    title: 'Plataformas & Sites',
    category: 'Criação de Sites',
  },
  {
    src: '/Imagens/Index/Filmmaker-principal.webp',
    alt: 'Produções cinematográficas e eventos',
    title: 'Cobertura Cinematográfica',
    category: 'Vídeo',
  },
]

function PortfolioCard({ photo }: { photo: PortfolioPhoto }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`glass-card relative aspect-[4/3] min-w-[82%] snap-center overflow-hidden rounded-2xl select-none transition-all duration-700 sm:min-w-[46%] md:min-w-[31%] lg:min-w-[calc((100%_-_4rem)/4)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="h-full w-full object-cover opacity-90 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4 text-left">
        <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-accent">
          {photo.category}
        </span>
        <span className="text-base font-semibold text-cream">
          {photo.title}
        </span>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollPrevious, setCanScrollPrevious] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const updateScrollState = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const maxScroll = track.scrollWidth - track.clientWidth
    setCanScrollPrevious(track.scrollLeft > 4)
    setCanScrollNext(maxScroll > 4 && track.scrollLeft < maxScroll - 4)
  }, [])

  useEffect(() => {
    updateScrollState()
    window.addEventListener('resize', updateScrollState)
    return () => window.removeEventListener('resize', updateScrollState)
  }, [updateScrollState])

  const scrollTrack = (direction: 'previous' | 'next') => {
    const track = trackRef.current
    if (!track) return

    track.scrollBy({
      left: (direction === 'previous' ? -1 : 1) * track.clientWidth * 0.82,
      behavior: 'smooth',
    })
  }

  return (
    <section id="portfolio" className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      <div className="absolute left-1/2 top-1/2 h-80 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/7 blur-[110px]" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div className="mb-7 text-center sm:mb-9">
          <h2 id="portfolio-title" className="section-heading">Portfólio</h2>
          <LeafMark className="mt-3 justify-center" />
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
            {portfolioPhotos.map((photo, index) => (
              <PortfolioCard key={index} photo={photo} />
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
      </div>
    </section>
  )
}
