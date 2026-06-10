import { Link } from 'react-router-dom'
import type { ServiceData } from '../data/services'
import  Header from  './Header'
import Footer from './Footer'

interface ServicePageProps {
  service: ServiceData
}
 
// Este componente é o "molde" para todas as 6 páginas de serviço.
// Cada página passa seus dados e o visual é gerado automaticamente.
export default function ServicePage({ service }: ServicePageProps) {
  return (
    <div className="bg-[#FBF9F7]">
      <Header />
 
      <main>
        {/* Seção do título e vídeo */}
        <section className="max-w-1100px mx-auto px-8 py-16">
          <h2 className="text-4xl text-center mb-8">{service.title}</h2>
 
          {/* Container responsivo para vídeo 16:9 */}
          {/* O truque do padding-bottom: 56.25% mantém a proporção em qualquer tela */}
          <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={service.videoUrl}
              title={service.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
 
        {/* Galeria de fotos */}
        <section className="max-w-1100px mx-auto px-8 py-16">
          <h3 className="text-2xl mb-6">Galeria de Fotos</h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            {service.gallery.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded shadow-[0_5px_15px_rgba(0,0,0,0.1)] overflow-hidden text-center"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-200px object-cover"
                />
                <p className="p-4 mb-0">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
 
        {/* Botão de contato */}
        <section className="max-w-1100px mx-auto px-8 py-8">
          <div className="text-center mb-8">
            <Link
              to="/#contato"
              className="inline-block bg-[#A1887F] text-white px-7 py-3 rounded no-underline font-bold transition-colors duration-300 hover:bg-[#8D6E63]"
            >
              Entre em contato
            </Link>
          </div>
        </section>
      </main>
 
      <Footer />
    </div>
  )
}