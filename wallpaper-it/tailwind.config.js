/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sprite: "url('./assets/wallpaperit_sprite.png')",
      },
      colors: {
        black: "#161615",
        primary: "#7FC6AC",
        secondary: "#F8F8F8",
        "dark-teal": "#066A76",
      },
    },
    screens: {
      md: "320px",
      lg: "1024px",
    },
  },
  plugins: [],
};
