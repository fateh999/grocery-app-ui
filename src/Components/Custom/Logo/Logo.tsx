import React, { useMemo } from "react";
import images from "src/Assets/images";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  useColorScheme,
} from "react-native";

export type LogoProps = {
  scale?: number;
  source?: ImageSourcePropType;
};

function Logo(props: LogoProps) {
  const { scale = 2, source } = props;
  const scheme = useColorScheme();

  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        logoStyle: {
          height: 109 * scale,
          width: 55 * scale,
        },
      }),
    [scale]
  );

  return (
    <Image
      source={source ?? scheme === "dark" ? images.logoWhite : images.logoBlack}
      style={dynamicStyles.logoStyle}
      resizeMode={"contain"}
    />
  );
}

export default Logo;
