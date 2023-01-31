/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      seagreen: {
        "50": "#32B6EA",
        "200": "#0182AA",
      },
      black: {
        "50": "#252525",
        "100": "#06071B",
      },
      white: {
        "50": "#F6F6F6",
        "100": "#fff",
      },
      gray: {
        "50": "#8D8E9E",
        "100": "rgba(46, 114, 210, 0.08)",
        "200": "#263045",
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
