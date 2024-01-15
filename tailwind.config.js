/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        ot: {
          gray: '#CCCDD2',
          white: '#E5E4EA',
          green: '#567361',
          light_green: '#c5d9cd',
          black: '#1E2F25'
        }
      }
    }
  },
  plugins: []
};
