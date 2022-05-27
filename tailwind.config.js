module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
        keyframes: {
            blink: {
                '10%, 40%': {
                    opacity: 0,
                },
                '60%, 90%': {
                    opacity: 100,
                }
            },
        },
        animation: {
            blink: 'blink 0.75s infinite',
        }
    },
  },
  plugins: [],
}
