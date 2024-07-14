import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#21409A',
        secondaryBlue: '#030B2D',
        secondary: '#0CB6E1',
        lightBlue: '#E8F0FE',
        red: '#FF5A5A',
        'light-1': '#FFFFFF',
        'light-2': '#fafafa',
        'dark-1': '#000000',

        titleColor: '#030C3F',
        textColor: '#676b77',
      },
      screens: {
        xs: '480px',
      },
      width: {
        '420': '420px',
        '465': '465px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
