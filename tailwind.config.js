const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "lt-green": "#54E6AF",
        "lt-green-over": "#B3FFE2",
        white: "#FFFFFF",
        "lt-gray": "#C2CBE5",
        "med-gray": "#5A668A",
        "dk-gray": "#2C344B",
        "dk-blue": "#121725",
      },
      fontFamily: {
        sans: ["Chivo", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "almost-double": ["26px", "38px"],
        sm: ["15px", "25px"],
      },
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        "mobile-bg": "url('/assets/mobile/image-host.jpg')",
      },
    },
  },
  plugins: [],
}
