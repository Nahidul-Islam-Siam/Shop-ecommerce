/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode for manual toggling
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Use CSS variables for background
        foreground: "var(--foreground)", // Use CSS variables for text color
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Define Poppins font family
      },
    },
  },
  plugins: [],
};
