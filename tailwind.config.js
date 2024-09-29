/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Paths to your files to scan for Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add custom font here
        sans: ['Noto Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
