/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,js}', './static/images/logo.svg']
export const theme = {
  extend: {
    colors: {
      lime: '#DFFFB4',
      blue: '#81C8FF',
      darkteal: '#003541',
      lightnavy: '#24559F',
      navy: '#002A69',
      white: '#FFFFFF',
    },
    fontFamily: {
      header: ['JosefinSans', 'sans-serif'],
      subheader: ['JosefinSans', 'sans-serif'],
      body: ['JosefinSans', 'sans-serif'],
    },
    screens: {
      phone: '640px', // sm
      // => @media (min-width: 640px) { ... }

      tablet: '768px', // md
      // => @media (min-width: 768px) { ... }

      'lg-tablet': '1024px', // lg
      // => @media (min-width: 1024px) { ... }

      laptop: '1920px',
      // => @media (min-width: 1800px) { ... }

      '4k': '3000px',
      // => @media (min-width: 1920px) { ... }
    },
  },
}
export const plugins = []