/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'first': "#286f6c",
    },
    extend: {
      
    },
  },
  plugins: [require("tw-elements/dist/plugin")]
}
