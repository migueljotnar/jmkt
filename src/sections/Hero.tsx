import { Link } from 'react-router-dom'
 
export default function Hero() {
  return (
    <section
      id="inicio"
      // h-[70vh] em mobile, h-screen em telas maiores
      className="h-[70vh] md:h-screen flex justify-center items-center text-center text-white px-4"
      style={{
        // Gradiente escuro + imagem de fundo (mantido em style pois é dinâmico com url)
        background:
          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/Imagens/Index/Background-inicio.png') no-repeat center center / cover",
      }}
    >
      <div>
        <h1 className="text-white text-5xl md:text-6xl mb-4">
          Transformando Momentos em Memórias
        </h1>
        <p className="text-lg md:text-xl max-w-[600px] mx-auto mb-8">
          Designer, Filmmaker e Videomaker apaixonada por contar histórias através de lentes e da
          criatividade.
        </p>
        <Link
          to="/#servicos"
          className="inline-block bg-[#A1887F] text-white px-7 py-3 rounded no-underline font-bold transition-colors duration-300 hover:bg-[#8D6E63]"
        >
          Veja nossos serviços
        </Link>
      </div>
    </section>
  )
}