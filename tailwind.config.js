/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-pattern": "url('../images/bg-desktop.svg')",
        "mobile-pattern": "url('../images/bg-mobile.svg')",
      },
      colors: {
        violet: "var(--clr-violet)",
        "soft-magenta": "var(--clr-soft-magenta)",
      },
      fontFamily: {
        "open-sans": ["Open Sans"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
