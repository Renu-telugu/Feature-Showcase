/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2F80ED'
        }
      },
      boxShadow: {
        phone: '0 10px 30px rgba(0,0,0,0.15)'
      }
    }
  },
  plugins: []
}


