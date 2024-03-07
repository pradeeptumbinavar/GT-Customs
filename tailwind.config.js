/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      
   
    extend: {

      boxShadow:{
        neon:"0 0 5px theme('colors.purple.200'),0 0 20px theme('colors.purple.700')",
        green:"0 0 5px theme('colors.green.200')",
        red:"0 0 5px theme('colors.yellow.700')",
      },
      
    },
    
  },
  plugins: [],
}


