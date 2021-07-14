import React, { useMemo } from "react";
import { Platform, StyleSheet, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import images from "src/Assets/images";
import ImageBlur from "src/Components/Shared/ImageBlur/ImageBlur";

function HeaderBlur() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        blurStyle: {
          height: 56 + insets.top,
          width,
          marginTop: -insets.top,
        },
      }),
    [width, insets.top]
  );

  return (
    <ImageBlur
      source={images.blur}
      style={dynamicStyles.blurStyle}
      resizeMode={"cover"}
      blurRadius={Platform.OS === "ios" ? 10 : 3}
    />
  );
}

export default HeaderBlur;
