// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         montserrat: ['Montserrat', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-shadow-sm': {
            textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow': {
            textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-lg': {
            textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-xl': {
            textShadow: '6px 6px 6px rgba(0, 0, 0, 0.5)',
          },
        },
        ['responsive', 'hover', 'focus']
      );
    },
  ],
}
