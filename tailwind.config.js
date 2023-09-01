import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
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
          DEFAULT: 'rgba(30, 30, 30, 1)', // Theme Color/Dark
          secondary: 'rgba(30, 30, 30, 0.50)', // Theme Color/Dark 50%
        },
        greenaccent: {
          DEFAULT: 'rgba(165, 208, 64, 1)', // Theme Color/Light Green
        },
        light: {
          DEFAULT: 'rgba(241, 241, 241, 1)', // Theme Color/Light
        },
        main: {
          DEFAULT: 'rgba(1, 74, 46, 1)', // Theme Color/Deep Green
          secondary: 'rgba(1, 74, 46, 0.85)', // Theme Color/Deep Green 85%
        },
        yellwaccent: {
          DEFAULT: 'rgba(236, 184, 29, 1)', // Theme Color/Yellow
        },
      },
    },
  },
};
