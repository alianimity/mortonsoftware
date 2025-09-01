import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Maker Software Brand Colors
        'maker-yellow': {
          DEFAULT: '#FFD009',
          light: '#FFE14D',
          dark: '#E6BB08',
          hover: '#FFDC33',
        },
        'maker-blue': {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a5bbff',
          400: '#8197ff',
          500: '#5a73ff',
          600: '#4355d9',
          700: '#3544b3',
          800: '#2d378c',
          850: '#1e2866',
          900: '#002C73',
          950: '#001B4D',
          DEFAULT: '#002C73',
          light: '#1E4A8C',
          dark: '#001B4D',
          hover: '#003D99',
        },
        // Design System Colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        brand: ['Croissant One', 'cursive'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 12vw, 8rem)', '1.1'],
        'display-lg': ['clamp(3rem, 8vw, 6rem)', '1.1'],
        'display-md': ['clamp(2rem, 5vw, 4rem)', '1.1'],
        'h1': ['clamp(2.5rem, 6vw, 3.5rem)', '1.2'],
        'h2': ['clamp(2rem, 4vw, 2.5rem)', '1.3'],
        'h3': ['clamp(1.5rem, 3vw, 2rem)', '1.4'],
        'h4': ['clamp(1.25rem, 2vw, 1.5rem)', '1.5'],
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "bounce-gentle": {
          "0%, 100%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      boxShadow: {
        'maker': '0 4px 14px 0 rgba(255, 208, 9, 0.3)',
        'maker-hover': '0 8px 25px 0 rgba(255, 208, 9, 0.4)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      transitionTimingFunction: {
        'ease-out-cubic': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in-out-cubic': 'cubic-bezier(0.4, 0, 0.6, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        'fast': '0.15s',
        'normal': '0.3s',
        'slow': '0.5s',
        'slower': '0.8s',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
