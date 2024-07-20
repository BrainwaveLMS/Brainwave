/** @type {import('tailwindcss').Config} */

export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
colors: {
 'text': '#0d211f',
 'background': '#f5f5f5',
 'primary': '#31b4a7',
 'secondary': '#7ecdfb',
 'accent': '#fa9a00',
},
    },
  },
  plugins: [],
}

