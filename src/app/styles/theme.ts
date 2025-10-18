export const theme = {
  colors: {
    white: "#FFFFFF",
    primary: "#2563eb",
    secondary: "#7c3aed",
    background: "#CED1D3",
    button_enable: "#3E3E3E",
    button_disable: "#3E3E3E7F",
    ghost_enable: "#3E3E3E7F",
    ghost_disable: "#00000033",
    text: "#1e293b",
    error: "#dc2626",
    // Основные цвета
    Black: "#000000",
    GrayDark: "#3E3E3E",
    Gray38: "#00000061",
    Gray20: "#00000033",
    GrayLight: "#CED1D3",
    WhiteSolid: "#FFFFFF",
    button_hover: "#3E3E3E7F",

    // Вторичные цвета
    secondary_enable: "#475569",
    secondary_disable: "#cbd5e1",
    secondary_enable_border: "#334155",
    secondary_disable_border: "#e2e8f0",
    secondary_hover: "#334155",

    // Фокус
    focus: "#93c5fd",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  typography: {
    fontWeight: {
      s: "400",
      m: "400",
      l: "400",
      xl: "400",
    },
    lineHeight: {
      s: "16",
      m: "25",
      l: "36",
      xl: "48",
    },
    fontSize: {
      s: "16px",
      m: "24px",
      l: "36px",
      xl: "48px",
    },
  },
  fontSize: {
    s: "16px",
    m: "24px",
    l: "36px",
    xl: "48px",
  },
};

export type ThemeType = typeof theme;
