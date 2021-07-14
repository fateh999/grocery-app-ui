import React from "react";
import { useColorScheme } from "react-native";
import { Provider, ThemeProvider } from "react-native-paper";
import { enableScreens } from "react-native-screens";
import { DayTheme, NightTheme } from "./Config/Theme";
import AppRouter from "./Navigation/AppRouter";

enableScreens(true);

function Main() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? NightTheme : DayTheme;

  return (
    <Provider theme={theme}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default Main;
