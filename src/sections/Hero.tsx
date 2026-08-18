import { Button, Eyebrow } from '../components/UI'

export default function Hero() {
  return (
    <section id="inicio" className="bg-ink">
      {/* Sem max-width: a coluna da foto ocupa até a borda da tela no desktop */}
      <div className="grid md:grid-cols-2 md:h-screen">
        <div className="order-2 md:order-1 flex items-center">
          <div className="w-full max-w-[560px] mx-auto md:mr-0 md:ml-auto px-4 sm:px-8 md:pl-8 lg:pl-16 md:pr-10 lg:pr-14 py-14 md:py-0 text-center md:text-left">
            <Eyebrow className="justify-center md:justify-start">Bem-vinda ao meu mundo</Eyebrow>
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6">
              Transformando Momentos em <span className="italic text-accent">Memórias</span>
            </h1>
            <p className="text-base sm:text-lg text-body max-w-[460px] mx-auto md:mx-0 mb-8">
              Designer, Filmmaker e Videomaker apaixonada por contar histórias através de lentes e da
              criatividade.
            </p>
            <Button href="#contato" variant="outline" className="px-7 py-3.5 text-sm sm:text-base">
              Vamos conversar
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2 relative h-[320px] sm:h-[420px] md:h-auto">
          <img
            src="/Imagens/Index/Background-inicio.png"
            alt="Jessyane Soares"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
          />
          {/* Funde a foto ao verde de fundo do lado do texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/25 to-transparent" />
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-ink via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
