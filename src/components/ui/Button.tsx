import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2.5 font-sans text-sm font-medium tracking-wide transition-all duration-300 ease-soft disabled:cursor-not-allowed disabled:opacity-50'

const variants: Record<Variant, string> = {
  // Dourado sólido com texto escuro — contraste alto, reservado aos CTAs principais
  primary:
    'bg-gold text-ink hover:bg-gold-bright hover:shadow-[0_8px_30px_-12px_rgba(217,183,106,0.6)]',
  // Borda dourada com texto creme (dourado nunca é usado em texto corrido)
  outline: 'border border-gold/50 text-cream hover:border-gold hover:bg-gold/10',
  ghost: 'text-cream hover:text-gold-bright',
}

const sizes: Record<Size, string> = {
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-[0.95rem]',
}

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: Variant
  size?: Size
  children: ReactNode
  /** Com href o componente renderiza um <a>; sem href, um <button> */
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  target,
  rel,
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={rest.onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
        aria-label={rest['aria-label']}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
