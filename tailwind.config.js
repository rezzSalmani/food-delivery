/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'RocknRoll': 'RocknRoll One',
        'lato': 'lato',
      },
      colors: {
        'primary': '#4c2c10',
        'secondary': '#df2020',
        'third': '#fde4e4',
      },
      animation: {
        'spin-slow': 'spin 1.5s linear ',
        'bounce-one': 'bounce 2s linear',
        'fadeInAnimation': 'fadeInAnimation 1s ease ',
      },
      keyframes: {
        fadeInAnimation: {
          '0%': { opacity: '0', transform: 'translateY(300px)' },
          '100%': { opacity: '1' },
        },
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0,625rem',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '&>*');
      addVariant('child-hover', '&>*:hover');
    },
  ],
};
