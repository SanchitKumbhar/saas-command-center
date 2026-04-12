import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
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
        border: "oklch(var(--border))",
        "border-strong": "oklch(var(--border-strong))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",

        surface: {
          1: "oklch(var(--surface-1))",
          2: "oklch(var(--surface-2))",
          3: "oklch(var(--surface-3))",
        },

        neutral: {
          50:  "oklch(var(--neutral-50))",
          100: "oklch(var(--neutral-100))",
          200: "oklch(var(--neutral-200))",
          300: "oklch(var(--neutral-300))",
          400: "oklch(var(--neutral-400))",
          500: "oklch(var(--neutral-500))",
          600: "oklch(var(--neutral-600))",
          700: "oklch(var(--neutral-700))",
          800: "oklch(var(--neutral-800))",
          900: "oklch(var(--neutral-900))",
        },

        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          hover: "oklch(var(--primary-hover))",
          active: "oklch(var(--primary-active))",
          subtle: "oklch(var(--primary-subtle))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          subtle: "oklch(var(--destructive-subtle))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "oklch(var(--success) / <alpha-value>)",
          subtle: "oklch(var(--success-subtle))",
          foreground: "oklch(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "oklch(var(--warning) / <alpha-value>)",
          subtle: "oklch(var(--warning-subtle))",
          foreground: "oklch(var(--warning-foreground))",
        },
        info: {
          DEFAULT: "oklch(var(--info) / <alpha-value>)",
          subtle: "oklch(var(--info-subtle))",
          foreground: "oklch(var(--info-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
          6: "oklch(var(--chart-6))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body:    ["var(--font-body)", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },

      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
        xs:    ["0.75rem",   { lineHeight: "1rem" }],
        sm:    ["0.875rem",  { lineHeight: "1.25rem" }],
        base:  ["1rem",      { lineHeight: "1.6" }],
        lg:    ["1.0625rem", { lineHeight: "1.625rem" }],
        xl:    ["1.25rem",   { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem",    { lineHeight: "2rem" }],
        "3xl": ["1.875rem",  { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem",   { lineHeight: "2.5rem" }],
        "5xl": ["3rem",      { lineHeight: "1" }],
      },

      borderRadius: {
        sm:   "var(--radius-sm)",
        md:   "var(--radius-md)",
        DEFAULT: "var(--radius-md)",
        lg:   "var(--radius-lg)",
        xl:   "var(--radius-xl)",
        full: "var(--radius-full)",
      },

      boxShadow: {
        none: "none",
        xs:   "0 1px 2px 0 oklch(0 0 0 / 0.04)",
        sm:   "0 1px 3px 0 oklch(0 0 0 / 0.08), 0 1px 2px -1px oklch(0 0 0 / 0.04)",
        md:   "0 4px 6px -1px oklch(0 0 0 / 0.08), 0 2px 4px -2px oklch(0 0 0 / 0.04)",
        lg:   "0 10px 15px -3px oklch(0 0 0 / 0.1), 0 4px 6px -4px oklch(0 0 0 / 0.05)",
        xl:   "0 20px 25px -5px oklch(0 0 0 / 0.1), 0 8px 10px -6px oklch(0 0 0 / 0.05)",
        "2xl":"0 25px 50px -12px oklch(0 0 0 / 0.25)",
        subtle: "0 0 0 1px oklch(0 0 0 / 0.06), 0 2px 4px oklch(0 0 0 / 0.06)",
      },

      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "22": "5.5rem",
      },

      transitionDuration: {
        instant: "100ms",
        fast:    "150ms",
        normal:  "200ms",
        slow:    "300ms",
      },

      transitionTimingFunction: {
        standard:    "cubic-bezier(0.4, 0, 0.2, 1)",
        decelerate:  "cubic-bezier(0, 0, 0.2, 1)",
        accelerate:  "cubic-bezier(0.4, 0, 1, 1)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-down": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-12px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(12px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        "content-show": {
          from: { opacity: "0", transform: "scale(0.97) translateY(-4px)" },
          to:   { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },

      animation: {
        "accordion-down":  "accordion-down 0.2s ease-out",
        "accordion-up":    "accordion-up 0.2s ease-out",
        "fade-in":         "fade-in 0.2s ease-out",
        "fade-in-up":      "fade-in-up 0.25s ease-out",
        "slide-in-up":     "slide-in-up 0.25s ease-out",
        "slide-in-down":   "slide-in-down 0.25s ease-out",
        "slide-in-left":   "slide-in-left 0.25s ease-out",
        "slide-in-right":  "slide-in-right 0.25s ease-out",
        "scale-in":        "scale-in 0.2s ease-out",
        "content-show":    "content-show 0.2s cubic-bezier(0, 0, 0.2, 1)",
        shimmer:           "shimmer 1.5s linear infinite",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
