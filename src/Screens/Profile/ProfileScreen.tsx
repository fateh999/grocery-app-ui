import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, IconButton, TextInput, useTheme } from "react-native-paper";
import images from "src/Assets/images";
import BackHeader from "src/Components/Custom/BackHeader/BackHeader";
import Click from "src/Components/Custom/Click/Click";
import HeaderBlur from "src/Components/Custom/HeaderBlur/HeaderBlur";
import Body from "src/Components/Shared/Body/Body";
import Center from "src/Components/Shared/Center/Center";
import Container from "src/Components/Shared/Container/Container";
import KeyboardSpacerView from "src/Components/Shared/KeyboardSpacerView/KeyboardSpacerView";
import Padding from "src/Components/Shared/Padding/Padding";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import Typography from "src/Components/Shared/Typography/Typography";

function ProfileScreen() {
  const theme = useTheme();

  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        editButtonStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          backgroundColor: theme.colors.surface,
        },
      }),
    [theme]
  );

  return (
    <Container fullScreen>
      <HeaderBlur />
      <BackHeader title={"Profile"} />
      <Body>
        <Padding size={[0, 20, 0, 20]}>
          <Spacer size={50} />
          <Center>
            <View>
              <Avatar.Image source={images.user} size={150} />
              <IconButton
                icon={"pencil"}
                style={dynamicStyles.editButtonStyle}
                onPress={() => {}}
              />
            </View>
          </Center>
          <Spacer size={15} />
          <TextInput
            mode={"outlined"}
            label={"Name"}
            defaultValue={"John Doe"}
          />
          <Spacer size={15} />
          <TextInput
            mode={"outlined"}
            label={"Email"}
            defaultValue={"johndoe@gmail.com"}
          />
          <Spacer size={15} />
          <TextInput
            mode={"outlined"}
            label={"Phone Number"}
            defaultValue={"8989898989"}
          />
          <Spacer size={20} />
          <Click onPress={() => {}}>
            <Typography type={"medium"} variant={"white"} fontSize={"h6"}>
              Update
            </Typography>
          </Click>
        </Padding>
      </Body>
      <KeyboardSpacerView />
    </Container>
  );
}

export default ProfileScreen;
