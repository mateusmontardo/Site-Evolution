import {
  Compass,
  Globe2,
  HardHat,
  Ruler,
  ShieldCheck,
  TreePine,
  type LucideIcon,
} from 'lucide-react'

export interface Differential {
  icon: LucideIcon
  title: string
  description: string
}

export const differentials: Differential[] = [
  {
    icon: Compass,
    title: 'Quatro décadas de experiência em madeira',
    description:
      'Décadas dedicadas à construção em madeira, antes mesmo da Evolution existir. Experiência que orienta o projeto, a escolha dos materiais e a execução da sua obra.',
  },
  {
    icon: Globe2,
    title: 'Santa Catarina, RS e Uruguai',
    description:
      'Atendimento em Santa Catarina, Rio Grande do Sul e Uruguai, com equipe própria e logística planejada conforme a localização da obra.',
  },
  {
    icon: TreePine,
    title: 'Madeira selecionada com rigor',
    description:
      'Cada peça é escolhida a olho e ao toque, sem atalho de fornecedor genérico — critério que se repete em toda obra, do início ao acabamento.',
  },
  {
    icon: Ruler,
    title: 'Projeto sob medida',
    description:
      'Cada planta nasce do terreno e da rotina do cliente. Nada de catálogo fechado quando o pedido é exclusividade.',
  },
  {
    icon: HardHat,
    title: 'Equipe própria em obra',
    description:
      'Montagem conduzida por profissionais da casa, do alicerce ao último detalhe de acabamento.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantia estrutural',
    description:
      'Contrato claro, cronograma acordado e garantia formal sobre estrutura e tratamento da madeira.',
  },
]
