const colors = require('tailwindcss/colors')
const defautTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './*.html'
  ],
  darkMode: 'class',
  content: ["./index.html",  "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      ...defautTheme.screens,
    },
    extend: {
      colors: {
        'fondnavcolor':'#2b4b6f',
        'ongletcolor': 'var(--ongletcolor)',
        'bckglight': '#f8f8f8',
        'bckgdark': '#1d1f21',
        'fondcarddark': '#2b2d2f',
        'darkshadowcard': '#47494b',
        'collink': 'var(--collink)',
      }
    },
  },
  corePlugins: {
  },
  plugins: [require('flowbite/plugin')
  ],
}
