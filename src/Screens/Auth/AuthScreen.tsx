import { StackScreenProps } from "@react-navigation/stack";
import React, { useCallback, useMemo, useState } from "react";
import {
  Platform,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { Surface, TextInput } from "react-native-paper";
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
import Row from "src/Components/Shared/Row/Row";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import Toggle from "src/Components/Shared/Toggle/Toggle";
import Typography from "src/Components/Shared/Typography/Typography";
import { InputTheme } from "src/Config/Theme";
import { setAppValue } from "src/HookState/appState";

function AuthScreen(props: StackScreenProps<any, any>) {
  const { navigation } = props;
  const [activeTab, setActiveTab] = useState("login");

  const { height, width } = useWindowDimensions();
  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        cardStyle: {
          width: width - 40,
          borderRadius: 10,
          padding: 20,
          minHeight: height / 1.4,
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

  const loginTabStyle =
    activeTab === "login" ? styles.activeStyle : styles.inactiveStyle;
  const registerTabStyle =
    activeTab === "register" ? styles.activeStyle : styles.inactiveStyle;
  const blurRadius = Platform.OS === "ios" ? 10 : 3;

  const viewLogin = useCallback(() => {
    setActiveTab("login");
  }, []);
  const viewRegister = useCallback(() => {
    setActiveTab("register");
  }, []);
  const goToForgetPassword = useCallback(() => {
    navigation.navigate("ForgetPassword");
  }, []);

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
        <Spacer size={StatusBar.currentHeight} />
        <Spacer />
        <Row>
          <TouchableOpacity style={dynamicStyles.tabStyle} onPress={viewLogin}>
            <Col>
              <Typography
                variant={"white"}
                textAlign={"center"}
                type={"regular"}
                fontSize={"h5"}
                style={loginTabStyle}
              >
                Login
              </Typography>
            </Col>
          </TouchableOpacity>
          <TouchableOpacity
            style={dynamicStyles.tabStyle}
            onPress={viewRegister}
          >
            <Col>
              <Typography
                variant={"white"}
                type={"regular"}
                textAlign={"center"}
                fontSize={"h5"}
                style={registerTabStyle}
              >
                Register
              </Typography>
            </Col>
          </TouchableOpacity>
        </Row>
        <Body>
          <Center allAxis>
            <Surface style={dynamicStyles.cardStyle}>
              <Toggle visible={activeTab === "login"}>
                <Center flex={1} vertical>
                  <Center>
                    <Logo source={images.logoWhite} scale={1.5} />
                  </Center>
                  <TextInput
                    mode={"outlined"}
                    placeholder={"Email"}
                    theme={InputTheme}
                  />
                  <Spacer size={15} />
                  <TextInput
                    mode={"outlined"}
                    placeholder={"Password"}
                    theme={InputTheme}
                  />
                  <Spacer size={20} />
                  <Click onPress={() => setAppValue({ loggedIn: true })}>
                    <Typography
                      type={"medium"}
                      variant={"white"}
                      fontSize={"h6"}
                    >
                      Login
                    </Typography>
                  </Click>
                  <Spacer size={30} />
                  <Typography
                    type={"medium"}
                    variant={"white"}
                    textAlign={"center"}
                    fontSize={"paragraph"}
                    onPress={goToForgetPassword}
                  >
                    Forgot your password?
                  </Typography>
                  <Spacer size={120} />
                </Center>
              </Toggle>

              <Toggle visible={activeTab === "register"}>
                <Center flex={1} vertical>
                  <Center>
                    <Logo source={images.logoWhite} scale={1.5} />
                  </Center>
                  <TextInput
                    mode={"outlined"}
                    placeholder={"Name"}
                    theme={InputTheme}
                  />
                  <Spacer size={15} />
                  <TextInput
                    mode={"outlined"}
                    placeholder={"Email"}
                    theme={InputTheme}
                  />
                  <Spacer size={15} />
                  <TextInput
                    mode={"outlined"}
                    placeholder={"Phone Number"}
                    theme={InputTheme}
                  />
                  <Spacer size={15} />
                  <TextInput
                    mode={"outlined"}
                    placeholder={"Password"}
                    theme={InputTheme}
                  />
                  <Spacer size={20} />
                  <Click onPress={() => setAppValue({ loggedIn: true })}>
                    <Typography
                      type={"medium"}
                      variant={"white"}
                      fontSize={"h6"}
                    >
                      Register
                    </Typography>
                  </Click>
                  <Spacer size={120} />
                </Center>
              </Toggle>
            </Surface>
          </Center>
          <Spacer />
        </Body>
        <KeyboardSpacerView />
      </Container>
    </Col>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  activeStyle: {
    opacity: 1,
  },
  inactiveStyle: {
    opacity: 0.5,
  },
});
