/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1D1F21',
        'text-primary': '#ECECEC',
        'text-secondary': '#B8BCC8',
        'accent-teal': '#00D1B2',
        'accent-amber': '#FFC857',
        'surface': '#2D2F31',
        'surface-hover': '#3D3F41',
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'sans-serif'],
        'display': ['var(--font-rubik)', 'Rubik', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}