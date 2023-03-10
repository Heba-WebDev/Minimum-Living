/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
     container: {
      
      padding: {
        DEFAULT: '1rem',
        tiny: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        
      },
      screens: {
        'tiny': '321px',
        // => @media (min-width: 640px) { ... }
      },
    },
    extend:
     {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(auto-fit, minmax(250px, 1fr));',
        '20': '1fr, 1fr, 40px',
        '18': 'repeat(auto-fit, minmax(135px, 1fr));',
        '17': 'repeat(auto-fit, minmax(105px, 1fr));',
        '19': 'repeat(auto-fit, minmax(200px, 1fr));',
      },
    },
  },
  plugins: [
      require('@tailwindcss/line-clamp'),
    ],
}