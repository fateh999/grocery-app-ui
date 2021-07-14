import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useMemo } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { Surface, useTheme } from "react-native-paper";

export type ContainerProps = {
  children?: React.ReactNode;
  backgroundColor?: string;
  statusBarBackgroundColor?: string;
  statusBarStyle?: StatusBarStyle;
  fullScreen?: boolean;
  style?: ViewStyle;
};

function Container(props: ContainerProps) {
  const {
    children,
    backgroundColor,
    fullScreen,
    statusBarBackgroundColor,
    statusBarStyle,
    style,
  } = props;
  const theme = useTheme();
  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        statusBarStyle: {
          flex: 0,
          backgroundColor: fullScreen ? "transparent" : theme.colors.primary,
        },
        containerStyle: {
          flex: 1,
          elevation: 0,
          backgroundColor: backgroundColor ?? theme.colors.background,
        },
      }),
    [backgroundColor, fullScreen, theme.colors.background, theme.colors.primary]
  );

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === "android") {
        StatusBar.setTranslucent(fullScreen ?? false);
        StatusBar.setBackgroundColor(
          fullScreen
            ? "transparent"
            : statusBarBackgroundColor ?? theme.colors.primary
        );
      }
      StatusBar.setBarStyle(statusBarStyle ?? "light-content");
    }, [
      fullScreen,
      statusBarBackgroundColor,
      statusBarStyle,
      theme.colors.primary,
    ])
  );

  return (
    <Surface style={[dynamicStyles.containerStyle, style]}>
      <SafeAreaView style={dynamicStyles.statusBarStyle} />
      <SafeAreaView style={dynamicStyles.containerStyle}>
        {children}
      </SafeAreaView>
    </Surface>
  );
}

export default Container;
