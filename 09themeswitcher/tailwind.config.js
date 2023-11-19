/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //whenever we are trying to toggle into dark and light mode in tailwind we have to add funcitonality which is darkMode: "class/media" class is for when we change the html class media is based on system.
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

