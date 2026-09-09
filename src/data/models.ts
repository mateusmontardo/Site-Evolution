/**
 * Os três estilos construtivos da Evolution, na ordem de prioridade comercial.
 * A ordem deste array é a ordem exibida no site e no select do formulário.
 *
 * As fotos são de obras entregues — extraídas dos portfólios originais em PDF
 * e otimizadas para web (ver public/images/projetos/).
 */

export type ModelId = 'colonial' | 'contemporanea' | 'comercial'

export interface Model {
  id: ModelId
  name: string
  /** Rótulo curto usado no <select> do formulário de contato */
  formLabel: string
  eyebrow: string
  description: string
  /** Galeria do card — o lead desliza entre as fotos sem sair da seção */
  images: string[]
  imageAlt: string
  highlights: string[]
}

export const models: Model[] = [
  {
    id: 'colonial',
    name: 'Estilo Colonial',
    formLabel: 'Casa estilo colonial',
    eyebrow: 'Tradição',
    description:
      'Telhado de barro em águas largas, varandas profundas e madeira aparente. O desenho clássico que envelhece bem e nunca sai de moda.',
    images: [
      '/images/projetos/colonial-02.jpg',
      '/images/projetos/colonial-03.jpg',
      '/images/projetos/colonial-01.jpg',
      '/images/projetos/colonial-04.jpg',
      '/images/projetos/colonial-05.jpg',
      '/images/projetos/colonial-06.jpg',
      '/images/projetos/colonial-07.jpg',
      '/images/projetos/colonial-08.jpg',
      '/images/projetos/colonial-09.jpg',
      '/images/projetos/colonial-10.jpg',
      '/images/projetos/colonial-11.jpg',
      '/images/projetos/colonial-12.jpg',
      '/images/projetos/colonial-13.jpg',
      '/images/projetos/colonial-14.jpg',
      '/images/projetos/colonial-15.jpg',
      '/images/projetos/colonial-16.jpg',
      '/images/projetos/colonial-17.jpg',
      '/images/projetos/colonial-18.jpg',
      '/images/projetos/colonial-19.jpg',
      '/images/projetos/colonial-20.jpg',
      '/images/projetos/colonial-21.jpg',
      '/images/projetos/colonial-22.jpg',
      '/images/projetos/colonial-23.jpg',
      '/images/projetos/colonial-24.jpg',
    ],
    imageAlt: 'Casa de madeira em estilo colonial construída pela Evolution',
    highlights: ['Varandas amplas', 'Telha cerâmica', 'Madeira aparente'],
  },
  {
    id: 'contemporanea',
    name: 'Estilo Contemporâneo',
    formLabel: 'Casa estilo contemporâneo',
    eyebrow: 'Assinatura',
    description:
      'Linhas retas, planos inclinados e grandes panos de vidro. Madeira combinada a pedra e concreto para quem quer arquitetura autoral.',
    images: [
      '/images/projetos/contemporanea-01.jpg',
      '/images/projetos/contemporanea-02.jpg',
      '/images/projetos/contemporanea-03.jpg',
      '/images/projetos/contemporanea-04.jpg',
      '/images/projetos/contemporanea-05.jpg',
      '/images/projetos/contemporanea-06.jpg',
      '/images/projetos/contemporanea-07.jpg',
      '/images/projetos/contemporanea-08.jpg',
      '/images/projetos/contemporanea-09.jpg',
      '/images/projetos/contemporanea-10.jpg',
      '/images/projetos/contemporanea-11.jpg',
      '/images/projetos/contemporanea-12.jpg',
      '/images/projetos/contemporanea-13.jpg',
      '/images/projetos/contemporanea-14.jpg',
      '/images/projetos/contemporanea-15.jpg',
      '/images/projetos/contemporanea-16.jpg',
      '/images/projetos/contemporanea-17.jpg',
      '/images/projetos/contemporanea-18.jpg',
      '/images/projetos/contemporanea-19.jpg',
      '/images/projetos/contemporanea-20.jpg',
      '/images/projetos/contemporanea-21.jpg',
      '/images/projetos/contemporanea-22.jpg',
      '/images/projetos/contemporanea-23.jpg',
      '/images/projetos/contemporanea-24.jpg',
      '/images/projetos/contemporanea-25.jpg',
    ],
    imageAlt: 'Casa de madeira em estilo contemporâneo construída pela Evolution',
    highlights: ['Vãos envidraçados', 'Volumes marcados', 'Projeto autoral'],
  },
  {
    id: 'comercial',
    name: 'Estilo Comercial',
    formLabel: 'Construção comercial',
    eyebrow: 'Negócios',
    description:
      'Pontos de venda, escritórios e estruturas de apoio em madeira. Montagem rápida, presença marcante e o mesmo padrão de acabamento.',
    images: [
      '/images/projetos/comercial-01.jpg',
      '/images/projetos/comercial-02.jpg',
      '/images/projetos/comercial-03.jpg',
      '/images/projetos/comercial-04.jpg',
      '/images/projetos/comercial-05.jpg',
      '/images/projetos/comercial-06.jpg',
      '/images/projetos/comercial-07.jpg',
      '/images/projetos/comercial-08.jpg',
      '/images/projetos/comercial-09.jpg',
    ],
    imageAlt: 'Construção comercial em madeira executada pela Evolution',
    highlights: ['Obra rápida', 'Uso comercial', 'Baixa manutenção'],
  },
]

export function getModelById(id: string): Model | undefined {
  return models.find((model) => model.id === id)
}
