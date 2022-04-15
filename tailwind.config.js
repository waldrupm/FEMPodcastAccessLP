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
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
}
