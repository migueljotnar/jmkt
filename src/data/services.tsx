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
    description: 'Fotos e vídeos que fazem o prato do seu restaurante parecer tão bom quanto está.',
    gallery: [
      { src: '/Imagens/Index/gastronomia-principal.jpg', alt: 'Composição de pratos gastronômicos', description: 'Closes que mostram a textura e a cor de cada prato.' },
      { src: '/Imagens/Index/gastronomia-principal.jpg', alt: 'Ambiente e culinária contemporânea', description: 'O ambiente do restaurante registrado do jeito que o cliente sente ao entrar.' },
      { src: '/Imagens/Index/gastronomia-principal.jpg', alt: 'Detalhes e apresentação gastronômica', description: 'Cada item do cardápio fotografado para dar vontade de pedir.' },
    ],
  },
  {
    slug: 'gestao-de-perfil',
    title: 'Gestão de Perfil',
    pageTitle: 'Gestão de Perfil | Jessyane Soares',
    coverImage: '/Imagens/Index/gestao-de-perfil-principal.png',
    coverAlt: 'Serviço de Gestão de Perfil',
    description: 'Alguém cuidando do seu Instagram enquanto você cuida do resto do negócio.',
    gallery: [
      { src: '/Imagens/Index/gestao-de-perfil-principal.png', alt: 'Estratégia de feed e posicionamento', description: 'Um feed com cara de marca profissional, não de perfil pessoal.' },
      { src: '/Imagens/Index/gestao-de-perfil-principal.png', alt: 'Planejamento editorial de conteúdo', description: 'Calendário de posts pronto, sem você precisar pensar no que postar.' },
      { src: '/Imagens/Index/gestao-de-perfil-principal.png', alt: 'Identidade visual para redes', description: 'Um visual consistente, que o cliente reconhece assim que vê.' },
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
    description: 'Cobertura de eventos e vídeos institucionais, gravados e editados para sua empresa não perder tempo.',
    gallery: [
      { src: '/Imagens/Index/videomaker-principal.png', alt: 'Cobertura de eventos corporativos', description: 'Cobertura do evento do início ao fim, sem perder nenhum momento importante.' },
      { src: '/Imagens/Index/videomaker-principal.png', alt: 'Vídeos institucionais e comerciais', description: 'Vídeos institucionais que ajudam a fechar negócio, não só bonitos de ver.' },
      { src: '/Imagens/Index/videomaker-principal.png', alt: 'Edição ágil para mídias sociais', description: 'Formatos verticais e horizontais otimizados para cada plataforma.' },
    ],
  },
  {
    slug: 'fotos-pessoais',
    title: 'Fotos Pessoais',
    pageTitle: 'Fotos Pessoais | Jessyane Soares',
    coverImage: '/Imagens/Index/pessoais-principal.png',
    coverAlt: 'Fotos Pessoais',
    description: 'Fotos de aniversário, formatura ou qualquer data que você quer guardar de verdade.',
    gallery: [
      { src: '/Imagens/Index/pessoais-principal.png', alt: 'Ensaio fotográfico intimista', description: 'Retratos com luz natural, sem pose forçada.' },
      { src: '/Imagens/Index/pessoais-principal.png', alt: 'Comemorações e celebrações', description: 'Fotos espontâneas da festa, sem interromper quem está se divertindo.' },
      { src: '/Imagens/Index/pessoais-principal.png', alt: 'Retratos autorais e lifestyle', description: 'Fotos que parecem naturais, porque são.' },
    ],
  },
  {
    slug: 'criacao-de-sites',
    title: 'Criação de Sites',
    pageTitle: 'Criação de Sites | Jessyane Soares',
    coverImage: '/Imagens/Index/sites-principal.png',
    coverAlt: 'Criação de Sites',
    description: 'Site rápido, fácil de navegar e pronto para representar bem a sua empresa online.',
    gallery: [
      { src: '/Imagens/Index/sites-principal.png', alt: 'Design responsivo e moderno', description: 'Um layout feito para o seu negócio, que funciona igual no computador e no celular.' },
      { src: '/Imagens/Index/sites-principal.png', alt: 'Performance e otimização SEO', description: 'Site rápido de carregar e fácil de encontrar no Google.' },
      { src: '/Imagens/Index/sites-principal.png', alt: 'Landing pages de alta conversão', description: 'Página pensada para transformar visita em contato de verdade.' },
    ],
  },
]
