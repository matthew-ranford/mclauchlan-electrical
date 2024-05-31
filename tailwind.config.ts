import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const colors = require('tailwindcss/colors')

const svgToDataUri = require('mini-svg-data-uri')

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        slideIn: 'slideIn 0.8s forwards',
        slideOut: 'slideOut 0.3s forwards',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', backgroundColor: '#292524' },
          '100%': { transform: 'translateX(0)', backgroundColor: '#423e3d' },
        },
        slideOut: {
          '0%': { transform: 'translateX(100%)', backgroundColor: '#423e3d' },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  // darkMode: 'class',
  plugins: [
    addVariablesForColors,
    nextui(),
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-dot-thick': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    },
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}

export default config
