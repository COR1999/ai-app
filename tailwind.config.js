/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New color palette from Coolors
        charcoal: '#202c39',     // Dark blue-gray for backgrounds
        gunmetal: '#283845',     // Slightly lighter blue-gray
        sage: '#b8b08d',         // Muted green-beige
        buff: '#f2d492',         // Light yellow-beige
        sandy: '#f29559',        // Orange-peach accent
        
        // Semantic color mapping
        primary: {
          DEFAULT: '#202c39',     // charcoal
          light: '#283845',       // gunmetal
          dark: '#1a2329',        // darker version of charcoal
        },
        secondary: {
          DEFAULT: '#f29559',     // sandy orange
          light: '#f4a474',       // lighter sandy
          dark: '#e8834a',        // darker sandy
        },
        accent: {
          DEFAULT: '#f2d492',     // buff yellow
          light: '#f5dca7',       // lighter buff
          dark: '#edc876',        // darker buff
        },
        neutral: {
          DEFAULT: '#b8b08d',     // sage
          light: '#c5bda2',       // lighter sage
          dark: '#a59e7a',        // darker sage
        },
        text: {
          primary: '#202c39',     // charcoal for main text
          secondary: '#283845',   // gunmetal for secondary text
          light: '#b8b08d',       // sage for muted text
        },
        background: {
          primary: '#ffffff',
          secondary: '#f8f9fa',
          card: 'rgba(255, 255, 255, 0.9)',
          overlay: 'rgba(32, 44, 57, 0.1)',
        }
      },
    },
  },
  plugins: [],
}