module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin .9s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        'pparent': {
          DEFAULT: '#8E44AD',
          '50': '#DCC2E7',
          '100': '#D4B3E1',
          '200': '#C396D6',
          '300': '#B278CA',
          '400': '#A15BBF',
          '500': '#8E44AD',
          '600': '#6D3485',
          '700': '#4C245C',
          '800': '#2B1534',
          '900': '#0A050C'
        },
        'pelorous': {
          DEFAULT: '#37B1BA',
          '50': '#BDE8EB',
          '100': '#AEE3E7',
          '200': '#8ED8DD',
          '300': '#6FCDD4',
          '400': '#4FC2CB',
          '500': '#37B1BA',
          '600': '#2B888E',
          '700': '#1E5F63',
          '800': '#113538',
          '900': '#040C0D'
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
