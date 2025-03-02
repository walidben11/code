import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme'; // Changed to default import
import { colors } from './data/config/colors';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans], // Access fontFamily as a property
        cursive: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;