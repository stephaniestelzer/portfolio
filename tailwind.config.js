/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          orange: {
            50: '#FFF3E0',
            100: '#FFE0B2',
            200: '#FFCC80',
            300: '#FFB74D',
            400: '#FFA726',
            500: '#FB8C00',
            600: '#F57C00',
            700: '#EF6C00',
            800: '#E65100',
            900: '#FF5722',
            950: '#BF360C',
          },
        },
      },
    },
    plugins: [],
  }