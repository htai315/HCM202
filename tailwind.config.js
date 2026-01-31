/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vietnam-red': '#C41E3A',
        'vietnam-red-dark': '#8B0000',
        'vietnam-gold': '#D4AF37',
        'vietnam-gold-light': '#F4E4BC',
        'sepia': '#704214',
        'dark-navy': '#0A1628',
        'dark-overlay': 'rgba(10, 22, 40, 0.75)',
        'glass': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'serif-display': ['"Cormorant Garamond"', 'serif'],
        'sans': ['"Be Vietnam Pro"', 'sans-serif'],
        'sans-light': ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 4s infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}
