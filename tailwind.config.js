/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light"]
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
   theme: {
    fontSize: {
      sm: ['12px', '18px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    }
  }
}
  
