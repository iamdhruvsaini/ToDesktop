/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gridTemplateRows: {
        'layout': '1fr 0.3fr 1fr',
      },
      colors: {
        'custom-blue': {
          DEFAULT: 'rgb(226, 232, 240)',
          '50': 'rgba(226, 232, 240, 0.5)',
        },
        "lpink":'#FBF5FD',
        "sblue":'#F8FAFC',
      },
      fontFamily:{
        display:['inter' , 'sans-serif']
      },
      backgroundImage:{
        'custom-gradient': 'linear-gradient(148deg, rgba(218,17,193,0.070) 20%, rgba(218,209,17,0.048) 80%)',
      },

      
    },
  },
  plugins: [],
}

