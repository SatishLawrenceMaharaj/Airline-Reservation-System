/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-scrollbar': '#813F98',
      },
      scrollbarWidth: {
        thin: 'thin', // You can customize the width
      },
      borderRadius: {
        'custom': '10px' // You can customize the border radius if needed
      },
    },
  },
  variants: {
    scrollbar: ['rounded'], // Enable rounded scrollbar
  },
  plugins: [
    require('tailwind-scrollbar'), // Add this plugin
  ],
};

