import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Atraso em segundos — usado para escalonar itens de uma grade */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'article' | 'section'
}

/**
 * Reveal on-scroll sobrio: fade + translateY curto, 500ms.
 * Com prefers-reduced-motion o conteúdo aparece direto, sem deslocamento.
 */
export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  // O cast mantém a tag dinâmica sem explodir a união de props de cada elemento
  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.55,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}
