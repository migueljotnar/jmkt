import { useState, type FormEvent } from 'react'
import { useLocation } from 'react-router-dom'
import Foliage from '../components/Foliage'
import { Button, IconCircle } from '../components/UI'
import { services } from '../data/services'

// Versão monocromática do símbolo oficial para acompanhar a paleta dourada.
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.81 9.81 0 0 1 6.986 2.894 9.825 9.825 0 0 1 2.9 6.988c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

const numeroWhatsApp = '5568999582647'

// Derivado de services.ts para não manter uma segunda lista de nomes em sincronia.
const servicosDisponiveis = services.map((s) => s.title)

const contactItems = [
  {
    label: 'Fale comigo no WhatsApp',
    href: `https://wa.me/${numeroWhatsApp}`,
    icon: <WhatsAppIcon />,
  },
  {
    label: '@jessyanesoaresmkt',
    href: 'https://www.instagram.com/jessyanesoaresmkt/',
    icon: <InstagramIcon />,
  },
]

const inputClass =
  'glass-field w-full rounded-lg px-4 py-3 text-sm text-cream placeholder:text-body/50 transition-all duration-300 focus:border-accent/45 focus:bg-ink/35 focus:outline-none focus:ring-1 focus:ring-accent/40'

const labelClass = 'mb-2 block text-[.7rem] font-bold uppercase tracking-[0.12em] text-cream/78'

