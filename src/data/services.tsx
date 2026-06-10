// Aqui ficam todos os dados dos serviços.
// Quando quiser atualizar um vídeo ou foto, é só mudar aqui!
 
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
  videoUrl: string    // Link do YouTube (embed)
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
    videoUrl: 'https://www.youtube.com/embed/Hk_ItWFOPzs',
    gallery: [
      { src: '/pages/ref.jpg', alt: 'Foto de Gastronomia 1', description: 'Descrição da foto 1.' },
      { src: '/pages/ref.jpg', alt: 'Foto de Gastronomia 2', description: 'Descrição da foto 2.' },
      { src: '/pages/ref.jpg', alt: 'Foto de Gastronomia 3', description: 'Descrição da foto 3.' },
    ],
  },
  {
    slug: 'gestao-de-perfil',
    title: 'Gestão de Perfil',
    pageTitle: 'Gestão de Perfil | Jessyane Soares',
    coverImage: '/Imagens/Index/gestao-de-perfil-principal.png',
    coverAlt: 'Serviço de Gestão de Perfil',
    description: 'Criação de conteúdo e gerenciamento de redes sociais.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    gallery: [
      { src: '/pages/ref.jpg', alt: 'Foto de Gestão de Perfil 1', description: 'Descrição da foto 1.' },
      { src: '/pages/ref.jpg', alt: 'Foto de Gestão de Perfil 2', description: 'Descrição da foto 2.' },
      { src: '/pages/ref.jpg', alt: 'Foto de Gestão de Perfil 3', description: 'Descrição da foto 3.' },
    ],
  },
  {
    slug: 'filmmaker',
    title: 'Filmmaker',
    pageTitle: 'Filmmaker | Jessyane Soares',
    coverImage: '/Imagens/Index/Filmmaker-principal.png',
    coverAlt: 'Serviço de Filmmaker',
    description: 'Direção e produção de curtas, documentários e projetos cinematográficos.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    gallery: [
      { src: '/pages/ref.jpg', alt: 'Foto de Filmmaker 1', description: 'Descrição da foto 1.' },
      { src: '/pages/ref.jpg', alt: 'Foto de Filmmaker 2', description: 'Descrição da foto 2.' },
      { src: '/pages/ref.jpg', alt: 'Foto de Filmmaker 3', description: 'Descrição da foto 3.' },
    ],
  },
  {
    slug: 'videomaker',
    title: 'Videomaker',
    pageTitle: 'Videomaker | Jessyane Soares',
    coverImage: '/Imagens/Index/videomaker-principal.png',
    coverAlt: 'Serviço de Videomaker',
    description: 'Gravação e edição de vídeos para eventos, empresas e conteúdo digital.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    gallery: [
      { src: '/pages/ref.jpg', alt: 'Foto de Videomaker 1', description: 'Descrição da foto 1.' },
      { src: '/pages/ref.jpg', alt: 'Foto de Videomaker 2', description: 'Descrição da foto 2.' },
      { src: '/pages/ref.jpg', alt: 'Foto de Videomaker 3', description: 'Descrição da foto 3.' },
    ],
  },
  {
    slug: 'fotos-pessoais',
    title: 'Fotos Pessoais',
    pageTitle: 'Fotos Pessoais | Jessyane Soares',
    coverImage: '/Imagens/Index/pessoais-principal.png',
    coverAlt: 'Fotos Pessoais',
    description: 'Fotos de eventos, comemorações e momentos especiais.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    gallery: [
      { src: '/pages/ref.jpg', alt: 'Foto Pessoal 1', description: 'Descrição da foto 1.' },
      { src: '/pages/ref.jpg', alt: 'Foto Pessoal 2', description: 'Descrição da foto 2.' },
      { src: '/pages/ref.jpg', alt: 'Foto Pessoal 3', description: 'Descrição da foto 3.' },
    ],
  },
  {
    slug: 'criacao-de-sites',
    title: 'Criação de Sites',
    pageTitle: 'Criação de Sites | Jessyane Soares',
    coverImage: '/Imagens/Index/sites-principal.png',
    coverAlt: 'Criação de Sites',
    description: 'Desenvolvimento de sites modernos e responsivos para empresas e empreendedores.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    gallery: [
      { src: '/pages/ref.jpg', alt: 'Criação de Sites 1', description: 'Descrição da foto 1.' },
      { src: '/pages/ref.jpg', alt: 'Criação de Sites 2', description: 'Descrição da foto 2.' },
      { src: '/pages/ref.jpg', alt: 'Criação de Sites 3', description: 'Descrição da foto 3.' },
    ],
  },
]