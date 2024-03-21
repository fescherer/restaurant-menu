import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: '#11671f',
      textOnPrimary: '#ffffff',
      secondary: '#0B1C31',
      background: '#FAFEFF',
      accent: '#3d9bf9',
      text: '#061323',

      foreground: '#ffffff',

      warning: {
        icon: '#FFCC00',
        bg: '#fcebc3',
        action: '#e9cc87',
      },
      error: {
        action: '#cb4550',
      },

      transparent: 'transparent',
    },
    // #f0f1f0
  },
  plugins: [],
}
export default config
