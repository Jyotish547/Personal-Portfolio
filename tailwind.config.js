/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.html",
    ".src/**/*.ts"],
    theme: {
      extend: {
        boxShadow: {
          'custom': '0 0 30px -10px rgba(0, 0, 0, 0.7)',
        },
      },
    },
    plugins: [],
  }