// tailwind.config.js

import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant files
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}