export default function Contato() {
  const location = useLocation()
  const [nome, setNome] = useState('')
  const [tipoEmpresa, setTipoEmpresa] = useState('')
  const [instagram, setInstagram] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [servicosSelecionados, setServicosSelecionados] = useState<string[]>(() => {
    const serviceParam = new URLSearchParams(location.search).get('servico')
    const preSelecionado = services.find((s) => s.slug === serviceParam)
    return preSelecionado ? [preSelecionado.title] : []
  })
  const [isLoading, setIsLoading] = useState(false)

  const toggleServico = (servico: string) => {
    setServicosSelecionados((prev) =>
      prev.includes(servico) ? prev.filter((s) => s !== servico) : [...prev, servico]
    )
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!nome.trim() || !tipoEmpresa.trim() || !instagram.trim()) {
      alert('Por favor, preencha seu nome, o tipo de empresa/serviço e seu Instagram.')
      return
    }

    if (servicosSelecionados.length === 0) {
      alert('Por favor, selecione pelo menos um serviço que gostaria de contratar.')
      return
    }

    const listaServicos = servicosSelecionados.map((s) => `• ${s}`).join('\n')
    const textoMensagem = mensagem.trim()
      ? `\n\n💬 *Detalhes / Necessidades:*\n${mensagem.trim()}`
      : ''

    const texto = `Olá, Jessyane! Gostaria de solicitar um orçamento para o meu negócio.

👤 *Nome:* ${nome.trim()}
🏢 *Tipo de empresa / serviço:* ${tipoEmpresa.trim()}
📱 *Instagram:* ${instagram.trim()}

✨ *Serviços de interesse:*
${listaServicos}${textoMensagem}`

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`

    setIsLoading(true)
    window.open(url, '_blank', 'noopener,noreferrer')

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <section id="contato" className="relative px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      <span id="orcamento" className="scroll-mt-24" />
      <span id="contratar" className="scroll-mt-24" />
      <Foliage
        crop="left-bottom"
        className="absolute -left-20 bottom-[-5rem] hidden h-[35rem] w-[23rem] opacity-20 md:block lg:w-[27rem] lg:opacity-[.28]"
      />
      <Foliage className="absolute -right-24 -top-24 hidden h-[29rem] w-[18rem] opacity-[.11] md:block lg:w-[21rem] lg:opacity-[.16]" />
      <div className="absolute bottom-[8%] left-[12%] h-72 w-72 rounded-full bg-accent/8 blur-[100px]" aria-hidden="true" />
      <div className="glass-panel relative z-10 mx-auto max-w-[1120px] rounded-[1.65rem] px-6 py-9 sm:px-10 sm:py-11">
        <div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2 block">
              Contratação & Orçamento
            </span>
            <h2 className="mb-3 text-[clamp(2.4rem,4.5vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
              Vamos Criar Juntos?
            </h2>
            <div className="mb-4 flex items-center justify-center text-accent lg:justify-start" aria-hidden="true">
              <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            </div>
            <p className="mx-auto mb-9 max-w-[420px] text-sm text-body/88 sm:text-base lg:mx-0">
              Selecione os serviços que você precisa e responda ao breve questionário ao lado.
              Geramos uma mensagem pronta e estruturada direto para o WhatsApp!
            </p>

            <div className="flex flex-col items-center gap-5 lg:items-start">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-sm text-cream/90 transition-colors duration-300 hover:text-accent sm:text-base"
                >
                  <IconCircle size="sm" className="!h-10 !w-10 transition-transform duration-300 group-hover:scale-110">{item.icon}</IconCircle>
                  <span className="font-medium relative top-[1px]">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel-strong rounded-2xl p-5 text-left sm:p-7">
            <h3 className="mb-4 text-xl font-semibold text-cream">
              Questionário de Contratação
            </h3>

            {/* Seleção de Serviços */}
            <div className="mb-6">
              <span id="servicos-label" className={labelClass}>
                Selecione os serviços de interesse: <span className="text-accent">*</span>
              </span>
              <div role="group" aria-labelledby="servicos-label" className="flex flex-wrap gap-2">
                {servicosDisponiveis.map((s) => {
                  const isSelected = servicosSelecionados.includes(s)
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleServico(s)}
                      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'border border-accent bg-accent/25 text-cream shadow-[0_0_15px_rgba(183,173,105,0.25)]'
                          : 'border border-white/10 bg-white/5 text-body/80 hover:border-accent/40 hover:text-cream'
                      }`}
                      aria-pressed={isSelected}
                    >
                      <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
                        isSelected ? 'bg-accent text-ink font-bold' : 'border border-white/20'
                      }`}>
                        {isSelected ? '✓' : '+'}
                      </span>
                      {s}
                    </button>
                  )
                })}
              </div>
              {servicosSelecionados.length === 0 && (
                <p className="mt-2 text-xs text-accent/75">
                  Clique nos serviços que deseja incluir no orçamento.
                </p>
              )}
            </div>

            {/* Questionário do Cliente */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 mb-4">
              <div>
                <label htmlFor="nome" className={labelClass}>
                  Seu Nome: <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  className={inputClass}
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="instagram" className={labelClass}>
                  Instagram da Empresa / Marca: <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="instagram"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  required
                  className={inputClass}
                  placeholder="@seu.perfil"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="tipo-empresa" className={labelClass}>
                Tipo de empresa ou serviço que presta: <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="tipo-empresa"
                value={tipoEmpresa}
                onChange={(e) => setTipoEmpresa(e.target.value)}
                required
                className={inputClass}
                placeholder="Ex: Restaurante, Consultório, Moda, Advocacia..."
              />
            </div>

            <div className="mb-6">
              <label htmlFor="mensagem" className={labelClass}>
                Detalhes ou necessidades do projeto (opcional):
              </label>
              <textarea
                id="mensagem"
                rows={3}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className={`${inputClass} resize-y min-h-[85px]`}
                placeholder="Conte um pouco sobre o que você precisa ou tem em mente..."
              />
            </div>

            <Button
              type="submit"
              variant="solid"
              disabled={isLoading}
              icon={<WhatsAppIcon />}
              className="w-full !rounded-lg py-3.5 text-xs sm:text-sm [&_svg]:h-4 [&_svg]:w-4"
            >
              {isLoading ? 'Redirecionando...' : 'Solicitar Orçamento no WhatsApp'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
