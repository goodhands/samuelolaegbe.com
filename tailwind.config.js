module.exports = {
  purge: [],
  theme: {
    fontSize: {
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '5xl': '5rem',
      '6xl': '6rem',
      '7xl': '7rem'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Crimson Text', 'sans-serif'],
      body: ['Cabin', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  }
}