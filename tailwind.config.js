/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      seagreen: {
        "50": "#09EFD3",
        "200": "#0182AA",
      },
      blue: {
        "50": "#0D0921",
        "100": "#06071B",
        "200": "#101124"
      },
      black: {
        "50": "#252525",
        "100": "#06071B",
      },
      white: {
        "50": "rgba(255, 255, 255, 0.9);",
        "100": "#fff",
      },
      pink: {
        "50": "rgba(233, 70, 218, 0.3)",
        "100": "#EF09DA",
      },
    },
    fontFamily: {
      'poppins': ["'Poppins', sans-serif;"],
      'inter': ["'Inter', sans-serif;"]
    }
  },
  plugins: [],
}
