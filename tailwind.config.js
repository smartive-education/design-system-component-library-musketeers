/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  presets: [],
  darkMode: "media", // or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    supports: {},
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      lime: colors.lime,
      slate: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
      },
      violet: {
        50: "#F5F3FF",
        100: "#EDE9FE",
        200: "#DDD6FE",
        300: "#C4B5FD",
        400: "#A78BFA",
        500: "#8B5CF6",
        600: "#7C3AED",
        700: "#6D28D9",
        800: "#5B21B6",
        900: "#4C1D95",
      },
      pink: {
        50: "#FDF2F8",
        100: "#FCE7F3",
        200: "#FBCFE8",
        300: "#F9A8D4",
        400: "#F472B6",
        500: "#EC4899",
        600: "#DB2777",
        700: "#BE185D",
        800: "#9D174D",
        900: "#831843",
      },
    }),
    spacing: {
      xxs: "4px",
      xs: "8px",
      s: "16px",
      m: "24px",
      l: "32px",
      xl: "48px",
      xxl: "64px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      48: ["48px"],
      40: ["40px"],
      32: ["32px"],
      24: ["24px"],
      20: ["20px"],
      18: ["18px"],
      16: ["16px"],
      14: ["14px"],
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      normal: "1.4",
      relaxed: "1.45",
    },
    fontWeight: {
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    borderRadius: {
      'default': '8px',
      '24': '24px',
      '38': '38px',
    },
    backdropBlur: ({ theme }) => theme("blur"),
    backdropBrightness: ({ theme }) => theme("brightness"),
    backdropContrast: ({ theme }) => theme("contrast"),
    backdropGrayscale: ({ theme }) => theme("grayscale"),
    backdropHueRotate: ({ theme }) => theme("hueRotate"),
    backdropInvert: ({ theme }) => theme("invert"),
    backdropOpacity: ({ theme }) => theme("opacity"),
    backdropSaturate: ({ theme }) => theme("saturate"),
    backdropSepia: ({ theme }) => theme("sepia"),
    backgroundColor: ({ theme }) => theme("colors"),
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr":
          "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl":
          "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl":
          "linear-gradient(to top left, var(--tw-gradient-stops))",
    },
    backgroundOpacity: ({ theme }) => theme("opacity"),
    borderColor: ({ theme }) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.200", "currentColor"),
    }),
    borderOpacity: ({ theme }) => theme("opacity"),
    borderSpacing: ({ theme }) => ({
      ...theme("spacing"),
    }),
    boxShadowColor: ({ theme }) => theme("colors"),
    caretColor: ({ theme }) => theme("colors"),
    accentColor: ({ theme }) => ({
      ...theme("colors"),
      auto: "auto",
    }),
    divideColor: ({ theme }) => theme("borderColor"),
    divideOpacity: ({ theme }) => theme("borderOpacity"),
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    divideWidth: ({ theme }) => theme("borderWidth"),
    dropShadow: {
      sm: "0 1px 1px rgb(0 0 0 / 0.05)",
      DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
      md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
      lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
      xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      none: "0 0 #0000",
    },
    fill: ({ theme }) => ({
      none: "none",
      ...theme("colors"),
    }),
    flexBasis: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
    }),
    gap: ({ theme }) => theme("spacing"),
    gradientColorStops: ({ theme }) => theme("colors"),
    height: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    }),
    inset: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%",
    }),
    margin: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    maxHeight: ({ theme }) => ({
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    }),
    maxWidth: ({ theme, breakpoints }) => ({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
      ...breakpoints(theme("screens")),
    }),
    padding: ({ theme }) => theme("spacing"),
    placeholderColor: ({ theme }) => theme("colors"),
    placeholderOpacity: ({ theme }) => theme("opacity"),
    outlineColor: ({ theme }) => theme("colors"),
    ringColor: ({ theme }) => ({
      DEFAULT: theme("colors.blue.500", "#3b82f6"),
      ...theme("colors"),
    }),
    ringOffsetColor: ({ theme }) => theme("colors"),
    ringOpacity: ({ theme }) => ({
      DEFAULT: "0.5",
      ...theme("opacity"),
    }),
    scrollMargin: ({ theme }) => ({
      ...theme("spacing"),
    }),
    scrollPadding: ({ theme }) => theme("spacing"),
    sepia: {
      0: "0",
      DEFAULT: "100%",
    },
    skew: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
    },
    space: ({ theme }) => ({
      ...theme("spacing"),
    }),
    stroke: ({ theme }) => ({
      none: "none",
      ...theme("colors"),
    }),
    textColor: ({ theme }) => theme("colors"),
    textDecorationColor: ({ theme }) => theme("colors"),
    textIndent: ({ theme }) => ({
      ...theme("spacing"),
    }),
    textOpacity: ({ theme }) => theme("opacity"),
    translate: ({ theme }) => ({
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%",
    }),
    width: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    }),
  },
  variantOrder: [
    "first",
    "last",
    "odd",
    "even",
    "visited",
    "checked",
    "empty",
    "read-only",
    "group-hover",
    "group-focus",
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled",
  ],
  plugins: [],
};