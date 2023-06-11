/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
            primary: {
                DEFAULT: "#338C89",
                100: "#5CC3C0",
                300: "#4691A5",
                400: "#338C89",
              },
          secondary: '#FF6347',
          error: '#ef4444',
          loading: '#1E2429',
          success: '#228F67',
          
        },
      },
    },
    plugins: [],
  };
  