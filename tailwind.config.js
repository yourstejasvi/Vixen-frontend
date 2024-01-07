/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        salsa: ['Salsa', 'sans-serif'],
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
            easing: 'cubic-bezier(0.8, 0, 0.2, 1)',
          },
          '40%': {
            transform: 'translateY(-30px)',
            easing: 'cubic-bezier(0.8, 0, 0.2, 1)',
          },
          '60%': {
            transform: 'translateY(-15px)',
            easing: 'cubic-bezier(0.8, 0, 0.2, 1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        reverseFloat: {
          '0%, 100%': {
            transform: 'translateY(-10px)',
          },
          '50%': {
            transform: 'translateY(0)',
          },

        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
        slowBounce: 'bounce 3s infinite',
        float: 'float 5s infinite',
        reverseFloat : 'reverseFloat 5s infinite',
      },
    },
  },
  plugins: [],
};
