/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["MiSans"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

// 姓名：胡紫慧
// ✨   身份证号码：430611201001160042【女 | 2010年1月16日 | 湖南省 岳阳市 君山区】
// ✨   出生地：湖南省岳阳市君山区