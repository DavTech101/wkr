/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          blue: '#0984e3',
          red: '#c21312',
        },
      },
      fontFamily: {
        comforter: ['Patrick Hand'],
        serif: ['ui-serif', 'Georgia'],
        garamond: ['EB Garamond', 'serif'],
        sans: ['ui-sans-serif', 'system-ui'],
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },

  plugins: [],
};
