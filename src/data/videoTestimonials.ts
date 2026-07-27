export interface VideoTestimonial {
  /** ID do vídeo no YouTube (a parte depois de /shorts/, /watch?v= ou /embed/) */
  youtubeId: string
  clientName: string
  thumbnail: string
  thumbnailAlt: string
}

/**
 * Depoimentos em vídeo gravados com clientes reais da Evolution, hospedados como
 * vídeos "não listados" no YouTube (subiram automaticamente como Shorts — não
 * afeta o embed, que usa o mesmo player de sempre).
 */
export const videoTestimonials: VideoTestimonial[] = [
  {
    youtubeId: 'dHoAw9NDnI4',
    clientName: 'Andrea Gallina',
    thumbnail: '/images/testimonials/andrea-gallina.jpg',
    thumbnailAlt: 'Andrea Gallina, cliente da Evolution, gravando depoimento em vídeo',
  },
  {
    youtubeId: 'Icx9b5KPoFM',
    clientName: 'Valdir Trapp',
    thumbnail: '/images/testimonials/valdir-trapp.jpg',
    thumbnailAlt: 'Valdir Trapp, cliente da Evolution, gravando depoimento em vídeo',
  },
]
