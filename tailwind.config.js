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
    backgroundImage: {
      'main': "url('../src/img/premium_photo-1673356301535-2cc45bcc79e4.avif')",
    },
  },
  plugins: [],
}
