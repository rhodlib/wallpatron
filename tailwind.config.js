/** @type {import('tailwindcss').Config} */
import plugin from 'flowbite/plugin'

module.exports = {
  content: ['./templates/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [plugin],
}

