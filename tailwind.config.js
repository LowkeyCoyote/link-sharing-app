/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily : {
      sans : ['Instrument Sans', 'sans-serif'],
    },

    colors : {
      "purple" : "#633CFF",
      "purple-hover" : "#BEADFF",
      "light-purple" : "#EFEBFF",
      "dark-grey" : "#333333",
      "grey" : "#737373",
      "border" : "#D9D9D9",
      "light-grey" : "#FAFAFA",
      "white" : "#FFFFFF",
      "red" : "#FF3939"
    },

    fontSize : {
      "h1-desktop" : "32px",
      "h1-mobile" : "24px",
      "p-desktop" : "16px",
      "p-small" : "12px"
    },

    backgroundImage : {
      'icon-mail' : "url(/src/assets/shared/icon/icon-mail.svg)",
      'icon-password' : "url(/src/assets/shared/icon/icon-password.svg)",
    },

    screens: {
      md: { max: "1024px"},
      sm: { max: "640px" }
		},

    extend: {},
  },
  plugins: [],
}

