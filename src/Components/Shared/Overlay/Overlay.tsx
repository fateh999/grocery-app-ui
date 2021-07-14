import React, { useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

export type OverlayProps = {
  backgroundColor?: string;
  zIndex?: number;
  style?: ViewStyle;
};

function Overlay(props: OverlayProps) {
  const { backgroundColor, zIndex, style } = props;
  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        overlayStyle: {
          backgroundColor: backgroundColor || "rgba(0,0,0,0.5)",
          zIndex: zIndex ?? -1,
        },
      }),
    [backgroundColor, zIndex]
  );

  return (
    <View
      style={[StyleSheet.absoluteFill, dynamicStyles.overlayStyle, style]}
    ></View>
  );
}

export default Overlay;
