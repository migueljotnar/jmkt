import { useState, type FormEvent } from 'react'
 
export default function Contato() {
  // Estado de cada campo do formulário
  const [nome, setNome] = useState('')
  const [servico, setServico] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [isLoading, setIsLoading] = useState(false)
 
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
 
    if (!nome || !servico || !mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }
 
    // Monta a mensagem do WhatsApp
    const numero = '5568999582647'
    const texto = `Olá! Meu nome é *${nome}*.
Tenho interesse no serviço: *${servico}*.

Mensagem: ${mensagem}`
 
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`
 
    setIsLoading(true)
    window.open(url, '_blank')
 
    // Restaura o botão após 2 segundos
    setTimeout(() => setIsLoading(false), 2000)
  }
 
  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#A1887F] focus:border-transparent bg-white text-[#4E443A] shadow-sm'
 
  const labelClass = 'block mb-2 font-semibold text-[#4E443A] text-sm sm:text-base'
 
  const opcoeServicos = [
    'Gastronomia',
    'Gestão de Perfil',
    'Filmmaker',
    'Videomaker',
    'Fotos Pessoais',
    'Criação de Sites',
  ]
 
  return (
    <section id="contato" className="max-w-[1100px] mx-auto px-4 sm:px-8 py-12 sm:py-20 text-center">
      <div className="mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-4 text-[#4E443A]">Entre em Contato</h2>
        <p className="max-w-[600px] mx-auto text-base sm:text-lg text-[#4E443A]/80 px-4">
          Gostou do que viu? Preencha o formulário e envie uma mensagem diretamente para o WhatsApp.
        </p>
      </div>
 
      <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto text-left bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100">
        {/* Campo Nome */}
        <div className="mb-5 sm:mb-6">
          <label htmlFor="nome" className={labelClass}>Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            aria-label="Digite seu nome completo"
            className={inputClass}
            placeholder="Seu nome completo"
          />
        </div>
 
        {/* Select de Serviços */}
        <div className="mb-5 sm:mb-6">
          <label htmlFor="servicos-select" className={labelClass}>Serviços de Interesse:</label>
          <select
            id="servicos-select"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            required
            aria-label="Selecione um serviço de interesse"
            className={`${inputClass} appearance-none cursor-pointer`}
            // Seta personalizada no select
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='%234E443A' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.2em',
            }}
          >
            <option value="" disabled>Selecione um serviço</option>
            {opcoeServicos.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
 
        {/* Campo Mensagem */}
        <div className="mb-6 sm:mb-8">
          <label htmlFor="mensagem" className={labelClass}>Mensagem:</label>
          <textarea
            id="mensagem"
            rows={4}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
            aria-label="Digite sua mensagem"
            className={`${inputClass} resize-y min-h-[120px]`}
            placeholder="Como podemos te ajudar?"
          />
        </div>
 
        {/* Botão de envio */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 text-base sm:text-lg bg-[#A1887F] text-white rounded-lg font-bold cursor-pointer transition-all duration-300 hover:bg-[#8D6E63] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {isLoading ? 'Redirecionando...' : 'Enviar via WhatsApp'}
        </button>
      </form>
    </section>
  )
}
 