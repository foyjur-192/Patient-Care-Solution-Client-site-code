module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      fontFamily: {
       
        'headline': ["Heebo", "Bold"],
        'body': ["Rubik","Regular"]
      },
    },
    daisyui: {
      DoctorTheme: {
        primary: "#282B4C",
        secondary: "#262626",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
   
    },
  },
  plugins: [require("daisyui")],
}
