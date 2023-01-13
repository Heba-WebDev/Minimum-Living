/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
     container: {
      
      padding: '2rem',
    },
    extend:
     {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(auto-fit, minmax(250px, 1fr));',
        '20': '1fr, 1fr, 40px',
        '18': 'repeat(auto-fit, minmax(140px, 1fr));',
        '19': 'repeat(auto-fit, minmax(180px, 1fr));',
      },
    },
  },
  plugins: [
      require('@tailwindcss/line-clamp'),
    ],
}