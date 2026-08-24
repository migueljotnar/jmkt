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

// Extraído para poder usar useScrollAnimation por item (hooks não podem
// rodar dentro de um .map). Mesmo padrão de reveal-on-scroll do ServiceCard.
function GalleryPhoto({
  item,
  onSelect,
}: {
  item: GalleryItem
  onSelect: (item: GalleryItem) => void
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <div
      ref={ref}
      onClick={() => onSelect(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(item)
        }
      }}
      aria-label={`Ampliar foto: ${item.description}`}
      className={`glass-card group cursor-pointer overflow-hidden rounded-2xl text-center transition-all duration-700 hover:-translate-y-1 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-[190px] w-full object-cover opacity-95 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 sm:h-[220px]"
        />
        <div className="image-glass-overlay absolute inset-0 transition-opacity duration-300 group-hover:opacity-60" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="glass-pill rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent shadow-lg">
            Ampliar 🔍
          </span>
        </div>
      </div>
      <p className="mb-0 border-t border-accent/10 bg-ink/22 p-4 text-sm text-body/82 backdrop-blur-xl">{item.description}</p>
    </div>
  )
}

// Template compartilhado pelas 6 páginas de serviço (/servicos/:slug) — cada
// uma passa seus próprios dados e reaproveita o mesmo layout e estilo da home.
export default function ServicePage({ service }: ServicePageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null)

  useEscapeAndScrollLock(selectedPhoto !== null, () => setSelectedPhoto(null))

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <Header />

      <main className="relative">
        <Foliage className="absolute -right-24 top-20 hidden h-[37rem] w-[22rem] opacity-20 lg:block xl:w-[25rem] xl:opacity-25" />
        <div className="absolute left-[12%] top-48 h-80 w-80 rounded-full bg-accent/8 blur-[110px]" aria-hidden="true" />

        <section className="mx-auto max-w-[1120px] px-4 pb-8 pt-32 text-center sm:px-6 sm:pb-10 sm:pt-36">
          <Eyebrow align="center">Nossos Serviços</Eyebrow>
          <h1 className="mb-4 text-[clamp(2.8rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.025em]">{service.title}</h1>
          <p className="mx-auto max-w-[560px] text-sm text-body/88 sm:text-base">{service.description}</p>
        </section>

        <section className="relative z-10 mx-auto max-w-[1120px] px-4 py-8 sm:px-6 sm:py-12 lg:py-14">
          <div className="glass-panel rounded-[1.65rem] px-6 py-9 sm:px-10 sm:py-12">
            <h2 className="section-heading mb-7 text-center sm:mb-9">Galeria de Fotos</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:gap-6">
              {service.gallery.map((item, index) => (
                <GalleryPhoto key={index} item={item} onSelect={setSelectedPhoto} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <Button
              to={`/?servico=${service.slug}#contato`}
              variant="solid"
              className="px-7 py-3.5 text-xs sm:text-sm"
            >
              Entre em contato sobre {service.title}
            </Button>
            <Button
              to="/#servicos"
              variant="outline"
              className="px-7 py-3.5 text-xs sm:text-sm"
            >
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
            className="glass-panel relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl p-3 sm:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Fechar visualização"
              className="glass-pill absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-cream transition-colors hover:text-accent"
            >
              ✕
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain mx-auto"
            />
            <p className="mt-4 text-center text-sm font-medium text-cream/90 sm:text-base">
              {selectedPhoto.description}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
