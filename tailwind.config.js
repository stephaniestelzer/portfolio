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
        fontFamily: {
            sans: ['var(--font-lexend)', 'Lexend'],
            heading: ['var(--font-lexend)', 'Lexend'],
            body: ['var(--font-lexend)', 'Lexend'],
        },
        fontSize: {
            h1: ['5rem', { lineHeight: '1.2' }],          // 80px
            h2: ['3.75rem', { lineHeight: '1.2' }],       // 60px
            h3: ['2.9375rem', { lineHeight: '1.2' }],     // 47px
            h4: ['2.25rem', { lineHeight: '1.2' }],       // 36px
            h5: ['1.6875rem', { lineHeight: '1.2' }],     // 27px
            h6: ['1.3125rem', { lineHeight: '1.2' }],     // 21px
            'h6-medium': ['1.3125rem', { lineHeight: '1.2' }],
            body: ['1rem', { lineHeight: '1.2' }],        // 16px
            p02: ['0.75rem', { lineHeight: '1.2' }],      // 12px
          }
      },
    },
    plugins: [],
  }