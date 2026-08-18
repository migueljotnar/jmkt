import { useState, type FormEvent } from 'react'
import { Button, Eyebrow, IconCircle } from '../components/UI'

// Ícone oficial do WhatsApp (balão + fone), em verde de marca — igual ao
// usado no próprio app — em vez de um traço genérico.
function WhatsAppIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r="22" fill="#25D366" />
      <path
        fill="#fff"
        d="M22 10.5c-6.35 0-11.5 5.15-11.5 11.5 0 2.02.53 3.97 1.53 5.69L10.5 33.5l5.98-1.57a11.44 11.44 0 0 0 5.52 1.41h.01c6.35 0 11.5-5.15 11.5-11.5S28.35 10.5 22 10.5Zm0 21.03h-.01a9.52 9.52 0 0 1-4.85-1.33l-.35-.21-3.6.95.96-3.5-.23-.36a9.53 9.53 0 0 1-1.46-5.08c0-5.27 4.29-9.55 9.56-9.55 2.55 0 4.95 1 6.76 2.8a9.5 9.5 0 0 1 2.79 6.76c0 5.27-4.29 9.52-9.57 9.52Z"
      />
      <path
        fill="#fff"
        d="M27.7 25.09c-.31-.16-1.83-.9-2.11-1.01-.28-.1-.49-.16-.7.16-.21.31-.8 1-.98 1.21-.18.21-.36.24-.67.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.74-2.16-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.55.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.31-.25-.61-.51-.52-.7-.53-.18-.01-.39-.01-.6-.01a1.15 1.15 0 0 0-.83.39c-.28.31-1.09 1.06-1.09 2.59s1.12 3.01 1.27 3.22c.16.21 2.2 3.36 5.33 4.71.74.32 1.32.51 1.78.66.75.24 1.43.2 1.96.12.6-.09 1.83-.75 2.09-1.47.26-.73.26-1.35.18-1.48-.08-.13-.28-.21-.6-.36Z"
      />
    </svg>
  )
}

// Ícone oficial do Instagram (câmera + gradiente de marca) — mesmo
// tratamento do WhatsApp, em vez do traço genérico de antes.
function InstagramIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
      <defs>
        <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="10%" stopColor="#FFDD55" />
          <stop offset="50%" stopColor="#FF543E" />
          <stop offset="100%" stopColor="#C837AB" />
        </radialGradient>
      </defs>
      <circle cx="22" cy="22" r="22" fill="url(#ig-gradient)" />
      <rect x="13" y="13" width="18" height="18" rx="6" fill="none" stroke="#fff" strokeWidth={1.8} />
      <circle cx="22" cy="22" r="5" fill="none" stroke="#fff" strokeWidth={1.8} />
      <circle cx="27.3" cy="16.7" r="1.15" fill="#fff" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

const numeroWhatsApp = '5568999582647'

// O e-mail ainda não existe no projeto — fica como placeholder visível
// (sem link) até a Jessyane passar o dado real.
const contactItems = [
  {
    label: 'Fale comigo no WhatsApp',
    href: `https://wa.me/${numeroWhatsApp}`,
    icon: <WhatsAppIcon />,
    // Os ícones do WhatsApp e do Instagram já vêm com o próprio círculo/gradiente
    // da marca, então não usam o IconCircle genérico (cinza/dourado) do e-mail.
    branded: true,
  },
  {
    label: '@jessyanesoaresmkt',
    href: 'https://www.instagram.com/jessyanesoaresmkt/',
    icon: <InstagramIcon />,
    branded: true,
  },
  {
    label: 'seu@email.com',
    href: undefined,
    icon: <MailIcon />,
  },
]

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
    const texto = `Olá! Meu nome é *${nome}*.
Tenho interesse no serviço: *${servico}*.

Mensagem: ${mensagem}`

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`

    setIsLoading(true)
    window.open(url, '_blank')

    // Restaura o botão após 2 segundos
    setTimeout(() => setIsLoading(false), 2000)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg text-sm sm:text-base transition-all duration-300 border border-hairline bg-ink-elevated text-cream placeholder:text-body/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'

  const labelClass = 'block mb-2 font-semibold text-cream text-sm sm:text-base'

  const opcoeServicos = [
    'Gastronomia',
    'Gestão de Perfil',
    'Filmmaker',
    'Videomaker',
    'Fotos Pessoais',
    'Criação de Sites',
  ]

  return (
    <section id="contato" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="bg-ink-soft border border-hairline rounded-3xl px-6 py-12 sm:px-10 sm:py-16 md:p-16">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Coluna esquerda: intro + contatos */}
          <div className="text-center lg:text-left">
            <Eyebrow className="justify-center lg:justify-start">Fale comigo</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">Entre em Contato</h2>
            <p className="text-body max-w-[440px] mx-auto lg:mx-0 mb-10">
              Gostou do que viu? Preencha o formulário e envie uma mensagem diretamente para o
              WhatsApp.
            </p>

            <div className="flex flex-col gap-5 items-center lg:items-start">
              {contactItems.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-cream transition-colors duration-300 hover:text-accent"
                  >
                    {item.branded ? item.icon : <IconCircle>{item.icon}</IconCircle>}
                    <span className="font-semibold">{item.label}</span>
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-4 text-cream/70">
                    {item.branded ? item.icon : <IconCircle>{item.icon}</IconCircle>}
                    <span className="font-semibold">{item.label}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Coluna direita: formulário */}
          <form onSubmit={handleSubmit} className="text-left">
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
                  backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='%23F6F3EA' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
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
            <Button
              type="submit"
              variant="solid"
              disabled={isLoading}
              icon={null}
              className="w-full py-4 text-base sm:text-lg"
            >
              {isLoading ? 'Redirecionando...' : 'Enviar via WhatsApp'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
