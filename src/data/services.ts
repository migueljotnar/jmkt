export interface GalleryItem {
  src: string
  alt: string
  description: string
}

export interface ServiceData {
  slug: string        // URL: /servicos/gastronomia
  title: string       // Nome exibido na página
  pageTitle: string   // Título da aba do navegador
  coverImage: string  // Imagem do card na home
  coverAlt: string
  description: string // Descrição no card da home
  gallery: GalleryItem[]
}

export const services: ServiceData[] = [
  {
    slug: 'fotografia',
    title: 'Fotografia',
    pageTitle: 'Fotografia | Jessyane Soares',
    coverImage: '/Imagens/Index/gastronomia-principal.webp',
    coverAlt: 'Serviço de Fotografia',
    description: 'Ensaios profissionais, gastronomia, eventos e produtos com iluminação e composição de alto nível.',
    gallery: [
      { src: '/Imagens/Index/gastronomia-principal.webp', alt: 'Fotografia gastronômica e produtos', description: 'Fotos que valorizam texturas, cores e apresentação.' },
      { src: '/Imagens/Index/pessoais-principal.webp', alt: 'Ensaios e retratos fotográficos', description: 'Retratos autênticos que transmitem a essência de cada momento.' },
      { src: '/Imagens/Index/gastronomia-principal.webp', alt: 'Composição e estética visual', description: 'Imagens pensadas para valorizar marcas e produtos.' },
    ],
  },
  {
    slug: 'video',
    title: 'Vídeo',
    pageTitle: 'Vídeo | Jessyane Soares',
    coverImage: '/Imagens/Index/videomaker-principal.webp',
    coverAlt: 'Serviço de Produção de Vídeo',
    description: 'Produção audiovisual completa: vídeos comerciais, institucionais, cobertura de eventos e reels dinâmicos.',
    gallery: [
      { src: '/Imagens/Index/videomaker-principal.webp', alt: 'Cobertura de eventos e momentos especiais', description: 'Captação dinâmica que não perde nenhum detalhe importante.' },
      { src: '/Imagens/Index/Filmmaker-principal.webp', alt: 'Vídeos comerciais e institucionais', description: 'Estética cinematográfica para fortalecer a autoridade da sua marca.' },
      { src: '/Imagens/Index/videomaker-principal.webp', alt: 'Edição e formatos para redes sociais', description: 'Conteúdos em formato vertical e horizontal prontos para performar.' },
    ],
  },
  {
    slug: 'arte',
    title: 'Arte',
    pageTitle: 'Arte & Design | Jessyane Soares',
    coverImage: '/Imagens/Index/gestao-de-perfil-principal.webp',
    coverAlt: 'Serviço de Arte e Design',
    description: 'Identidade visual, criação de peças gráficas, materiais promocionais e design estratégico para marcas.',
    gallery: [
      { src: '/Imagens/Index/gestao-de-perfil-principal.webp', alt: 'Design de peças e identidade visual', description: 'Conceito gráfico consistente para destacar seu negócio.' },
      { src: '/Imagens/Index/gestao-de-perfil-principal.webp', alt: 'Criação de materiais e campanhas', description: 'Materiais visualmente marcantes para mídias digitais e impressas.' },
      { src: '/Imagens/Index/gestao-de-perfil-principal.webp', alt: 'Estética alinhada à sua proposta', description: 'Cada elemento visual pensado com propósito e elegância.' },
    ],
  },
  {
    slug: 'gestao-de-redes-sociais',
    title: 'Gestão de redes sociais',
    pageTitle: 'Gestão de Redes Sociais | Jessyane Soares',
    coverImage: '/Imagens/Index/gestao-de-perfil-principal.webp',
    coverAlt: 'Serviço de Gestão de Redes Sociais',
    description: 'Estratégia de conteúdo, calendário editorial, planejamento de feed e posicionamento profissional no Instagram.',
    gallery: [
      { src: '/Imagens/Index/gestao-de-perfil-principal.webp', alt: 'Estratégia e posicionamento no Instagram', description: 'Um perfil estruturado com imagem profissional e atrativa.' },
      { src: '/Imagens/Index/gestao-de-perfil-principal.webp', alt: 'Planejamento editorial de conteúdo', description: 'Constância e coerência em publicações sem sobrecarregar sua rotina.' },
      { src: '/Imagens/Index/gestao-de-perfil-principal.webp', alt: 'Identidade visual para redes sociais', description: 'Harmonia visual que conecta seu público aos seus valores.' },
    ],
  },
  {
    slug: 'criacao-de-sites',
    title: 'Criação de Sites',
    pageTitle: 'Criação de Sites | Jessyane Soares',
    coverImage: '/Imagens/Index/sites-principal.webp',
    coverAlt: 'Criação de Sites',
    description: 'Sites modernos, rápidos e responsivos, pensados para representar bem a sua empresa e converter visitas em clientes.',
    gallery: [
      { src: '/Imagens/Index/sites-principal.webp', alt: 'Design responsivo e contemporâneo', description: 'Experiência fluida em computadores, tablets e smartphones.' },
      { src: '/Imagens/Index/sites-principal.webp', alt: 'Performance e otimização para buscas', description: 'Carregamento ágil e estrutura pronta para ser encontrada no Google.' },
      { src: '/Imagens/Index/sites-principal.webp', alt: 'Landing pages de alta conversão', description: 'Layout estruturado para guiar o visitante diretamente ao contato.' },
    ],
  },
]
