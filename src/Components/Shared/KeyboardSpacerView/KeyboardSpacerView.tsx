import React from "react";
import { Platform } from "react-native";
//@ts-ignore
import KeyboardSpacer from "react-native-keyboard-spacer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toggle from "../Toggle/Toggle";

function KeyboardSpacerView() {
  const insets = useSafeAreaInsets();

  return (
    <Toggle visible={Platform.OS === "ios"}>
      <KeyboardSpacer topSpacing={-insets.bottom} />
    </Toggle>
  );
}

export default KeyboardSpacerView;
