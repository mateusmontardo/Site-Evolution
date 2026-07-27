# Evolution Casas de Madeira — site institucional

Landing page single-page em Vite + React + TypeScript + TailwindCSS.

## Rodando o projeto

Requer Node.js 18+ (não estava instalado na máquina onde o projeto foi criado).

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção em dist/
npm run preview  # pré-visualiza o build
```

## Estrutura

```
src/
  components/
    layout/     Header, Footer, WhatsAppButton
    sections/   Hero, About, Models, Differentials, Gallery,
                Testimonials, Coverage, Contact
    ui/         Button, Reveal, SectionHeading, SectionDivider,
                TreeRingMotif, ModelIcons
  data/         site.ts, models.ts, differentials.ts,
                testimonials.ts, gallery.ts
  hooks/        useScrollHeader, useActiveSection
  styles/       index.css (tokens + camadas Tailwind)
```

Todo o conteúdo editável (textos de modelos, depoimentos, diferenciais, dados de
contato) vive em `src/data/` — não é preciso mexer nos componentes para atualizar copy.

## Pendências antes de publicar

1. **Dados reais de contato** — `src/data/site.ts`: telefone/WhatsApp, e-mail, endereço,
   redes sociais. Os mesmos dados aparecem no JSON-LD do `index.html`.
2. **Fotografia** — todas as imagens são placeholders. Procure por `TODO` em
   `src/data/models.ts`, `src/data/gallery.ts`, `src/components/sections/Hero.tsx`
   e no `index.html` (imagem Open Graph).
3. **Depoimentos** — `src/data/testimonials.ts` traz textos representativos;
   substituir por depoimentos reais com autorização por escrito.
4. **Backend do formulário** — hoje o envio monta a mensagem e abre o WhatsApp.
   O ponto de integração está comentado em
   `src/components/sections/Contact.tsx`, na função `onSubmit`.
5. **Domínio** — atualizar as URLs canônica/Open Graph no `index.html`.
