import Foliage from '../components/Foliage'
import { Button, Eyebrow } from '../components/UI'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#151310] lg:h-[min(820px,100svh)] lg:min-h-[680px]">
      <div className="relative h-[300px] pt-16 sm:h-[380px] lg:absolute lg:inset-0 lg:h-full lg:pt-0">
        <img
          src="/Imagens/Index/Background-inicio-neutro.png"
          alt="Jessyane Soares ao lado de uma xícara de café"
          fetchPriority="high"
          className="h-full w-full object-cover object-[70%_center] brightness-[1.01] contrast-[1.02] saturate-[1] lg:object-center"
        />
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#151310] via-[#151310]/50 to-transparent lg:hidden" />
      </div>

      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,.12)_100%)] lg:block" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(8,7,6,.82)_0%,rgba(12,11,10,.56)_40%,rgba(10,9,8,.08)_68%,transparent_100%)] lg:block" />
      {/* Escurece o rodapé até o tom do body: a seção Sobre sobe por cima (-mt-20)
          com um painel de vidro borrado, e sem isso o backdrop-filter "esfumaça"
          a transição abrupta entre a foto clara e o fundo escuro, criando uma
          mancha visível bem no topo do card. */}
      <div className="absolute inset-x-0 bottom-0 hidden h-56 bg-gradient-to-t from-ink from-15% via-ink/95 via-45% to-transparent lg:block" />
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
            Designer, Filmmaker e Videomaker apaixonada por contar histórias através de lentes e da
            criatividade.
          </p>
          <Button href="#contato" variant="outline" className="px-7 py-3.5 text-xs sm:text-sm">
            Vamos conversar
          </Button>
        </div>
      </div>
    </section>
  )
}
