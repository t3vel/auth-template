/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'], // Шукає всі файли .html і .js у проєкті
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), ['prettier-plugin-tailwindcss']],
};
