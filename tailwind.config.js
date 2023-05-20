import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '8x8': '28rem',
      },
      colors: {
        primary: {
          50: '#FEECEC',
          100: '#FDDEDE',
          200: '#FAB7B7',
          300: '#F89696',
          400: '#F57070',
          500: '#F34D4D',
          600: '#EF1010',
          700: '#B60C0C',
          800: '#770808',
          900: '#3E0404',
          950: '#1D0202',
        },
        form: {
          50: '#FCFDFD',
          100: '#F8FAFC',
          200: '#EEF4F7',
          300: '#E7EFF3',
          400: '#DEE9EF',
          500: '#A9C6D5',
          600: '#76A4BC',
          700: '#4B7F9B',
          800: '#325467',
          900: '#192A34',
          950: '#0D171B',
        },
      },
    },
  },
  plugins: [],
};
