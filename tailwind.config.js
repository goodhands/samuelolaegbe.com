module.exports = {
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
        secondary: 'rgba(0, 0, 0, 0.5)'
      },
      margin:{
        90: '18.9rem',
      },
      listStyleType: {
        square: 'square',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
      keyframes: {
        grow: {
          '0%': { 
            transform: 'scale(0)',
            opacity: '0',
          },
          '50%': { 
            opacity: '0.5',
          },
          '75%': { 
            opacity: '0.7',
          },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      transformOrigin:{
        'top-right': 'top right',
      },
      animation:{
        grow: 'grow 600ms cubic-bezier(0.68, -0.55, 0.27, 1.55)'
      },
      borderWidth: {
        '15': '15px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  future: {
    purgeLayersByDefault: false,
  },
  purge: {
    layers: ['utilities'],
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.html',
    ],
  },
}