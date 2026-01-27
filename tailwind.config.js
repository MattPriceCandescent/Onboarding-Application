/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#3B82F6',
          grey: {
            light: '#F3F4F6',
            DEFAULT: '#E5E7EB',
            dark: '#6B7280',
            darker: '#1F2937'
          }
        },
        answered: '#656565'
      }
    },
  },
  plugins: [],
}
