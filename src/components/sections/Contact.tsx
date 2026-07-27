import { useEffect, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { TreeRingMotif } from '../ui/TreeRingMotif'
import { models, type ModelId } from '../../data/models'
import { site, whatsappLink } from '../../data/site'

const contactSchema = z.object({
  name: z.string().trim().min(3, 'Informe seu nome completo.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Informe um WhatsApp com DDD.')
    .regex(/^[\d\s()+-]+$/, 'Use apenas números, espaços e os sinais ( ) + -.'),
  city: z.string().trim().min(2, 'Informe a cidade da obra.'),
  interest: z.string().min(1, 'Selecione o tipo de projeto.'),
  message: z.string().trim().min(10, 'Conte um pouco mais sobre o projeto (mínimo 10 caracteres).'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactProps {
  /** Interesse pré-selecionado a partir dos cards da seção Modelos */
  presetInterest: ModelId | null
}

const fieldClasses =
  'w-full border border-cream/15 bg-charcoal px-4 py-3.5 text-sm text-cream placeholder:text-cream/35 transition-colors duration-300 focus:border-gold focus:outline-none'

export function Contact({ presetInterest }: ContactProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', phone: '', city: '', interest: '', message: '' },
  })

  // Ao clicar em "Saiba mais" num card de modelo, o select já chega preenchido
  useEffect(() => {
    if (presetInterest) {
      setValue('interest', presetInterest, { shouldValidate: true })
    }
  }, [presetInterest, setValue])

  /**
   * Sem backend disponível: o envio monta uma mensagem estruturada e abre o WhatsApp.
   *
   * TODO (backend): para receber os contatos por e-mail/CRM, plugue aqui um endpoint —
   * Formspree (`fetch('https://formspree.io/f/XXXX', { method: 'POST', body: ... })`),
   * EmailJS ou uma API própria. Basta substituir o corpo desta função pela chamada
   * e tratar sucesso/erro com um estado de feedback na tela.
   */
  const onSubmit = (data: ContactFormData) => {
    const modelName = models.find((model) => model.id === data.interest)?.formLabel ?? data.interest

    const text = [
      'Olá! Vim pelo site da Evolution e gostaria de conversar sobre um projeto.',
      '',
      `Nome: ${data.name}`,
      `WhatsApp: ${data.phone}`,
      `Cidade: ${data.city}`,
      `Tipo de projeto: ${modelName}`,
      '',
      `Mensagem: ${data.message}`,
    ].join('\n')

    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  const contactChannels = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: site.whatsappDisplay,
      href: whatsappLink(),
      external: true,
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: site.email,
      href: `mailto:${site.email}`,
      external: false,
    },
  ]

  return (
    <section id="contato" className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      {/* Motivo de anéis ao fundo — terceira e última aparição do elemento de assinatura */}
      <TreeRingMotif
        rings={12}
        strokeWidth={0.28}
        className="pointer-events-none absolute -right-[18%] top-1/2 h-[140%] w-auto -translate-y-1/2 text-gold opacity-[0.07] lg:-right-[8%]"
      />

      <div className="container-site relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Informações diretas */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Contato</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-light leading-[1.15] tracking-tight text-cream sm:text-4xl lg:text-[2.9rem]">
                Comece pela conversa.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-cream/70">
                Conte onde fica o terreno, que tipo de construção você imagina e em que prazo. A
                partir daí montamos o estudo inicial e a estimativa de investimento.
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              {contactChannels.map((channel, index) => {
                const Icon = channel.icon
                return (
                  <Reveal key={channel.label} delay={0.1 + index * 0.06}>
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="group flex items-start gap-5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/30 text-gold transition-colors duration-300 group-hover:border-gold group-hover:text-gold-bright">
                        <Icon size={18} strokeWidth={1.5} />
                      </span>
                      <span>
                        <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-cream/45">
                          {channel.label}
                        </span>
                        <span className="mt-1.5 block break-all text-base text-cream transition-colors duration-300 group-hover:text-gold-bright">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                )
              })}

              <Reveal delay={0.22}>
                <div className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/30 text-gold">
                    <MapPin size={18} strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-cream/45">
                      Endereço
                    </span>
                    <span className="mt-1.5 block text-base leading-relaxed text-cream/85">
                      {site.address.street} — {site.address.district}
                      <br />
                      {site.address.city}/{site.address.state} · CEP {site.address.zip}
                    </span>
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.28}>
                <div className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/30 text-gold">
                    <Clock size={18} strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-cream/45">
                      Atendimento
                    </span>
                    <span className="mt-1.5 block text-base leading-relaxed text-cream/85">
                      {site.businessHours.map((slot) => (
                        <span key={slot.days} className="block">
                          {slot.days}: {slot.hours}
                        </span>
                      ))}
                    </span>
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="border border-cream/12 bg-charcoal-soft p-7 sm:p-10"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Nome" htmlFor="name" error={errors.name?.message}>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Seu nome completo"
                      aria-invalid={!!errors.name}
                      className={fieldClasses}
                      {...register('name')}
                    />
                  </Field>

                  <Field label="WhatsApp" htmlFor="phone" error={errors.phone?.message}>
                    <input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="(00) 00000-0000"
                      aria-invalid={!!errors.phone}
                      className={fieldClasses}
                      {...register('phone')}
                    />
                  </Field>

                  <Field label="Cidade da obra" htmlFor="city" error={errors.city?.message}>
                    <input
                      id="city"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="Ex.: Bagé, RS"
                      aria-invalid={!!errors.city}
                      className={fieldClasses}
                      {...register('city')}
                    />
                  </Field>

                  <Field label="Tipo de projeto" htmlFor="interest" error={errors.interest?.message}>
                    <select
                      id="interest"
                      aria-invalid={!!errors.interest}
                      className={`${fieldClasses} appearance-none bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23B08D42' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                      }}
                      {...register('interest')}
                    >
                      <option value="">Selecione</option>
                      {models.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.formLabel}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Mensagem" htmlFor="message" error={errors.message?.message}>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Conte sobre o terreno, a metragem pretendida e o prazo que tem em mente."
                        aria-invalid={!!errors.message}
                        className={`${fieldClasses} resize-y`}
                        {...register('message')}
                      />
                    </Field>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-gold px-8 py-4 font-sans text-[0.95rem] font-medium tracking-wide text-ink transition-all duration-300 ease-soft hover:bg-gold-bright hover:shadow-[0_8px_30px_-12px_rgba(217,183,106,0.6)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  Enviar mensagem
                  <Send size={16} strokeWidth={1.75} />
                </button>

                <p className="mt-5 text-xs leading-relaxed text-cream/45">
                  Ao enviar, sua mensagem é aberta no WhatsApp já preenchida com os dados acima.
                  Respondemos dentro do horário de atendimento.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FieldProps {
  label: string
  htmlFor: string
  error?: string
  children: ReactNode
}

function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2.5 block text-[0.68rem] uppercase tracking-[0.16em] text-cream/55"
      >
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-xs text-gold-bright">
          {error}
        </p>
      )}
    </div>
  )
}
