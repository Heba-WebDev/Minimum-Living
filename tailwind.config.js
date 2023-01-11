/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
     container: {
      
      padding: '2rem',
    },
    extend: {
      backgroundImage: {
        
       
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(auto-fit, minmax(250px, 1fr));',
      },
    },
  },
  plugins: [],
}