/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Deep Blue (Header/Sidebar)
          light: '#3B82F6',
          dark: '#172554',
        },
        secondary: {
          DEFAULT: '#10B981', // Emerald Green (Login Button/Active states)
          hover: '#059669',
        },
        surface: {
          DEFAULT: '#F3F4F6', // Light Gray Background
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Modern clean font
      }
    },
  },
  plugins: [],
}