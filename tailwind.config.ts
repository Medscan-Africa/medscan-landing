import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'Poppins-bold': "SatoshiBold",
      'Satosi-Thin': "SatoshiThin"
    },
    extend: {
      colors: {
        primary: '#28a745',
        secondary: '#d4edda',
        black: '#000000',
        white: '#ffffff',
      },
      backgroundImage:{
        'hero': "url('/assets/Hero.png')",
        'mousehover': "url('/assets/mousehover.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
