/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': '"Roboto Mono", monospace',
      },
      blur: {
        s: '1px',
        xs: '0.5px',
        xxs: '0.4px',
        xxxs: '0.3px',
      },
      screens: {
        xs: '640px' 
      },
      zIndex: {
        1: '1', 
        2: '2', 
        3: '3', 
        4: '4', 
        5: '5', 
        6: '6', 
        7: '7', 
        8: '8', 
        9: '9', 
        21: '21',
        22: '22',
        23: '23',
        24: '24',
        25: '25',
        26: '26',
        27: '27',
        28: '28',
        29: '29',
        100: '100',
      },
      gridTemplateColumns: {
        35: 'repeat(35, minmax(0, 1fr))', 
      },
      clipPath: {
        custom: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
      },
    },
  },
  plugins: [],
}

