export default function Sobre() {
  return (
    <section id="sobre" className="max-w-[1100px] mx-auto px-8 py-20">
      <h2 className="text-4xl text-center mb-8">Sobre Mim</h2>
 
      {/* flex-col em mobile, flex-row em telas maiores */}
      <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <img
          src="/Imagens/Index/Foto-sobre.jpeg"
          alt="Jessyane Soares"
          className="w-[400px] h-[550px] object-cover rounded flex-shrink-0"
        />
        <div>
          <h3 className="text-2xl mb-2">Olá, eu sou a Jessyane!</h3>
          <p>
            Com anos de experiência no mundo do audiovisual e design, busco sempre capturar a
            essência de cada projeto, criando narrativas visuais que encantam e comunicam. Minha
            paixão é dar vida às ideias, seja em um filme, um vídeo institucional ou uma peça de
            design.
          </p>
          <p>Vamos criar algo incrível juntos?</p>
        </div>
      </div>
    </section>
  )
}