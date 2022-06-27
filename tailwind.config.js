module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    daisyui: {
      DoctorTheme: {
        primary: "#ef4444",
        secondary: "#262626",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
}
