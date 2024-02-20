/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'marrom': '#2E1012',
        'amarelo': '#F3CC4D'
      },
      fontFamily:{
        'texto': 'DM Serif Display'
      }
    },
  },
  plugins: [],
}

