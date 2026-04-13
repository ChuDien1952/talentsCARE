import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand red from reference design
        primary: {
          DEFAULT: '#e20b0b',
          hover: '#ea0b0b',
          dark: '#c10909',
        },
        // Dark grays for text and backgrounds
        dark: {
          DEFAULT: '#000000',
          100: '#1d1d1d',
          200: '#2a2a2a',
        },
        // Text colors
        text: {
          DEFAULT: '#000000',
          body: '#5f6973',
          light: '#8a8a8a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      fontSize: {
        'hero': ['18vw', { lineHeight: '1', fontWeight: '700' }],
        'h1': ['55px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '1.3', fontWeight: '500' }],
        'h3': ['30px', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['17px', { lineHeight: '1.64' }],
      },
      spacing: {
        '100': '100px',
        '60': '60px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
