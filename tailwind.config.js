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
          grey: {
            50: '#FFFFFF',
            100: '#BABABB',
            200: '#98999A',
            300: '#696A6C',
            400: '#4C4D4F',
            500: '#1F2123',
            600: '#1C1E20',
            700: '#161719',
            800: '#111213',
            900: '#0D0E0F',
          },
          blue: {
            600: '#4C76D6',
          },
          tag: {
            selected: '#DCDDDE',
            unselected: '#F5F6F7',
          }
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