import { Lato, Open_Sans } from 'next/font/google';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#21409a',
        secondary: '#0cb7e2',
        titleColor: '#030c3f',
        textColor: '#676877',
        linkColor: '#07b2fc',
        linkHovColor: '#0995d6',
      },
      screens: {
        xs: '480px',
      },
      backgroundImage: {
        'linear-gradient': 'linear-gradient(90deg, #0cb7e2 0%,#2264c2 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
