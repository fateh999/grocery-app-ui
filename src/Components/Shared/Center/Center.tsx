import React, { useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

export type CenterProps = {
  children?: React.ReactNode;
  allAxis?: boolean;
  vertical?: boolean;
  flex?: number;
  style?: ViewStyle;
};

function Center(props: CenterProps) {
  const { children, allAxis, vertical, flex, style } = props;
  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        containerStyle: {
          flex: flex ?? (allAxis ? 1 : 0),
        },
      }),
    [flex, allAxis]
  );

  const finalStyle = allAxis
    ? [
        dynamicStyles.containerStyle,
        styles.horizontalStyle,
        styles.verticalStyle,
        style,
      ]
    : [
        dynamicStyles.containerStyle,
        vertical ? styles.verticalStyle : styles.horizontalStyle,
        style,
      ];

  return <View style={finalStyle}>{children}</View>;
}

export default Center;

const styles = StyleSheet.create({
  horizontalStyle: {
    alignItems: "center",
  },
  verticalStyle: {
    justifyContent: "center",
  },
});
