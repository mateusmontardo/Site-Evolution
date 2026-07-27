export interface GalleryItem {
  title: string
  location: string
  image: string
  alt: string
  /** Controla o peso do item dentro do grid (itens 'wide' e 'tall' quebram a monotonia) */
  span: 'wide' | 'tall' | 'default'
}

/**
 * TODO: substituir todos os placeholders por fotografia profissional das obras entregues.
 * Recomendação: fotos ao entardecer ou à noite com luz interna acesa — reforçam o dourado da paleta.
 */
export const galleryItems: GalleryItem[] = [
  {
    title: 'Residência Vale do Camaquã',
    location: 'Caçapava do Sul, RS',
    image: 'https://placehold.co/1600x1000/17140F/B08D42?text=Resid%C3%AAncia+Vale+do+Camaqu%C3%A3',
    alt: 'Fachada de residência de madeira ao entardecer com luz interna acesa',
    span: 'wide',
  },
  {
    title: 'Chalé Serra Azul',
    location: 'São Francisco de Paula, RS',
    image: 'https://placehold.co/900x1200/17140F/B08D42?text=Chal%C3%A9+Serra+Azul',
    alt: 'Chalé de madeira de duas águas implantado em terreno inclinado',
    span: 'tall',
  },
  {
    title: 'Cabana Coxilha',
    location: 'Bagé, RS',
    image: 'https://placehold.co/1200x900/17140F/B08D42?text=Cabana+Coxilha',
    alt: 'Cabana de madeira compacta com varanda coberta',
    span: 'default',
  },
  {
    title: 'Casa Fronteira',
    location: 'Rivera, Uruguai',
    image: 'https://placehold.co/1200x900/17140F/B08D42?text=Casa+Fronteira',
    alt: 'Casa de madeira pré-fabricada de dois pavimentos com deck frontal',
    span: 'default',
  },
  {
    title: 'Pousada Pedra Alta',
    location: 'Canela, RS',
    image: 'https://placehold.co/1600x1000/17140F/B08D42?text=Pousada+Pedra+Alta',
    alt: 'Conjunto de chalés de madeira de uma pousada vistos de cima',
    span: 'wide',
  },
  {
    title: 'Refúgio Santa Tecla',
    location: 'Bagé, RS',
    image: 'https://placehold.co/900x1200/17140F/B08D42?text=Ref%C3%BAgio+Santa+Tecla',
    alt: 'Detalhe de estrutura de madeira aparente em ambiente interno',
    span: 'tall',
  },
]
