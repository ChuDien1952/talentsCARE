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
        'hero': ['clamp(3rem, 12vw, 12rem)', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.3', fontWeight: '500' }],
        'h3': ['clamp(1.25rem, 3vw, 1.875rem)', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['clamp(0.9375rem, 1vw, 1.0625rem)', { lineHeight: '1.64' }],
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
