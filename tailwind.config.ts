import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B5345',
          50: '#E8F5F2',
          100: '#C5E8E0',
          500: '#0B5345',
          600: '#094438',
          700: '#07352B',
        },
        accent: {
          DEFAULT: '#148F77',
          light: '#1ABC9C',
        },
        highlight: {
          DEFAULT: '#D4AC0D',
          light: '#F1C40F',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
