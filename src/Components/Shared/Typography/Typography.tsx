import React, { useMemo } from "react";
import { StyleSheet, TextProps } from "react-native";
import { Text, useTheme } from "react-native-paper";

export interface TypographyProps extends TextProps {
  children?: any;
  textAlign?: "left" | "center" | "right";
  fontSize?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "paragraph"
    | "caption"
    | "overline"
    | number;
  variant?:
    | "primary"
    | "background"
    | "surface"
    | "accent"
    | "error"
    | "text"
    | "onSurface"
    | "disabled"
    | "placeholder"
    | "backdrop"
    | "notification"
    | "black"
    | "white";
  color?: string;
  type?: "light" | "medium" | "regular" | "thin";
  textTransform?: "capitalize" | "none" | "uppercase" | "lowercase";
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
    | undefined;
}

function Typography(props: TypographyProps) {
  const {
    textAlign,
    style,
    fontSize,
    color,
    type,
    variant,
    textTransform,
    textDecorationLine,
  } = props;
  const theme = useTheme();
  const { fontFamily, fontWeight } = theme.fonts[type ?? "light"];
  const textFontSize =
    typeof fontSize === "string" ? theme.fontSizes[fontSize] : fontSize;
  const textColor = color
    ? color
    : variant
    ? theme.colors[variant]
    : theme.colors.text;

  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        typographyStyle: {
          textAlign,
          fontSize: textFontSize ? textFontSize : textFontSize,
          color: textColor,
          fontFamily,
          fontWeight,
          textTransform,
          textDecorationLine,
        },
      }),
    [
      textAlign,
      textFontSize,
      textColor,
      fontFamily,
      fontWeight,
      textTransform,
      textDecorationLine,
    ]
  );

  return <Text {...props} style={[dynamicStyles.typographyStyle, style]} />;
}

export default Typography;
