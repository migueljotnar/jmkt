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
    slug: 'gastronomia',
    title: 'Gastronomia',
    pageTitle: 'Gastronomia | Jessyane Soares',
    coverImage: '/Imagens/Index/gastronomia-principal.jpg',
    coverAlt: 'Serviço de Gastronomia',
    description: 'Produção de conteúdo visual para restaurantes e marcas de alimentos.',
    gallery: [
      { src: '/Imagens/Index/gastronomia-principal.jpg', alt: 'Composição de pratos gastronômicos', description: 'Produção visual destacando texturas e cores de pratos autorais.' },
      { src: '/Imagens/Index/gastronomia-principal.jpg', alt: 'Ambiente e culinária contemporânea', description: 'Captação do ambiente acolhedor e da experiência culinária.' },
      { src: '/Imagens/Index/gastronomia-principal.jpg', alt: 'Detalhes e apresentação gastronômica', description: 'Enquadramentos precisos para valorizar cada detalhe do cardápio.' },
    ],
  },
  {
    slug: 'gestao-de-perfil',
    title: 'Gestão de Perfil',
    pageTitle: 'Gestão de Perfil | Jessyane Soares',
    coverImage: '/Imagens/Index/gestao-de-perfil-principal.png',
    coverAlt: 'Serviço de Gestão de Perfil',
    description: 'Criação de conteúdo e gerenciamento de redes sociais.',
    gallery: [
      { src: '/Imagens/Index/gestao-de-perfil-principal.png', alt: 'Estratégia de feed e posicionamento', description: 'Curadoria estética e alinhamento de posicionamento de marca.' },
      { src: '/Imagens/Index/gestao-de-perfil-principal.png', alt: 'Planejamento editorial de conteúdo', description: 'Criação de cronogramas e narrativas visuais engajadoras.' },
      { src: '/Imagens/Index/gestao-de-perfil-principal.png', alt: 'Identidade visual para redes', description: 'Padronização visual e comunicação assertiva para o público-alvo.' },
    ],
  },
  {
    slug: 'filmmaker',
    title: 'Filmmaker',
    pageTitle: 'Filmmaker | Jessyane Soares',
    coverImage: '/Imagens/Index/Filmmaker-principal.png',
    coverAlt: 'Serviço de Filmmaker',
    description: 'Direção e produção de curtas, documentários e projetos cinematográficos.',
    gallery: [
      { src: '/Imagens/Index/Filmmaker-principal.png', alt: 'Produção cinematográfica', description: 'Direção de cena e estética refinada para narrativas autorais.' },
      { src: '/Imagens/Index/Filmmaker-principal.png', alt: 'Equipamentos e iluminação profissional', description: 'Iluminação cênica e captação em alta definição.' },
      { src: '/Imagens/Index/Filmmaker-principal.png', alt: 'Pós-produção e color grading', description: 'Tratamento de cor cinematográfico e montagem rítmica.' },
    ],
  },
  {
    slug: 'videomaker',
    title: 'Videomaker',
    pageTitle: 'Videomaker | Jessyane Soares',
    coverImage: '/Imagens/Index/videomaker-principal.png',
    coverAlt: 'Serviço de Videomaker',
    description: 'Gravação e edição de vídeos para eventos, empresas e conteúdo digital.',
    gallery: [
      { src: '/Imagens/Index/videomaker-principal.png', alt: 'Cobertura de eventos corporativos', description: 'Registros dinâmicos e cobertura completa de eventos.' },
      { src: '/Imagens/Index/videomaker-principal.png', alt: 'Vídeos institucionais e comerciais', description: 'Vídeos promocionais com foco em conversão e autoridade.' },
      { src: '/Imagens/Index/videomaker-principal.png', alt: 'Edição ágil para mídias sociais', description: 'Formatos verticais e horizontais otimizados para cada plataforma.' },
    ],
  },
  {
    slug: 'fotos-pessoais',
    title: 'Fotos Pessoais',
    pageTitle: 'Fotos Pessoais | Jessyane Soares',
    coverImage: '/Imagens/Index/pessoais-principal.png',
    coverAlt: 'Fotos Pessoais',
    description: 'Fotos de eventos, comemorações e momentos especiais.',
    gallery: [
      { src: '/Imagens/Index/pessoais-principal.png', alt: 'Ensaio fotográfico intimista', description: 'Retratos com luz natural valorizando a essência de cada momento.' },
      { src: '/Imagens/Index/pessoais-principal.png', alt: 'Comemorações e celebrações', description: 'Registro espontâneo de memórias marcantes e afetivas.' },
      { src: '/Imagens/Index/pessoais-principal.png', alt: 'Retratos autorais e lifestyle', description: 'Fotografia lifestyle pensada para eternizar sentimentos genuínos.' },
    ],
  },
  {
    slug: 'criacao-de-sites',
    title: 'Criação de Sites',
    pageTitle: 'Criação de Sites | Jessyane Soares',
    coverImage: '/Imagens/Index/sites-principal.png',
    coverAlt: 'Criação de Sites',
    description: 'Desenvolvimento de sites modernos e responsivos para empresas e empreendedores.',
    gallery: [
      { src: '/Imagens/Index/sites-principal.png', alt: 'Design responsivo e moderno', description: 'Layouts exclusivos adaptados para todos os dispositivos.' },
      { src: '/Imagens/Index/sites-principal.png', alt: 'Performance e otimização SEO', description: 'Estrutura veloz, acessível e otimizada para buscadores.' },
      { src: '/Imagens/Index/sites-principal.png', alt: 'Landing pages de alta conversão', description: 'Páginas desenvolvidas estrategicamente para gerar resultados.' },
    ],
  },
]
