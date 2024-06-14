/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pBrown:'RGB(256,125,74)',
        pLightBrown: 'RGB(251,175,133)',
        pBlack: 'RGB(0,0,0)',
        pBlack2:'RGB(16,16,16)',
        pWhite: 'RGB(255,255,255)',
        pWhite2: 'RGB(250,250,250)',
        pGray: 'RGB(241,241,241)',
      }
    },
  },
  plugins: [],
}

