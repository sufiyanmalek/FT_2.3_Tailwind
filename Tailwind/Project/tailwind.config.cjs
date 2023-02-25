/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors : {
        'linkHover' : "#52a8b5",
        'primary-border' : '#d0d0a7'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")]
}
