/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#A2B1EC",
        accent : "#3051D5",
        milk : "#D2DAEE"
      },
      fontFamily : {
        title : ['Agbalumo']
      }
    },
  },
  plugins: [],
}

