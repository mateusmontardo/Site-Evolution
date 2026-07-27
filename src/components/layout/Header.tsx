import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'
import { navLinks, whatsappLink } from '../../data/site'
import { useScrollHeader } from '../../hooks/useScrollHeader'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

const sectionIds = navLinks.map((link) => link.href.slice(1))

export function Header() {
  const { visible, scrolled } = useScrollHeader()
  const active = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)

  useLockBodyScroll(menuOpen)

  // Fecha o menu com Esc
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      animate={{ y: visible || menuOpen ? 0 : '-100%' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`transition-all duration-500 ease-soft ${
          scrolled || menuOpen
            ? 'border-b border-gold/15 bg-charcoal/92 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-site flex h-20 items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center transition-opacity duration-300 hover:opacity-85"
            aria-label="Evolution Casas de Madeira, ir para o início"
          >
            <img
              src="/images/logo.png"
              alt="Evolution Casas de Madeira"
              className="h-14 w-auto sm:h-16"
            />
          </a>

          {/* Navegação desktop */}
          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1)
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative py-2 text-sm transition-colors duration-300 ${
                        isActive ? 'text-gold-bright' : 'text-cream/75 hover:text-cream'
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ease-soft ${
                          isActive ? 'w-full' : 'w-0'
                        }`}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              Falar no WhatsApp
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center border border-gold/30 text-cream transition-colors duration-300 hover:border-gold hover:text-gold-bright lg:hidden"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="menu-mobile"
            aria-label="Navegação principal (mobile)"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-gold/15 bg-charcoal/98 backdrop-blur-md lg:hidden"
          >
            <ul className="container-site flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-cream/5 last:border-none">
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 font-display text-lg font-light text-cream transition-colors duration-300 hover:text-gold-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-6 sm:hidden">
                <Button
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Falar no WhatsApp
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
