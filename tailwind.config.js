/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      rubik: ["var(--font-rubik)", "sans-serif"],
    },
    colors: {
      primary: 'rgb(233,244,254)'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

