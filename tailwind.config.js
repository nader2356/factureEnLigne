module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
    },
    opacity: { 0: "0", 100: "1" },
    fontSize: {
      "14px": "14px",
      "2rem": "2rem",
      "1rem": "1rem",
      "1.5rem": "1.5rem",
      "8rem": "8rem",
       "1.8em" : "1.8em",
      "1.75rem": "1.75rem",
    },
    borderRadius: {
      large: "6px",
    },

    fontWeight: {
      medium: "500",
    },
    maxWidth: {
      "1/2": "50%",
      "1/4": "25%",
      "0.5rem" : "0.5rem",
      "3rem" : "3rem",
     
    },
    minWidth : {
      "2rem" : "2rem",
      "130px" : "130px"
    },
    minHeight: {
      "1150px": "1150px",
      "1500px": "1500px",
      "1250px": "1250px",
    },
    marginLeft: {
      "11rem": "11rem",
    },

    colors: {
      bg_button: "#212529",
      blue: "#1fb6ff",
      red_error: "#f87171",
      white: "#ffffff",
      background_button: "#d1d5db",
      purple: "#7e5bef",
      text_panel: "#38383d",
      pink: "#ff49db",
      gray_background: "#f3f4f6",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      blackj: "#555",
      divider: "rgba(0,0,0,.1)",
      bb: "#e5e7eb",
      bg_input: "#aaa",
      rr: "#f9fafb",
      ggg: "#374151",
      barckground_textarea: "#f2f5fa",
      border_color: "#d9d9d9",
      panel: "rgba(0, 0, 0, 0.02)",
      "gray-dark": "#273444",
      black: "#000",
      blacke: "#f9fafb",
      ffff: "#444",
      "border-rose": "rgb(244 63 94)",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      red: "#cf5454",
    },
    borderWidth: {
      default: "1px",
    },
	
    extend: {
      screens: {
        "3xl": "1600px",
      },
      margin: {
        "800px": "800px",
        "1150px": "1150px",
        "500px": "500px",
        "420px": "420px",
		"9rem": "9rem",
		"141px" : "141px"
      },
      transitionTimingFunction: {
        "in-expo": "ease-in-out",
      },
      transitionDuration: {
        600: "600ms",
      },
      width: {
        "56vw": "56vw",
        "97%": "97%",
        "36%" : "36%",
        "100%": "100%",
      },
      height: {
        "5vw": "5vw",
      },
    },
  },
  plugins: [],
};
