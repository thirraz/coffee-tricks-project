/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        Oxygen: "'Oxygen', sans-serif",
      },
      backgroundColor: {
        customYellowBg: "#e89312",
        lightYellow: "#FFBA08",
        hoverYellowBg: "#EA9E2C",
        boldTextColor: "#2F2F2F",
        CTAButtonColor: "#d52f40",
        CTAButtonColorHover: "#D94555",
        footerBgColor: "#03071E",
      },
      textColor: {
        boldTextColor: "#2F2F2F",
        redColor: "#d52f40",
      },
    },
  },
  plugins: [],
};
