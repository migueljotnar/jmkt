import type { ServiceData } from '../data/services'
import Header from './Header'
import Footer from './Footer'
import Foliage from './Foliage'
import { Button, Eyebrow } from './UI'

interface ServicePageProps {
  service: ServiceData
}

// Template compartilhado pelas 6 páginas de serviço (/servicos/:slug) — cada
// uma passa seus próprios dados e reaproveita o mesmo layout e estilo da home.
export default function ServicePage({ service }: ServicePageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <Header />

      <main className="relative">
        <Foliage className="absolute -right-24 top-20 hidden h-[37rem] w-[22rem] opacity-20 lg:block xl:w-[25rem] xl:opacity-25" />
        <div className="absolute left-[12%] top-48 h-80 w-80 rounded-full bg-accent/8 blur-[110px]" aria-hidden="true" />

        <section className="mx-auto max-w-[1120px] px-4 pb-8 pt-32 text-center sm:px-6 sm:pb-10 sm:pt-36">
          <Eyebrow align="center">Nossos Serviços</Eyebrow>
          <h1 className="mb-4 text-[clamp(2.8rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.03em]">{service.title}</h1>
          <p className="mx-auto max-w-[560px] text-sm text-body/88 sm:text-base">{service.description}</p>
        </section>

        <section className="relative z-10 mx-auto max-w-[1120px] px-4 py-6 sm:px-6 sm:py-10">
          <div className="glass-panel rounded-[1.65rem] px-6 py-9 sm:px-10 sm:py-12">
            <h2 className="section-heading mb-7 text-center sm:mb-9">Galeria de Fotos</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:gap-6">
              {service.gallery.map((item, index) => (
                <div
                  key={index}
                  className="glass-card group overflow-hidden rounded-2xl text-center transition-all duration-500 hover:-translate-y-1 hover:border-accent/30"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-[190px] w-full object-cover opacity-95 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 sm:h-[220px]"
                    />
                    <div className="image-glass-overlay absolute inset-0" aria-hidden="true" />
                  </div>
                  <p className="mb-0 border-t border-accent/10 bg-ink/22 p-4 text-sm text-body/82 backdrop-blur-xl">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-4 py-8 sm:px-6 sm:py-10">
          <div className="mb-4 text-center">
            <Button to="/#contato" variant="outline" className="px-7 py-3.5 text-xs sm:text-sm">
              Entre em contato
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
