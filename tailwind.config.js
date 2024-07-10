module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        customAni: {
          '0%': { transform: 'translateX(800px)' },
          '100%': { transform: 'translateX(-100px)' },
        },
      },
      animation: {
        customAni: 'customAni 2s ease 0s 1 normal forwards',
      },
    },
  },
  plugins: [],
}
