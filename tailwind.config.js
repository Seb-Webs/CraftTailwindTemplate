/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.twig',
    './templates/*.twig',
  ],
  theme: {
    extend: {
      colors: {
        'aqua': '#82e8d4',
      }
    },
  },
  plugins: [],
}

