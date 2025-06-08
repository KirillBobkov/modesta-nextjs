/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        font: {
          DEFAULT: "var(--font-color)",
          secondary: "var(--secondary-font-color)",
        },
        background: {
          DEFAULT: "var(--bg-color)",
          opacity: "var(--bg-color-opacity)",
          "gradient-1": "var(--bg-color-gradient-1)",
          "gradient-2": "var(--bg-color-gradient-2)",
        },
        card: {
          DEFAULT: "var(--card-bg-color)",
          opacity: "var(--card-bg-color-opacity)",
          secondary: "var(--secondary-card-bg-color)",
        },
        "box-shadow": "var(--box-shadow)",
        accent: "var(--accent)",
        helper: {
          red: "var(--helper-red)",
          green: "var(--helper-green)",
        },
        snow: "var(--snow)",
        message: {
          header: "var(--message-header)",
        },
        chat: {
          widget: "var(--chat-widget-bg)",
        },
        user: {
          message: "var(--user-message-bg)",
        },
        assistant: {
          message: "var(--assistant-message-bg)",
        },
      },
      spacing: {
        2.5: "0.625rem", // 10px
        7.5: "1.875rem", // 30px
        15: "3.75rem", // 60px
        30: "7.5rem", // 120px
      },
      screens: {
        xl: "1280px",
      },
      maxWidth: {
        "screen-xl": "1280px",
      },
      lineHeight: {
        8: "2rem", // 32px
        10: "2.5rem", // 40px
      },
      keyframes: {
        "tilt-shaking": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-10deg)" },
        },
      },
      animation: {
        "tilt-shaking": "tilt-shaking 0.3s linear infinite",
      },
    },
  },
  plugins: [],
};
