import React, { useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

export type ColProps = {
  flex?: number;
  right?: boolean;
  left?: boolean;
  style?: ViewStyle;
  children?: any;
};

function Col(props: ColProps) {
  const { style, children, right, left, flex } = props;
  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        colStyle: {
          flex: flex ?? 1,
          alignItems: right ? "flex-end" : left ? "flex-start" : undefined,
        },
      }),
    [flex, left, right]
  );

  return <View style={[dynamicStyles.colStyle, style]}>{children}</View>;
}

export default Col;
