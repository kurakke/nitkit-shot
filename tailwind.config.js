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
      boxShadow: {
        'keep-out-teep': '0px 8px 8px 2px rgba(0, 0, 0, 0.25)',
        ranking: '0px 8px 8px 2px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'accent-green': {
          DEFAULT: 'rgba(165, 208, 64, 1)', // Theme Color/Light Green
        },
        'accent-yellow': {
          DEFAULT: 'rgba(236, 184, 29, 1)', // Theme Color/Yellow
        },
        base: {
          DEFAULT: 'rgba(30, 30, 30, 1)', // Theme Color/Dark
          secondary: 'rgba(30, 30, 30, 0.50)', // Theme Color/Dark 50%
        },
        light: {
          DEFAULT: 'rgba(241, 241, 241, 1)', // Theme Color/Light
        },
        main: {
          DEFAULT: 'rgba(1, 74, 46, 1)', // Theme Color/Deep Green
          secondary: 'rgba(1, 74, 46, 0.85)', // Theme Color/Deep Green 85%
        },
        white: {
          DEFAULT: 'rgba(255, 255, 255, 1)', // Theme Color/White
        },
      },
      fontFamily: {
        main: ['var(--font-dotGothic16)'],
        'menu-english': ['var(--font-roadRage)'],
        'menu-japanese': ['var(--font-cuprum)'],
        ranking: ['var(--font-frijole)'],
        sub: ['var(--font-inter)'],
        title: ['var(--font-nosifer)'],
      },
      lineHeight: {
        basic: '1.17',
      },
      boxShadow: {
        org: '0 5px 15px 10px rgba(0, 0, 0, 0.125)',
      },
    },
  },
};
