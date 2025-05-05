/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          primary:'rgb(239, 68, 68)',
          secondary:' rgb(247, 212, 13)',
          background:'rgb(162, 163, 163, 0.4)'
        }
      },
    },
    plugins: [],
  }
  