import React from "react";
//@ts-ignore
import Gradient from "react-native-css-gradient";
import { StyleSheet, ViewStyle } from "react-native";

type GradientViewProps = {
  gradient: string;
  style?: ViewStyle;
};

function GradientView(props: GradientViewProps) {
  const { gradient, style } = props;
  return (
    <Gradient gradient={gradient} style={[StyleSheet.absoluteFill, style]} />
  );
}

export default GradientView;
