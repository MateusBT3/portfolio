/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-100': "#ffffff",
        'primary-300': '#9ca3af',
        'primary-500': '#0f766e',
        'primary-700': '#1f2937',
        'primary-900': '#00BFFF',
      },
      height:{
        'hvm': 'calc(100vh - 4.75rem)'
      },
      fontFamily:{
        'ox': '"Oxanium", sans-serif'
      },
    },
  },
  plugins: [],
}

