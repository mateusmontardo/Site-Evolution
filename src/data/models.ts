/**
 * As quatro especialidades, na ordem de prioridade comercial da empresa.
 * A ordem deste array é a ordem exibida no site e no select do formulário.
 */

export type ModelId = 'pre-fabricadas' | 'sob-projeto' | 'chales' | 'cabanas'

export interface Model {
  id: ModelId
  name: string
  /** Rótulo curto usado no <select> do formulário de contato */
  formLabel: string
  eyebrow: string
  description: string
  image: string
  imageAlt: string
  highlights: string[]
}

export const models: Model[] = [
  {
    id: 'pre-fabricadas',
    name: 'Casas pré-fabricadas',
    formLabel: 'Casa pré-fabricada',
    eyebrow: 'Prazo definido',
    description:
      'Estrutura produzida em ambiente controlado e montada no terreno com precisão milimétrica. Prazo curto, sem abrir mão do acabamento.',
    // TODO: substituir por foto real de uma casa pré-fabricada entregue
    image: 'https://placehold.co/1200x900/17140F/B08D42?text=Casas+pr%C3%A9-fabricadas',
    imageAlt: 'Casa de madeira pré-fabricada da Evolution vista da fachada frontal',
    highlights: ['Montagem rápida', 'Projeto validado', 'Custo previsível'],
  },
  {
    id: 'sob-projeto',
    name: 'Casas de madeira',
    formLabel: 'Casa de madeira sob projeto',
    eyebrow: 'Sob medida',
    description:
      'Residências desenhadas do zero, a partir do terreno, da luz e da rotina de quem vai morar. Cada peça de madeira tem destino definido em projeto.',
    // TODO: substituir por foto real de uma residência construída sob projeto
    image: 'https://placehold.co/1200x900/17140F/B08D42?text=Casas+de+madeira',
    imageAlt: 'Residência de madeira construída sob projeto exclusivo pela Evolution',
    highlights: ['Projeto exclusivo', 'Madeira nobre', 'Acompanhamento de obra'],
  },
  {
    id: 'chales',
    name: 'Chalés',
    formLabel: 'Chalé',
    eyebrow: 'Serra e campo',
    description:
      'Volumes compactos de linhas inclinadas, pensados para terrenos de encosta e para quem busca refúgio ou renda com hospedagem.',
    // TODO: substituir por foto real de um chalé entregue
    image: 'https://placehold.co/1200x900/17140F/B08D42?text=Chal%C3%A9s',
    imageAlt: 'Chalé de madeira da Evolution em terreno de encosta ao entardecer',
    highlights: ['Ideal para hospedagem', 'Implantação em declive', 'Isolamento térmico'],
  },
  {
    id: 'cabanas',
    name: 'Cabanas',
    formLabel: 'Cabana',
    eyebrow: 'Refúgio',
    description:
      'Espaços enxutos e bem resolvidos, do estúdio de campo à unidade de pousada. Menos área, mesma exigência de acabamento.',
    // TODO: substituir por foto real de uma cabana entregue
    image: 'https://placehold.co/1200x900/17140F/B08D42?text=Cabanas',
    imageAlt: 'Cabana de madeira da Evolution cercada por vegetação nativa',
    highlights: ['Área otimizada', 'Entrega ágil', 'Baixa manutenção'],
  },
]

export function getModelById(id: string): Model | undefined {
  return models.find((model) => model.id === id)
}
