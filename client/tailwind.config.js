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
        background: "#111114",
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
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
};
