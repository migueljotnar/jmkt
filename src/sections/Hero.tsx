import Foliage from '../components/Foliage'
import { Button, Eyebrow } from '../components/UI'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink lg:h-[min(840px,100svh)] lg:min-h-[700px]">
      <div className="relative h-[360px] pt-20 sm:h-[450px] sm:pt-24 lg:absolute lg:inset-0 lg:h-full lg:pt-0">
        <img
          src="/Imagens/Index/Background-inicio-verde.png"
          alt="Jessyane Soares ao lado de uma xícara de café"
          fetchPriority="high"
          className="h-full w-full object-cover object-[75%_top] brightness-[1.01] contrast-[1.02] saturate-[1] lg:object-[68%_top] xl:object-[70%_top]"
        />
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink via-ink/60 to-transparent lg:hidden" />
      </div>

      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,.15)_100%)] lg:block" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(5,15,10,.48)_0%,rgba(5,15,10,.22)_35%,transparent_65%)] lg:block" />
      <div className="absolute inset-x-0 bottom-0 hidden h-32 bg-gradient-to-t from-ink via-ink/55 to-transparent lg:block" />

      <Foliage
        crop="left-bottom"
        mirrored
        className="absolute -right-20 bottom-[-8rem] hidden h-[34rem] w-[23rem] opacity-[.18] blur-[1px] lg:block xl:w-[27rem] xl:opacity-[.22]"
      />

      <div className="relative z-10 mx-auto flex min-h-[400px] max-w-[1240px] items-center px-5 pb-20 pt-2 sm:px-8 lg:h-full lg:min-h-0 lg:py-0">
        <div className="mx-auto w-full max-w-[490px] text-center lg:mx-0 lg:ml-[15%] lg:text-left">
          <Eyebrow className="justify-center lg:justify-start">Bem-vinda ao meu mundo</Eyebrow>
          <h1 className="mb-6 text-[clamp(2.7rem,6vw,4.35rem)] font-semibold leading-[1.02] tracking-[-0.025em]">
            Transformando
            <br />
            Momentos em <span className="block italic text-accent">Memórias</span>
          </h1>
          <p className="mx-auto mb-8 w-full max-w-[430px] text-base font-light text-body/90 lg:mx-0 lg:text-[1.05rem]">
            Produção de foto, vídeo e design para marcas que querem se comunicar com
            identidade própria.
          </p>
          <Button href="#contato" variant="outline" className="px-7 py-3.5 text-xs sm:text-sm">
            Vamos conversar
          </Button>
        </div>
      </div>
    </section>
  )
}
