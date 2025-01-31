import flowbitePlugin from 'flowbite/plugin';
import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        card: "#0c0c0c",
        text: "#eaeaea",
        secondary: "#9e9e9e",
        accent: "#3b82f6",
        border: "#1a1a1a",
        code: "#1e1e1e",
        highlight: "#facc15",
      },
    },
  },
  plugins: [
    flowbitePlugin,
    tailwindScrollbar,
  ],
};