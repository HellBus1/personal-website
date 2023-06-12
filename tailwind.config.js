/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myLight: {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
        },
      },
      {
        myDark: {
          "primary": "#496e97",

          "secondary": "#ed5ead",
          
          "accent": "#8000d6",
          
          "neutral": "#111319",
          "neutral-content": "#ffffff",

          "base-100": "#1a1c26",

          "info": "#2b88da",
          "success": "#40e7b5",
          "warning": "#936e10",
          "error": "#ef7682",
        }
      }
    ],
  },
}
