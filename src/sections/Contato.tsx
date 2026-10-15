import { useRef, useState, type FormEvent } from 'react'
import { useLocation } from 'react-router-dom'
import Foliage from '../components/Foliage'
import { Button, Eyebrow } from '../components/UI'
import { services } from '../data/services'

// Versão monocromática do símbolo oficial para acompanhar a paleta dourada.
function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.81 9.81 0 0 1 6.986 2.894 9.825 9.825 0 0 1 2.9 6.988c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

const numeroWhatsApp = '5568999582647'

type CampoObrigatorio = 'nome' | 'instagram' | 'segmento'

const mensagensDeErro: Record<CampoObrigatorio | 'servicos', string> = {
  servicos: 'Escolha pelo menos um serviço para montar a proposta.',
  nome: 'Informe seu nome.',
  instagram: 'Informe o @ da sua marca.',
  segmento: 'Conte em que segmento sua marca atua.',
}

const labelClass = 'mb-2 block text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-cream/72'

const inputClass =
  'w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-cream placeholder:text-white/30 transition-all duration-300 focus:border-accent focus:outline-none'

const chipBase =
  'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70'

export default function Contato() {
  const location = useLocation()
  const [campos, setCampos] = useState({ nome: '', instagram: '', segmento: '', detalhes: '' })
  const [erros, setErros] = useState<Partial<Record<CampoObrigatorio | 'servicos', boolean>>>({})
  const [selecionados, setSelecionados] = useState<string[]>(() => {
    // Chega pré-selecionado quando o visitante vem de uma página de serviço (?servico=slug).
    const slug = new URLSearchParams(location.search).get('servico')
    return services.some((s) => s.slug === slug) && slug ? [slug] : []
  })
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const alterarCampo = (campo: keyof typeof campos, valor: string) => {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    if (valor.trim()) setErros((prev) => ({ ...prev, [campo]: false }))
  }

  const toggleServico = (slug: string) => {
    setSelecionados((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]))
    setErros((prev) => ({ ...prev, servicos: false }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const novosErros = {
      servicos: selecionados.length === 0,
      nome: !campos.nome.trim(),
      instagram: !campos.instagram.trim(),
      segmento: !campos.segmento.trim(),
    }
    setErros(novosErros)

    const primeiroErro = (Object.keys(novosErros) as (keyof typeof novosErros)[]).find((k) => novosErros[k])
    if (primeiroErro) {
      const alvo = primeiroErro === 'servicos' ? '[data-servico]' : `#${primeiroErro}`
      formRef.current?.querySelector<HTMLElement>(alvo)?.focus()
      return
    }

    const instagram = campos.instagram.trim()
    const handle = instagram.startsWith('@') ? instagram : `@${instagram}`
    const listaServicos = services
      .filter((s) => selecionados.includes(s.slug))
      .map((s) => `• ${s.title}`)
      .join('\n')
    const detalhes = campos.detalhes.trim() ? `\n\n💬 *Detalhes / objetivos:*\n${campos.detalhes.trim()}` : ''

    const texto = `Olá, Jessyane! Gostaria de solicitar um orçamento para a minha marca.

👤 *Nome:* ${campos.nome.trim()}
📱 *Instagram:* ${handle}
🏢 *Segmento:* ${campos.segmento.trim()}

✨ *Serviços de interesse:*
${listaServicos}${detalhes}`

    setIsLoading(true)
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener,noreferrer')
    setTimeout(() => setIsLoading(false), 2000)
  }

  const campoTexto = (id: CampoObrigatorio, label: string, placeholder: string, autoComplete?: string) => (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClass}>{label}</label>
      <input
        type="text"
        id={id}
        value={campos[id]}
        onChange={(e) => alterarCampo(id, e.target.value)}
        autoComplete={autoComplete}
        aria-invalid={erros[id] || undefined}
        aria-describedby={erros[id] ? `${id}-erro` : undefined}
        className={`${inputClass} ${erros[id] ? 'border-danger' : 'border-white/10'}`}
        placeholder={placeholder}
      />
      {erros[id] && <p id={`${id}-erro`} className="mb-0 mt-1.5 text-xs text-danger">{mensagensDeErro[id]}</p>}
    </div>
  )

  return (
    <section id="contato" className="relative px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      <span id="orcamento" className="scroll-mt-24" />
      <span id="contratar" className="scroll-mt-24" />
      {/* Fica dentro da seção (bottom-0) e esmaece na base: antes ela descia
          por baixo do rodapé e aparecia cortada em linha reta. */}
      <Foliage
        crop="left-bottom"
        fade="bottom"
        className="absolute -left-20 bottom-0 hidden h-[35rem] w-[23rem] opacity-20 md:block lg:w-[27rem] lg:opacity-[.28]"
      />
      <Foliage fade="top" className="absolute -right-24 top-0 hidden h-[29rem] w-[18rem] opacity-[.11] md:block lg:w-[21rem] lg:opacity-[.16]" />
      <div className="absolute bottom-[8%] left-[12%] h-72 w-72 rounded-full bg-accent/8 blur-[100px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-[1180px] items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="text-center lg:pt-6 lg:text-left">
          <Eyebrow className="justify-center lg:justify-start">Contato &amp; propostas</Eyebrow>
          <h2 className="section-title">
            Pronto para transformar a <span className="highlight">presença da sua marca?</span>
          </h2>
          <p className="section-lead mx-auto mb-10 max-w-[28rem] lg:mx-0">
            Selecione as soluções desejadas e preencha os dados essenciais. O sistema prepara uma
            mensagem personalizada e estruturada para darmos início à conversa no WhatsApp sem perder tempo.
          </p>

          <ul className="flex list-none flex-col items-center gap-4 p-0 lg:items-start">
            <li>
              <a
                href={`https://wa.me/${numeroWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-sm font-medium text-cream/90 transition-colors duration-300 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                Falar diretamente pelo WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jessyanesoaresmkt/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-sm font-medium text-cream/75 transition-colors duration-300 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent/80 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                  <InstagramIcon />
                </span>
                @jessyanesoaresmkt
              </a>
            </li>
          </ul>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="min-w-0 rounded-3xl border border-white/10 bg-black/30 p-6 text-left shadow-[0_40px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-9"
        >
          <h3 className="mb-7 text-xl font-medium tracking-[-0.01em] text-cream sm:text-2xl">Personalize o seu Projeto</h3>

          <fieldset className="mb-7 border-0 p-0" aria-describedby={erros.servicos ? 'servicos-erro' : undefined}>
            <legend className={labelClass}>Selecione os serviços de interesse</legend>
            <div className="flex flex-wrap gap-2.5">
              {services.map((s) => {
                const ativo = selecionados.includes(s.slug)
                return (
                  <button
                    key={s.slug}
                    type="button"
                    data-servico={s.slug}
                    onClick={() => toggleServico(s.slug)}
                    aria-pressed={ativo}
                    className={`${chipBase} ${
                      ativo
                        ? 'border-accent bg-accent/15 text-cream shadow-[0_0_18px_rgba(183,173,105,0.18)]'
                        : 'border-white/15 bg-white/[0.03] text-body/80 hover:border-accent/50 hover:text-cream'
                    }`}
                  >
                    <span className="text-xs leading-none text-accent" aria-hidden="true">{ativo ? '✓' : '+'}</span>
                    {s.title}
                  </button>
                )
              })}
            </div>
            {erros.servicos && <p id="servicos-erro" className="mb-0 mt-2 text-xs text-danger">{mensagensDeErro.servicos}</p>}
          </fieldset>

          <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {campoTexto('nome', 'Seu nome', 'Como devo te chamar?', 'name')}
            {campoTexto('instagram', 'Instagram da empresa', '@suamarca', 'off')}
          </div>

          <div className="mb-5">
            {campoTexto('segmento', 'Segmento ou nicho', 'Ex: Gastronomia, Estética, Moda, Corporativo...')}
          </div>

          <div className="mb-8">
            <label htmlFor="detalhes" className={labelClass}>Detalhes ou objetivos do projeto (opcional)</label>
            <textarea
              id="detalhes"
              rows={3}
              value={campos.detalhes}
              onChange={(e) => alterarCampo('detalhes', e.target.value)}
              className={`${inputClass} min-h-[96px] resize-y border-white/10`}
              placeholder="Prazos, referências, o que você quer alcançar..."
            />
          </div>

          <Button
            type="submit"
            variant="solid"
            disabled={isLoading}
            icon={<WhatsAppIcon className="h-4 w-4" />}
            className="w-full"
          >
            {isLoading ? 'Abrindo o WhatsApp...' : 'Enviar proposta pelo WhatsApp'}
          </Button>
        </form>
      </div>
    </section>
  )
}
