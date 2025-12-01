import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7f7',
          100: '#e8ecec',
          200: '#d1d9d9',
          300: '#adb9ba',
          400: '#829396',
          500: '#66787b',
          600: '#556467',
          700: '#485256',
          800: '#3f4649',
          900: '#373c3f',
        },
        accent: {
          50: '#faf5f0',
          100: '#f3e8db',
          200: '#e5cdb5',
          300: '#d5ad89',
          400: '#c68a5d',
          500: '#bc713f',
          600: '#ae5d33',
          700: '#91492c',
          800: '#753c29',
          900: '#603324',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;