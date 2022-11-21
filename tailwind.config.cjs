/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
      },
      maxHeight: {
        '1/2': '50%',
        '700px': '700px',
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require('daisyui')],
};
