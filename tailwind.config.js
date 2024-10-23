/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        background: '#F7FAFC',   // Light gray background
        primary: '#1A202C',      // Dark gray for text and headers
        secondary: '#718096',    // Muted gray for subtext
        accent: '#65a30d',       // Accent blue
        card: '#FFFFFF',         // White for cards or containers
        border: '#E2E8F0',       // Soft border color
        dark: '#020617'
      }
    },
  },
  plugins: [],
}

