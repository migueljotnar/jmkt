import Foliage from '../components/Foliage'
import { Button, Eyebrow } from '../components/UI'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink lg:h-svh lg:min-h-[700px]">
      <div className="relative h-[360px] pt-20 sm:h-[450px] sm:pt-24 lg:absolute lg:inset-0 lg:h-full lg:pt-0">
        <img
          src="/Imagens/Index/Background-inicio-verde.webp"
          alt="Jessyane Soares ao lado de uma xícara de café"
          fetchPriority="high"
          className="h-full w-full object-cover object-[75%_top] brightness-[1.01] contrast-[1.02] saturate-[1] lg:object-[68%_top] xl:object-[70%_top]"
        />
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink via-ink/60 to-transparent lg:hidden" />
      </div>

      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,.15)_100%)] lg:block" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(5,15,10,.48)_0%,rgba(5,15,10,.22)_35%,transparent_65%)] lg:block" />
      {/* Transição para a próxima seção. Várias paradas suavizam a rampa para
          o início do degradê não aparecer como uma linha sobre áreas claras da foto. */}
      <div className="absolute inset-x-0 bottom-0 hidden h-28 bg-[linear-gradient(to_top,rgba(7,23,15,.82)_0%,rgba(7,23,15,.52)_22%,rgba(7,23,15,.26)_48%,rgba(7,23,15,.09)_74%,transparent_100%)] lg:block" />

      <Foliage
        crop="left-bottom"
        mirrored
        className="absolute -right-20 bottom-[-3rem] z-[5] hidden h-[34rem] w-[23rem] opacity-50 lg:block xl:w-[27rem] xl:opacity-60"
      />

      <div className="relative z-10 mx-auto flex min-h-[400px] max-w-[1240px] items-center px-5 pb-20 pt-2 sm:px-8 lg:h-full lg:min-h-0 lg:py-0">
        <div className="mx-auto w-full max-w-[540px] text-center lg:mx-0 lg:ml-[15%] lg:text-left">
          <Eyebrow className="justify-center lg:justify-start">Direção Criativa &amp; Social Media</Eyebrow>
          <h1 className="page-title">
            Sua marca com presença de verdade.{' '}
            <span className="highlight block mt-1">Do clique ao feed.</span>
          </h1>
          <p className="mx-auto mb-8 w-full max-w-[460px] text-base font-light text-body/90 lg:mx-0 lg:text-[1.05rem]">
            Da captação de foto e vídeo à estratégia de redes sociais: identidade visual completa
            para negócios que querem se destacar.
          </p>
          <Button href="#contato" variant="outline">
            Quero posicionar minha marca
          </Button>
        </div>
      </div>
    </section>
  )
}