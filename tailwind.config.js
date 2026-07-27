/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#17140F', // preto quente — fundo principal
          soft: '#221E17', // fundo de cards / seções alternadas
        },
        gold: {
          DEFAULT: '#B08D42', // dourado envelhecido — bordas, ícones, CTAs
          bright: '#D9B76A', // hover / destaques pontuais
        },
        cream: '#F3EEE3', // texto corrido sobre fundo escuro
        wood: '#3B2A1E', // marrom-madeira — acentos secundários, divisores
        ink: '#0F0D0A', // texto sobre fundo claro
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      maxWidth: {
        content: '78rem',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
