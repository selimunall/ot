/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Playfair Display', 'serif', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        ot: {
          gray: '#CCCDD2',
          white: '#E5E4EA',
          green: '#567361',
          light_green: '#c5d9cd',
          black: '#1E2F25',
          green_icon: '#436850'
        }
      }
    }
  },
  plugins: []
};
