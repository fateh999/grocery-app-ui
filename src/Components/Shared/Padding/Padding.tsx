import React, { useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

export type PaddingProps = {
  size?: Array<number> | number;
  style?: ViewStyle;
  children?: any;
  flex?: number;
};

function Padding(props: PaddingProps) {
  const { size = 10, style, children, flex } = props;
  const [top = 0, left = 0, bottom = 0, right = 0] = Array.isArray(size)
    ? size
    : [];

  const dynamicStyles = StyleSheet.create({
    paddingStyle: Array.isArray(size)
      ? {
          paddingTop: top,
          paddingLeft: left,
          paddingBottom: bottom,
          paddingRight: right,
        }
      : { padding: size },
    containerStyle: {
      flex: flex ?? 0,
    },
  });

  return <View style={[dynamicStyles.paddingStyle, style]}>{children}</View>;
}

export default Padding;
