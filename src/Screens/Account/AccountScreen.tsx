import { useNavigation } from "@react-navigation/core";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { Avatar, Divider, List, useTheme } from "react-native-paper";
import images from "src/Assets/images";
import BackHeader from "src/Components/Custom/BackHeader/BackHeader";
import Body from "src/Components/Shared/Body/Body";
import Center from "src/Components/Shared/Center/Center";
import Container from "src/Components/Shared/Container/Container";
import Padding from "src/Components/Shared/Padding/Padding";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import Typography from "src/Components/Shared/Typography/Typography";

function AccountScreen() {
  const theme = useTheme();
  const navigation = useNavigation();

  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        listItemStyle: { backgroundColor: theme.colors.surface },
      }),
    [theme]
  );

  return (
    <Container fullScreen>
      <BackHeader title={"Account"} />
      <Body>
        <Spacer size={50} />
        <Center>
          <Avatar.Image source={images.user} size={150} />
        </Center>
        <Spacer size={15} />
        <Typography fontSize={"h4"} textAlign={"center"}>
          John Doe
        </Typography>
        <Typography
          fontSize={"paragraph"}
          textAlign={"center"}
          variant={"placeholder"}
        >
          johndoe@gmail.com
        </Typography>
        <Spacer size={20} />
        <Padding size={[0, 15, 0, 15]}>
          <List.Item
            style={dynamicStyles.listItemStyle}
            title={"My Profile"}
            left={() => <List.Icon icon={"account"} />}
            onPress={() => navigation.navigate("Profile")}
          />
          <Divider />
          <List.Item
            style={dynamicStyles.listItemStyle}
            title={"My Addresses"}
            left={() => <List.Icon icon={"map-marker"} />}
            onPress={() => navigation.navigate("AddressList")}
          />
          <Divider />
          <List.Item
            style={dynamicStyles.listItemStyle}
            title={"About"}
            left={() => <List.Icon icon={"information"} />}
            onPress={() => {}}
          />
          <Divider />
          <List.Item
            style={dynamicStyles.listItemStyle}
            title={"Help & FAQs"}
            left={() => <List.Icon icon={"help-circle"} />}
            onPress={() => {}}
          />
          <Divider />
          <List.Item
            style={dynamicStyles.listItemStyle}
            title={"Privacy Policy"}
            left={() => <List.Icon icon={"eye-off"} />}
            onPress={() => {}}
          />
          <Divider />
          <List.Item
            style={dynamicStyles.listItemStyle}
            title={"Terms & Conditions"}
            left={() => <List.Icon icon={"file-document"} />}
            onPress={() => {}}
          />
        </Padding>
      </Body>
    </Container>
  );
}

export default AccountScreen;
