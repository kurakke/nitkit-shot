import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  options: {
    // https://purgecss.com/safelisting.html#patterns
    safelist: {
      standard: [/^bg-/, /^text-/],
    },
  },
  plugins: [nextui({})],
  theme: {
    extend: {
      colors: {
        base: {
          10: 'rgba(30, 30, 30, 0.10)',
          20: 'rgba(30, 30, 30, 0.20)',
          30: 'rgba(30, 30, 30, 0.30)',
          40: 'rgba(30, 30, 30, 0.40)',
          50: 'rgba(30, 30, 30, 0.50)', // Theme Color/Dark 50%
          60: 'rgba(30, 30, 30, 0.60)',
          70: 'rgba(30, 30, 30, 0.70)',
          80: 'rgba(30, 30, 30, 0.80)',
          85: 'rgba(30, 30, 30, 0.85)',
          90: 'rgba(30, 30, 30, 0.90)',
          100: 'rgba(30, 30, 30, 1)', // Theme Color/Dark
        },
        greenaccent: {
          10: 'rgba(165, 208, 64, 0.10)',
          20: 'rgba(165, 208, 64, 0.20)',
          30: 'rgba(165, 208, 64, 0.30)',
          40: 'rgba(165, 208, 64, 0.40)',
          50: 'rgba(165, 208, 64, 0.50)',
          60: 'rgba(165, 208, 64, 0.60)',
          70: 'rgba(165, 208, 64, 0.70)',
          80: 'rgba(165, 208, 64, 0.80)',
          85: 'rgba(165, 208, 64, 0.85)',
          90: 'rgba(165, 208, 64, 0.90)',
          100: 'rgba(165, 208, 64, 1)', // Theme Color/Light Green
        },
        light: {
          10: 'rgba(241, 241, 241, 0.10)',
          20: 'rgba(241, 241, 241, 0.20)',
          30: 'rgba(241, 241, 241, 0.30)',
          40: 'rgba(241, 241, 241, 0.40)',
          50: 'rgba(241, 241, 241, 0.50)',
          60: 'rgba(241, 241, 241, 0.60)',
          70: 'rgba(241, 241, 241, 0.70)',
          80: 'rgba(241, 241, 241, 0.80)',
          85: 'rgba(241, 241, 241, 0.85)',
          90: 'rgba(241, 241, 241, 0.90)',
          100: 'rgba(241, 241, 241, 1)', // Theme Color/Light
        },
        main: {
          10: 'rgba(1, 74, 46, 0.10)',
          20: 'rgba(1, 74, 46, 0.20)',
          30: 'rgba(1, 74, 46, 0.30)',
          40: 'rgba(1, 74, 46, 0.40)',
          50: 'rgba(1, 74, 46, 0.50)',
          60: 'rgba(1, 74, 46, 0.60)',
          70: 'rgba(1, 74, 46, 0.70)',
          80: 'rgba(1, 74, 46, 0.80)',
          85: 'rgba(1, 74, 46, 0.85)', // Theme Color/Deep Green 85%
          90: 'rgba(1, 74, 46, 0.90)',
          100: 'rgba(1, 74, 46, 1)', // Theme Color/Deep Green
        },
        yellwaccent: {
          10: 'rgba(236, 184, 29, 0.10)',
          20: 'rgba(236, 184, 29, 0.20)',
          30: 'rgba(236, 184, 29, 0.30)',
          40: 'rgba(236, 184, 29, 0.40)',
          50: 'rgba(236, 184, 29, 0.50)',
          60: 'rgba(236, 184, 29, 0.60)',
          70: 'rgba(236, 184, 29, 0.70)',
          80: 'rgba(236, 184, 29, 0.80)',
          85: 'rgba(236, 184, 29, 0.85)',
          90: 'rgba(236, 184, 29, 0.90)',
          100: 'rgba(236, 184, 29, 1)', // Theme Color/Yellow
        },
      },
    },
  },
};
