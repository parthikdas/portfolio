/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // add other folders if needed
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-color)',
        component: 'var(--component-color)'
      },
      backdropBlur: {
        sm: '4px',
        DEFAULT: '10px',
        lg: '20px',
        xl: '30px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/filters'), // This plugin enables backdrop-filter
  ],
};
