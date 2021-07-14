import { StackScreenProps } from "@react-navigation/stack";
import React, { Fragment, useCallback, useMemo } from "react";
import { Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import images from "src/Assets/images";
import Click from "src/Components/Custom/Click/Click";
import Logo from "src/Components/Custom/Logo/Logo";
import Center from "src/Components/Shared/Center/Center";
import Container from "src/Components/Shared/Container/Container";
import GradientView from "src/Components/Shared/GradientView/GradientView";
import ImageBlur from "src/Components/Shared/ImageBlur/ImageBlur";
import Overlay from "src/Components/Shared/Overlay/Overlay";
import Typography from "src/Components/Shared/Typography/Typography";
import { Gradients } from "src/Config/Theme";

function LandingScreen(props: StackScreenProps<any, any>) {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        bottomStyle: {
          marginBottom: -insets.bottom,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          overflow: "hidden",
        },
      }),
    [insets.bottom]
  );
  const blurRadius = Platform.OS === "ios" ? 5 : 1.5;

  const goToAuth = useCallback(() => {
    navigation.navigate("Auth");
  }, []);

  return (
    <Fragment>
      <GradientView gradient={Gradients.main} />
      <Container
        backgroundColor={"transparent"}
        fullScreen
        statusBarStyle={"light-content"}
      >
        <Center allAxis flex={2} style={styles.topStyle}>
          <Logo source={images.logoWhite} />
          <Typography variant={"white"} fontSize={"h3"} textAlign={"center"}>
            Welcome to{" "}
            <Typography variant={"white"} type={"medium"}>
              Grocery
            </Typography>{" "}
            Shopping
          </Typography>
        </Center>

        <Center allAxis style={dynamicStyles.bottomStyle}>
          <ImageBlur source={images.blur} blurRadius={blurRadius} />
          <Overlay />
          <Click onPress={goToAuth}>
            <Typography variant={"white"} type={"medium"} fontSize={"h6"}>
              Get Started
            </Typography>
          </Click>
        </Center>
      </Container>
    </Fragment>
  );
}

export default LandingScreen;

const styles = StyleSheet.create({
  topStyle: {
    paddingHorizontal: 15,
  },
});
