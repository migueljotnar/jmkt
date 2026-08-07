import { Link } from 'react-router-dom'
import { services, type ServiceData } from '../data/services'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
 
// Card individual de cada serviço com animação de entrada e hover
function ServiceCard({ service }: { service: ServiceData }) {
  const { ref, isVisible } = useScrollAnimation()
 
  return (
    // "group" permite que filhos reajam ao hover do card inteiro
    <div
      ref={ref}
      className={`group bg-white rounded shadow-[0_5px_15px_rgba(0,0,0,0.1)] overflow-hidden cursor-pointer relative
        transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
    >
      {/* Imagem que escala no hover */}
      <img
        src={service.coverImage}
        alt={service.coverAlt}
        className="w-full h-[220px] sm:h-[280px] md:h-[330px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
 
      <div className="p-3 sm:p-4 text-center">
        <h3 className="text-xl sm:text-2xl mb-2">{service.title}</h3>
        <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">{service.description}</p>
 
        {/* Botão que aparece apenas no hover */}
        <Link
          to={`/servicos/${service.slug}`}
          className="inline-block bg-[#A1887F] text-white px-5 py-2 sm:px-7 sm:py-3 rounded no-underline font-bold text-sm sm:text-base
            opacity-100 translate-y-0
            md:opacity-0 md:translate-y-5
            md:group-hover:opacity-100 md:group-hover:translate-y-0
            transition-all duration-[400ms]"
        >
          Veja mais
        </Link>
      </div>
    </div>
  )
}
 
export default function Servicos() {
  return (
    <section id="servicos" className="max-w-[1100px] mx-auto px-4 sm:px-8 py-10 sm:py-16">
      <h2 className="text-3xl sm:text-4xl text-center mb-6 sm:mb-8">Nossos Serviços</h2>
 
      {/* Grid responsivo: adapta as colunas ao tamanho da tela */}
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 sm:gap-6">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  )
}