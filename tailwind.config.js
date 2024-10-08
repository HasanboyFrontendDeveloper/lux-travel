const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#61aba7",
        secondary: "#c5f2cb",
      },
      screens: {
        xm: "320px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1500px",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        marquee2: "marquee2 20s linear infinite",
        marqueeReverse: "marqueeReverse 20s linear infinite",
        marqueeReverse2: "marqueeReverse2 20s linear infinite",
        blackHandMovement: 'blackHandMovement 10s linear infinite '
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeReverse2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        blackHandMovement: {
          "0%": { transform: "translateX(0%) translateY(0%)  " },
          "40%": { transform: "translateX(-10%) translateY(10%) " },
          "100%": { transform: "translateX(0%) translateY(0%) " },
        },
      },
    },
  },
  plugins: [],
});
