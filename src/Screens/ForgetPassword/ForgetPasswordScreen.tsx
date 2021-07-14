import { useNavigation } from "@react-navigation/core";
import React, { useMemo } from "react";
import { Platform, StyleSheet, useWindowDimensions } from "react-native";
import { Appbar, Surface, TextInput } from "react-native-paper";
import images from "src/Assets/images";
import Click from "src/Components/Custom/Click/Click";
import Logo from "src/Components/Custom/Logo/Logo";
import Body from "src/Components/Shared/Body/Body";
import Center from "src/Components/Shared/Center/Center";
import Col from "src/Components/Shared/Col/Col";
import Container from "src/Components/Shared/Container/Container";
import ImageBlur from "src/Components/Shared/ImageBlur/ImageBlur";
import KeyboardSpacerView from "src/Components/Shared/KeyboardSpacerView/KeyboardSpacerView";
import Overlay from "src/Components/Shared/Overlay/Overlay";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import Typography from "src/Components/Shared/Typography/Typography";
import { InputTheme, TransparentHeaderTheme } from "src/Config/Theme";

function ForgetPasswordScreen() {
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();
  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        cardStyle: {
          width: width - 40,
          minHeight: height / 2,
          borderRadius: 10,
          padding: 20,
          backgroundColor: "rgba(255,255,255,0.3)",
        },
        blurStyle: {
          height,
          width,
        },
        tabStyle: {
          width: width / 2,
          height: 55,
        },
      }),
    []
  );
  const blurRadius = Platform.OS === "ios" ? 10 : 3;

  return (
    <Col flex={1}>
      <ImageBlur
        source={images.blur}
        blurRadius={blurRadius}
        zIndex={-1}
        style={dynamicStyles.blurStyle}
      />
      <Overlay />
      <Container
        backgroundColor={"transparent"}
        fullScreen
        statusBarStyle={"light-content"}
      >
        <Appbar.Header dark theme={TransparentHeaderTheme}>
          <Appbar.BackAction onPress={navigation.goBack} />
          <Appbar.Content
            title={
              <Typography variant={"background"} type={"regular"} fontSize={24}>
                Forget Password
              </Typography>
            }
          />
        </Appbar.Header>

        <Body>
          <Center allAxis>
            <Surface style={dynamicStyles.cardStyle}>
              <Center flex={1} vertical>
                <Center>
                  <Logo source={images.logoWhite} scale={1.5} />
                </Center>
                <TextInput
                  mode={"outlined"}
                  placeholder={"Email"}
                  theme={InputTheme}
                />
                <Spacer size={20} />
                <Click onPress={navigation.goBack}>
                  <Typography
                    type={"medium"}
                    variant={"background"}
                    fontSize={18}
                  >
                    Send Email
                  </Typography>
                </Click>
                <Spacer size={120} />
              </Center>
            </Surface>
          </Center>
          <Spacer />
        </Body>
        <KeyboardSpacerView />
      </Container>
    </Col>
  );
}

export default ForgetPasswordScreen;
