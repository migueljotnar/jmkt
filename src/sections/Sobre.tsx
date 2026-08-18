import { Button, Eyebrow } from '../components/UI'

export default function Sobre() {
  return (
    <section id="sobre" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="bg-ink-soft border border-hairline rounded-3xl px-6 py-12 sm:px-10 sm:py-16 md:p-16">
        <div className="flex flex-col md:flex-row items-center gap-14 md:gap-16">
          <div className="relative w-full max-w-[380px] flex-shrink-0">
            <img
              src="/Imagens/Index/Foto-sobre.jpeg"
              alt="Jessyane Soares"
              className="w-full h-[380px] sm:h-[460px] md:h-[520px] object-cover rounded-2xl"
            />
            <div className="absolute -bottom-6 -left-6 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-ink border border-hairline shadow-[0_10px_25px_rgba(0,0,0,0.35)] flex items-center justify-center">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="text-accent">
                <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="text-center md:text-left">
            <Eyebrow className="justify-center md:justify-start">Sobre mim</Eyebrow>
            <h2 className="text-3xl sm:text-4xl leading-tight mb-6">
              Olá, eu sou
              <br />
              <span className="text-accent">a Jessyane!</span>
            </h2>
            <p className="text-body">
              Com anos de experiência no mundo do audiovisual e design, busco sempre capturar a
              essência de cada projeto, criando narrativas visuais que encantam e comunicam. Minha
              paixão é dar vida às ideias, seja em um filme, um vídeo institucional ou uma peça de
              design.
            </p>
            <p className="text-accent font-semibold mb-8">Vamos criar algo incrível juntos?</p>
            <Button href="#servicos" variant="outline" className="px-7 py-3.5 text-sm sm:text-base">
              Conheça mais sobre mim
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
