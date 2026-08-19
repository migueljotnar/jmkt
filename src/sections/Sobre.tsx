import Foliage from '../components/Foliage'
import { Button, Eyebrow, LeafMark } from '../components/UI'

function BotanicalSeal() {
  return (
    <div
      className="glass-pill absolute left-1 top-[58%] flex h-24 w-24 items-center justify-center rounded-full shadow-[0_12px_35px_rgba(0,0,0,0.3)] sm:-left-9 sm:h-28 sm:w-28"
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
      <div className="glass-panel relative z-10 mx-auto max-w-[1120px] rounded-[1.65rem] px-6 py-10 sm:px-10 sm:py-12 md:p-12 lg:p-14">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-20">
          <div className="relative w-full max-w-[390px] flex-shrink-0">
            <div className="glass-card rounded-[1.2rem] p-2">
              <div className="relative overflow-hidden rounded-[.9rem]">
                <img
                  src="/Imagens/Index/Foto-sobre.jpeg"
                  alt="Jessyane Soares"
                  loading="lazy"
                  className="h-[390px] w-full object-cover object-top shadow-[0_20px_50px_rgba(0,0,0,.22)] sm:h-[480px] md:h-[500px]"
                />
              </div>
            </div>
            <BotanicalSeal />
          </div>

          <div className="max-w-[510px] text-center lg:text-left">
            <Eyebrow className="justify-center lg:justify-start">Sobre mim</Eyebrow>
            <h2 className="mb-5 text-[clamp(2.7rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.025em]">
              Olá, eu sou
              <br />
              <span className="text-accent">a Jessyane!</span>
            </h2>
            <LeafMark className="mb-5 justify-center lg:justify-start" />
            <p className="text-sm text-body/88 sm:text-base">
              Com anos de experiência no mundo do audiovisual e design, busco sempre capturar a
              essência de cada projeto, criando narrativas visuais que encantam e comunicam.
            </p>
            <p className="text-sm text-body/88 sm:text-base">
              Minha paixão é dar vida às ideias, seja em um filme, um vídeo institucional ou uma
              peça de design.
            </p>
            <p className="mb-8 font-['Playfair_Display',serif] text-lg text-accent">Vamos criar algo incrível juntos?</p>
            <Button href="#servicos" variant="outline" className="px-7 py-3.5 text-xs sm:text-sm">
              Conheça mais sobre mim
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
