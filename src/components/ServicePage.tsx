import { useState } from 'react'
import type { ServiceData, GalleryItem } from '../data/services'
import Header from './Header'
import Footer from './Footer'
import Foliage from './Foliage'
import { Button, Eyebrow } from './UI'
import { useEscapeAndScrollLock } from '../hooks/useEscapeAndScrollLock'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface ServicePageProps {
  service: ServiceData
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
    </svg>
  )
}

// Extraído para poder usar useScrollAnimation por item (hooks não podem
// rodar dentro de um .map). Mesmo cartão de vidro dos serviços da home.
function GalleryPhoto({
  item,
  onSelect,
}: {
  item: GalleryItem
  onSelect: (item: GalleryItem) => void
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLButtonElement>()

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onSelect(item)}
      aria-label={`Ampliar foto: ${item.description}`}
      className={`glass-card group relative block w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-all duration-500 outline-none hover:-translate-y-1 hover:border-accent/60 hover:shadow-accent/10 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        <span
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-ink/55 text-cream backdrop-blur-md transition-colors duration-300 group-hover:border-accent/60 group-hover:text-accent"
          aria-hidden="true"
        >
          <ExpandIcon />
        </span>

        <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-ink-soft/60 p-4 backdrop-blur-md">
          <p className="mb-0 text-sm leading-snug text-cream/90">{item.description}</p>
        </div>
      </div>
    </button>
  )
}

// Template compartilhado pelas páginas de serviço (/servicos/:slug). Usa a
// mesma tipografia, vidro e botões da home.
export default function ServicePage({ service }: ServicePageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null)

  useEscapeAndScrollLock(selectedPhoto !== null, () => setSelectedPhoto(null))

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <Header />

      <main className="relative">
        <Foliage
          fade="top"
          className="absolute -right-24 top-20 hidden h-[37rem] w-[22rem] opacity-20 lg:block xl:w-[25rem] xl:opacity-25"
        />
        <div className="absolute left-[12%] top-48 h-80 w-80 rounded-full bg-accent/8 blur-[110px]" aria-hidden="true" />

        <section className="relative z-10 mx-auto max-w-[1180px] px-4 pb-8 pt-32 text-center sm:px-6 sm:pb-10 sm:pt-36">
          <Eyebrow align="center">{service.tag}</Eyebrow>
          <h1 className="page-title">{service.title}</h1>
          <p className="section-lead mx-auto max-w-[560px]">{service.description}</p>
        </section>

        <section className="relative z-10 mx-auto max-w-[1180px] px-4 py-8 sm:px-6 sm:py-12 lg:py-14" aria-labelledby="galeria-titulo">
          <h2 id="galeria-titulo" className="sr-only">Galeria de fotos</h2>
          <Eyebrow align="center" className="mb-7 sm:mb-9">Galeria</Eyebrow>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:gap-5">
            {service.gallery.map((item, index) => (
              <GalleryPhoto key={index} item={item} onSelect={setSelectedPhoto} />
            ))}
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-[1180px] px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:pb-24">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <Button to={`/?servico=${service.slug}#contato`} variant="solid">
              Entre em contato sobre {service.title}
            </Button>
            <Button to="/#servicos" variant="outline">
              Ver todos os serviços
            </Button>
          </div>
        </section>
      </main>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da foto"
        >
          <div
            className="glass-card relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-3xl p-3 sm:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Fechar visualização"
              className="glass-pill absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-cream transition-colors hover:border-accent/60 hover:text-accent"
            >
              ✕
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="mx-auto max-h-[70vh] w-auto max-w-full rounded-2xl object-contain"
            />
            <p className="mb-0 mt-4 text-center text-sm font-medium text-cream/90 sm:text-base">
              {selectedPhoto.description}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
