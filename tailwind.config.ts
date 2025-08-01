import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Cairo', 'Tajawal', 'Segoe UI', 'Tahoma', 'Arial', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
        'tajawal': ['Tajawal', 'sans-serif']
      },
      colors: {
        'primary': '#1a1a1a',
        'accent': '#d4af37',
        'light': '#f8f9fa'
      }
    },
  },
  plugins: [],
}
export default config 