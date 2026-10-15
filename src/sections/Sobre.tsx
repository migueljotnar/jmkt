import Foliage from '../components/Foliage'
import { Button, Eyebrow, LeafMark } from '../components/UI'

function BotanicalSeal() {
  return (
    <div
      className="glass-pill absolute -left-6 top-[62%] flex h-20 w-20 items-center justify-center rounded-full shadow-[0_12px_35px_rgba(0,0,0,0.3)] sm:-left-9 sm:top-[58%] sm:h-28 sm:w-28"
      style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
    >
      <svg viewBox="0 0 120 120" className="h-full w-full text-accent" aria-hidden="true">
        <defs>
          <path id="seal-path" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
        </defs>
        <circle cx="60" cy="60" r="34" fill="rgba(20,33,26,.42)" stroke="currentColor" strokeOpacity=".28" />
        <text fill="currentColor" fontSize="6.5" letterSpacing="2">
          <textPath href="#seal-path">CRIE • CONTE • CONECTE • INSPIRE • </textPath>
        </text>
        <g transform="translate(43 39) scale(1.45)" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21V10" />
          <path d="M12 10c0-4 3-7 7-7 0 4-3 7-7 7Z" />
          <path d="M12 14c0-3.5-2.5-6-6-6 0 3.5 2.5 6 6 6Z" />
        </g>
      </svg>
    </div>
  )
}

export default function Sobre() {
  return (
    <section id="sobre" className="relative z-20 px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      <Foliage className="absolute -right-24 -top-28 hidden h-[36rem] w-[21rem] opacity-20 md:block lg:w-[24rem] lg:opacity-[.26]" />
      <div className="absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-accent/8 blur-[90px]" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:justify-center lg:gap-20">
          <div className="relative w-full max-w-[390px] shrink-0">
            <div className="glass-card rounded-3xl p-2">
              <div className="about-portrait">
                <img
                  src="/Imagens/Index/Foto-sobre-recorte-v3.webp"
                  alt="Jessyane Soares"
                  loading="lazy"
                  width={800}
                  height={1202}
                  className="about-portrait__image"
                />
                <span className="about-portrait__glass-contour" aria-hidden="true" />
              </div>
            </div>
            <BotanicalSeal />
          </div>

          <div className="max-w-[540px] text-center lg:text-left">
            <Eyebrow className="justify-center lg:justify-start">Bastidores &amp; Processo</Eyebrow>
            <h2 className="section-title">
              Do roteiro ao feed.{' '}
              <span className="highlight block mt-1">Muito prazer, Jessyane.</span>
            </h2>
            <LeafMark className="mb-5 justify-center lg:justify-start" />
            <p className="section-lead">
              Se você já perdeu tempo tentando conciliar fotógrafo, videomaker e social media ou
              sofreu com prazos não cumpridos, o meu trabalho foi pensado para você.
            </p>
            <p className="section-lead">
              Cuido de todo o ciclo visual da sua marca: alinho a estratégia, crio os roteiros, vou
              até o seu espaço para captar fotos e vídeos com direção estética apurada e entrego a
              grade das suas redes pronta e organizada.
            </p>
            <p className="section-lead">
              Sem enrolação, sem ruído de comunicação e com pontualidade rigorosa em cada entrega.
            </p>
            <p className="mb-8 text-lg font-semibold text-accent/90">
              Pronto para profissionalizar sua presença digital?
            </p>
            <Button href="#portfolio" variant="outline">
              Conhecer meu trabalho
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
