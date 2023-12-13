/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/app/app.component.html",
    "src/app/card-main/card-main.component.html",
  ],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
      width: {
        "90vw": "90vw",
      },
      height: {
        "90vh": "90vh",
      },
    },
  },
  plugins: [],
};
