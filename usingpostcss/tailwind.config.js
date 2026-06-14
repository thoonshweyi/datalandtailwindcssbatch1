/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      animation:{
        'spin-slow':'spin 3s linear infinite',
        "myani": "mykeyone 5s linear infinite alternate",
        "myrotate": "mykeytwo 5s linear infinite",
        "yourani": "mykeythree 5s linear infinite"
      },
      keyframes:{
        mykeyone:{
          '0%': {transform:'translate(0)'},
          '50%': {transform:'translate(300px)'},
          '100%': {transform:'translate(300px,300px)'}
        },
        mykeytwo:{
          'from': {transform:'rotate(0deg)'},
          'to': {transform:'rotate(360deg)'}
        },
        mykeythree:{

          // '0%': {transform:'rotate(0deg)'},
          // '50%': {transform:'rotate(360deg)'},
          // '100%': {transform:'rotate(0deg)'}

          '0%,100%': {transform:'rotate(0deg)'},
          '50%': {transform:'rotate(-1turn)'},
        }
      },

      colors:{
        primary:"blue",
        secondary:"silver",
        info:"skyblue",
        warning:"orange",
        danger:"red"
      },

      fontFamily:{
        aria: ["Arial","sans-serif"],
        times: "Times New Roman",
        mono: "monospace",
        stick: ["Stick","sans-serif"]
      },

      spacing:{
        13: "3.3rem",
        15: "3.8rem",
        sm:"8px",
        md: "12px",
        xl:"24px"
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}