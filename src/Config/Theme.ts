import { DefaultTheme, DarkTheme } from "react-native-paper";

type FontSizes = {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  body: number;
  paragraph: number;
  caption: number;
  overline: number;
};

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      white: string;
      black: string;
    }

    interface Theme {
      fontSizes: FontSizes;
    }
  }
}

const fontSizes = {
  h1: 96,
  h2: 60,
  h3: 48,
  h4: 34,
  h5: 24,
  h6: 20,
  body: 16,
  paragraph: 14,
  caption: 12,
  overline: 10,
};

export const DayTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#02AAB0",
    white: "#ffffff",
    black: "#000000",
  },
  fontSizes,
};

export const NightTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#02AAB0",
    white: "#ffffff",
    black: "#000000",
  },
  fontSizes,
};

export const Gradients = {
  main: `linear-gradient(to right, #02AAB0, #00CDAC)`,
};

export const InputTheme = {
  colors: {
    background: "rgba(0,0,0,0.3)",
    text: "#ffffff",
    placeholder: "rgba(255,255,255,0.5)",
  },
};

export const TransparentHeaderTheme = {
  colors: {
    primary: "transparent",
    surface: "transparent",
    background: "transparent",
  },
};

export const TransparentOverlayHeaderTheme = {
  colors: { primary: "rgba(0,0,0,0.1)" },
};
