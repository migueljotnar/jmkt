import type { ServiceData } from '../data/services'
import Header from './Header'
import Footer from './Footer'
import { Button, Eyebrow } from './UI'

interface ServicePageProps {
  service: ServiceData
}

// Template compartilhado pelas 6 páginas de serviço (/servicos/:slug) — cada
// uma passa seus próprios dados e reaproveita o mesmo layout e estilo da home.
export default function ServicePage({ service }: ServicePageProps) {
  return (
    <div className="bg-ink">
      <Header />

      <main>
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-14 pb-8 sm:pt-20 sm:pb-10 text-center">
          <Eyebrow align="center">Nossos Serviços</Eyebrow>
          <h1 className="text-4xl sm:text-5xl mb-4">{service.title}</h1>
          <p className="text-body max-w-[560px] mx-auto">{service.description}</p>
        </section>

        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="bg-ink-soft border border-hairline rounded-3xl px-6 py-10 sm:px-10 sm:py-14">
            <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8 text-center">Galeria de Fotos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 sm:gap-6">
              {service.gallery.map((item, index) => (
                <div
                  key={index}
                  className="bg-ink-elevated rounded-2xl overflow-hidden border border-hairline text-center"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-[180px] sm:h-[200px] object-cover"
                  />
                  <p className="p-4 mb-0 text-body">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center mb-8">
            <Button to="/#contato" variant="outline" className="px-7 py-3.5 text-sm sm:text-base">
              Entre em contato
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
