/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        'primary-text': '#F2F2F2',
        secondary: '#FFCC00',
      },
      fontFamily: {
        'bulgatti': ['Bulgatti', 'sans-serif'],
        'monument_extended' : ['Monument Extended', 'sans-serif'],
        'monument': ['Monument', 'sans-serif'],
      },

    },
  },
  plugins: [],
}