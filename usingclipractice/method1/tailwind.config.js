/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors:{
        primary:"blue",
        warning:"yellow",
        danger:"red",
      }
    },
  },
  plugins: [],
}

