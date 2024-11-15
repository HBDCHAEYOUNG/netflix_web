/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-01": "rgb(229, 9, 20)",
        "gray-01": "rgb(170,170,170)",
        "gray-02": "rgb(77,77,77)",
        "gray-03": "rgb(89,89,89)",
        "brand-02": "#831010",
        "background-01": "#141414",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".mobile-padding": {
          paddingLeft: "12px",
          paddingRight: "12px",
        },
        ".tablet-padding": {
          paddingLeft: "30px",
          paddingRight: "30px",
        },
        ".desktop-padding": {
          paddingLeft: "60px",
          paddingRight: "60px",
        },
        ".common-margin": {
          marginTop: "3vw",
          marginBottom: "3vw",
        },
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".translate-center": {
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        },
        ".translate-x-center": {
          left: "50%",
          transform: "translateX(-50%)",
        },
        ".translate-y-center": {
          top: "50%",
          transform: "translateY(-50%)",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    },
  ],
};
