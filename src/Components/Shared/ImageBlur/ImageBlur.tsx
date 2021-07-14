import React, { useMemo } from "react";
import { Image, ImageProps, StyleSheet } from "react-native";

export interface ImageBlurProps extends ImageProps {
  zIndex?: number;
}

function ImageBlur(props: ImageBlurProps) {
  const {
    zIndex,
    style,
    blurRadius = 10,
    resizeMode = "cover",
    source,
  } = props;

  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        imageStyle: { zIndex: zIndex ?? -2, flex: 1 },
      }),
    []
  );

  return (
    <Image
      {...props}
      source={source}
      style={[StyleSheet.absoluteFill, dynamicStyles.imageStyle, style]}
      blurRadius={blurRadius}
      resizeMode={resizeMode}
    />
  );
}

export default ImageBlur;
