// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// }
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure paths to your files
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};


