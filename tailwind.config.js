/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Tilt Neon',
          'var(--font-tilt-neon)',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
