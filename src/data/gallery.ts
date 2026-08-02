import type { ModelId } from './models'

export interface GalleryItem {
  /** Estilo construtivo — é o único rótulo exibido sobre a foto */
  style: string
  styleId: ModelId
  image: string
  alt: string
  /** Peso do item no grid: 'feature' 2x2, 'wide' 2x1, 'default' 1x1 */
  span: 'feature' | 'wide' | 'default'
}

/**
 * Obras entregues pela Evolution. As fotos vieram dos portfólios originais
 * em PDF (uma página por obra, com duas fotos cada) e de registros de campo;
 * foram recortadas, convertidas e otimizadas para web.
 *
 * A ordem intercala os três estilos para o grid não ficar em blocos monótonos.
 */
export const galleryItems: GalleryItem[] = [
  {
    style: 'Estilo Contemporâneo',
    styleId: 'contemporanea',
    image: '/images/projetos/contemporanea-06.jpg',
    alt: 'Residência contemporânea em madeira com plano de telhado inclinado e amplos vidros',
    span: 'feature',
  },
  {
    style: 'Estilo Colonial',
    styleId: 'colonial',
    image: '/images/projetos/colonial-06.jpg',
    alt: 'Casa colonial em madeira com telhado cerâmico e varanda em toda a fachada',
    span: 'default',
  },
  {
    style: 'Estilo Comercial',
    styleId: 'comercial',
    image: '/images/projetos/comercial-03.jpg',
    alt: 'Estrutura comercial em madeira com fachada envidraçada e cobertura em beiral',
    span: 'default',
  },
  {
    style: 'Estilo Colonial',
    styleId: 'colonial',
    image: '/images/projetos/colonial-07.jpg',
    alt: 'Residência colonial em madeira com alvenaria aparente e telhado de barro',
    span: 'default',
  },
  {
    style: 'Estilo Contemporâneo',
    styleId: 'contemporanea',
    image: '/images/projetos/contemporanea-07.jpg',
    alt: 'Casa contemporânea em madeira com varanda e rede sob o beiral',
    span: 'default',
  },
  {
    style: 'Estilo Contemporâneo',
    styleId: 'contemporanea',
    image: '/images/projetos/contemporanea-09.jpg',
    alt: 'Sobrado contemporâneo em madeira com sacada e estrutura metálica',
    span: 'wide',
  },
  {
    style: 'Estilo Comercial',
    styleId: 'comercial',
    image: '/images/projetos/comercial-05.jpg',
    alt: 'Ponto comercial em madeira com varanda coberta e acesso frontal',
    span: 'default',
  },
  {
    style: 'Estilo Colonial',
    styleId: 'colonial',
    image: '/images/projetos/colonial-08.jpg',
    alt: 'Casa colonial em madeira com base em alvenaria e telhado de duas águas',
    span: 'default',
  },
  {
    style: 'Estilo Colonial',
    styleId: 'colonial',
    image: '/images/projetos/colonial-09.jpg',
    alt: 'Residência colonial em madeira com varanda ampla sobre pilares',
    span: 'default',
  },
  {
    style: 'Estilo Contemporâneo',
    styleId: 'contemporanea',
    image: '/images/projetos/contemporanea-08.jpg',
    alt: 'Casa contemporânea em madeira com jardim e escada de acesso',
    span: 'default',
  },
  {
    style: 'Estilo Comercial',
    styleId: 'comercial',
    image: '/images/projetos/comercial-04.jpg',
    alt: 'Construção comercial em madeira com fachada envidraçada entre árvores',
    span: 'wide',
  },
  {
    style: 'Estilo Colonial',
    styleId: 'colonial',
    image: '/images/projetos/colonial-10.jpg',
    alt: 'Casa colonial em madeira com varanda lateral e telhado cerâmico',
    span: 'default',
  },
]
