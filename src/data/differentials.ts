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
    title: 'Uma década de obra entregue',
    description:
      'Dez anos de projetos executados no Rio Grande do Sul — histórico verificável, não promessa.',
  },
  {
    icon: Globe2,
    title: 'Atendimento binacional',
    description:
      'Brasil e Uruguai, com logística, documentação e equipe preparadas para obra dos dois lados da fronteira.',
  },
  {
    icon: TreePine,
    title: 'Madeira de origem certificada',
    description:
      'Seleção de peças de reflorestamento com rastreabilidade, tratamento autoclave e secagem controlada.',
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
