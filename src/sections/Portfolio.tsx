import { Eyebrow, LeafMark } from '../components/UI'

interface PortfolioPhoto {
  src: string
  alt: string
}

const portfolioPhotos: PortfolioPhoto[] = [
  { src: '/Imagens/Index/gastronomia-principal.webp', alt: 'Fotografia gastronômica: prato com peixe e limões visto de cima' },
  { src: '/Imagens/Index/videomaker-principal.webp', alt: 'Retrato sorridente para produção de vídeo institucional' },
  { src: '/Imagens/Index/pessoais-principal.webp', alt: 'Ensaio autoral com modelo sentada em estúdio' },
  { src: '/Imagens/Index/gestao-de-perfil-principal.webp', alt: 'Perfil do Instagram com grade de publicações organizada' },
  { src: '/Imagens/Index/Filmmaker-principal.webp', alt: 'Bastidor de filmagem: tatuador em ação em plano fechado' },
]

// Uma "volta" do carrossel repete as fotos para cobrir telas largas (até ~3500px)
// sem buracos. A faixa renderiza a volta duas vezes e a animação desloca
// exatamente meia faixa, então o recomeço do loop é imperceptível.
const lap = [...portfolioPhotos, ...portfolioPhotos]
const track = [...lap, ...lap]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
      <div className="absolute left-1/2 top-1/2 h-80 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/7 blur-[110px]" aria-hidden="true" />

      <div className="relative z-10 mb-8 px-4 text-center sm:mb-10">
        <Eyebrow align="center">Portfólio</Eyebrow>
        <h2 id="portfolio-title" className="section-title mb-4">
          Trabalhos em <span className="highlight">destaque.</span>
        </h2>
        <LeafMark className="justify-center" />
      </div>

      <div className="portfolio-marquee relative z-10" role="region" aria-labelledby="portfolio-title">
        <ul className="portfolio-marquee__track flex w-max list-none">
          {track.map((photo, index) => {
            // Só a primeira ocorrência de cada foto é anunciada por leitores de tela.
            const isRepeat = index >= portfolioPhotos.length
            return (
              <li key={index} className="shrink-0 pr-4 sm:pr-5" aria-hidden={isRepeat || undefined}>
                <div className="group glass-card aspect-[4/5] h-72 overflow-hidden rounded-2xl sm:h-[22rem] lg:h-[26rem]">
                  <img
                    src={photo.src}
                    alt={isRepeat ? '' : photo.alt}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full select-none object-cover brightness-[.88] transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-100"
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
