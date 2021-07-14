import React, { ComponentProps, useMemo } from "react";
import { Button } from "react-native-paper";
import Center from "src/Components/Shared/Center/Center";
import { StyleSheet } from "react-native";

type ButtonProps = ComponentProps<typeof Button>;

export interface ClickProps {}

function Click(props: ClickProps & ButtonProps) {
  const { children, onPress, style, contentStyle, mode = "contained" } = props;

  return (
    <Center>
      <Button
        {...props}
        mode={mode}
        dark
        contentStyle={[styles.contentStyle, contentStyle]}
        style={[style]}
        onPress={onPress}
      >
        {children}
      </Button>
    </Center>
  );
}

export default Click;

const styles = StyleSheet.create({
  contentStyle: {
    height: 55,
    width: 270,
  },
});
