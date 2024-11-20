/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
          Poppins: ["Poppins"]
      },

      backgroundImage:{
        'CodeNextBG': "url('/img/freepik_upload_10771.jpeg')",
      }
    },
  },
  plugins: [],
}