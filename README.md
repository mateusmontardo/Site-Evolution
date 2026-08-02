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
                TreeRingMotif, ModelIcons, PhotoCarousel,
                ImageLightbox, VideoModal
  data/         site.ts, models.ts, differentials.ts,
                testimonials.ts, videoTestimonials.ts, gallery.ts
  hooks/        useScrollHeader, useActiveSection, useLenis,
                useLockBodyScroll
  lib/          lenis.ts (instância compartilhada do scroll suave)
  styles/       index.css (tokens + camadas Tailwind)
public/
  images/projetos/   fotos de obras por estilo (colonial/contemporanea/comercial)
  images/testimonials/ capas dos depoimentos em vídeo
  videos/            vídeo de fundo do Hero
```

Todo o conteúdo editável (estilos construtivos, depoimentos, diferenciais, dados de
contato) vive em `src/data/` — não é preciso mexer nos componentes para atualizar copy.

### Estilos construtivos

`src/data/models.ts` define os três estilos (colonial, contemporâneo, comercial) e as
fotos de cada carrossel. A ordem do array é a ordem exibida na seção Especialidades e
no `<select>` do formulário de contato. `src/data/gallery.ts` monta a grade da seção
Projetos — o campo `span` controla o peso de cada foto no grid (`feature` 2x2,
`wide` 2x1, `default` 1x1).

As fotos vieram dos portfólios originais em PDF: cada página trazia o logo e duas fotos
sobre fundo branco, então foram renderizadas, recortadas e convertidas para JPEG
otimizado (1200px, qualidade 80).

## Pendências antes de publicar

1. **E-mail oficial** — `src/data/site.ts` ainda usa um endereço provisório
   (`contato@evolutioncasasdemadeira.com.br`). O mesmo valor aparece no JSON-LD do
   `index.html`.
2. **Imagem Open Graph** — `index.html` ainda aponta para um placeholder; trocar por
   uma foto real 1200x630 de obra entregue.
3. **Backend do formulário** — hoje o envio monta a mensagem e abre o WhatsApp.
   O ponto de integração está comentado em
   `src/components/sections/Contact.tsx`, na função `onSubmit`.
4. **Domínio** — atualizar as URLs canônica/Open Graph no `index.html`.
