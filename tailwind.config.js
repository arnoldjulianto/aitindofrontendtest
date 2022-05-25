//TAILWIND CONFIG
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui' ],
      'serif': ['ui-serif', 'Georgia', 'Lato'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'lato': ["Lato", "cursive"],
      'intro': ["Intro", "cursive"],
      'lora': ["Lora", "cursive"],
      'opensans': ["OpenSans", "cursive"],
    },
    extend: {
      colors: {
        'primary': '#993300',
        'secondary': '#802b00',
        'third': '#ad6b25',
        'fourth': '#bb7025',
        'fifth': '#cc7a00',
        
      },
    },
  },
  plugins: [],
}
