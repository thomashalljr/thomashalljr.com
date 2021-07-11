const munsRubyColor = '#980905'

module.exports = {
  purge: {
    mode: 'production',
    content: [
      './src/**/*.md',
      './src/**/*.liquid',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: theme => ({
      ...theme('colors'),
      'muns-ruby': munsRubyColor,
      'muns-black': '#050505',
    }),
    fontFamily: {
      'muns-sans': 'Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'muns-ruby': munsRubyColor,
      'muns-gray-100': '#fcf9f9',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
