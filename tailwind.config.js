/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5E6D8',
          dark: '#EAD3BE',
          light: '#FAF2EB',
        },
        brand: {
          blue: '#1DA1F2',
          green: '#39C98A',
          orange: '#E09F70',
          coral: '#EC9792',
          teal: '#76D7C4',
          mint: '#82E0AA',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['SF Mono', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        cursive: ['Snell Roundhand', 'Apple Chancery', 'Brush Script MT', 'Segoe Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
