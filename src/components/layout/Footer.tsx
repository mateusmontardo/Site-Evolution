import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, site, whatsappLink } from '../../data/site'
import { models } from '../../data/models'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gold/15 bg-ink">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Marca */}
          <div className="lg:col-span-4">
            <a href="#inicio" className="inline-flex">
              <img
                src="/images/logo.png"
                alt="Evolution Casas de Madeira"
                className="h-20 w-auto"
              />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
              Casas em estilo colonial, contemporâneo e comercial. Uma década construindo em
              madeira nobre em Bagé, no Rio Grande do Sul e no Uruguai.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Evolution Casas de Madeira"
                className="flex h-10 w-10 items-center justify-center border border-gold/25 text-cream/70 transition-colors duration-300 hover:border-gold hover:text-gold-bright"
              >
                <Instagram size={17} strokeWidth={1.5} />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Evolution Casas de Madeira"
                className="flex h-10 w-10 items-center justify-center border border-gold/25 text-cream/70 transition-colors duration-300 hover:border-gold hover:text-gold-bright"
              >
                <Facebook size={17} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé" className="lg:col-span-3">
            <h3 className="eyebrow">Navegação</h3>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors duration-300 hover:text-gold-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Especialidades */}
          <div className="lg:col-span-2">
            <h3 className="eyebrow">Especialidades</h3>
            <ul className="mt-6 space-y-3">
              {models.map((model) => (
                <li key={model.id}>
                  <a
                    href="#modelos"
                    className="text-sm text-cream/70 transition-colors duration-300 hover:text-gold-bright"
                  >
                    {model.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <h3 className="eyebrow">Contato</h3>
            <ul className="mt-6 space-y-4 text-sm text-cream/70">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors duration-300 hover:text-gold-bright"
                >
                  <Phone size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 break-all transition-colors duration-300 hover:text-gold-bright"
                >
                  <Mail size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  {site.address.street} — {site.address.district}
                  <br />
                  {site.address.city}/{site.address.state} · {site.address.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.fullName}. Todos os direitos reservados.
          </p>
          <p>
            Bagé · Rio Grande do Sul · Uruguai
          </p>
        </div>
      </div>
    </footer>
  )
}
