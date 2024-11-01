module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a",
        orange: "#ff6347",
        ghost: "#ff3b3b",
      },
      boxShadow: {
        ghost: "0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 0, 0, 0.5)",
      },
      backgroundImage: {
        pattern:
          "url('https://www.transparenttextures.com/patterns/dark-denim.png')",
      },
      fontFamily: {
        halloween: ["Creepster", "cursive"],
      },
    },
  },
  plugins: [],
};
