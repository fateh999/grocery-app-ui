import React, { useMemo } from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import HomeScreen from "src/Screens/Home/HomeScreen";
import { Drawer, Surface, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import Logo from "src/Components/Custom/Logo/Logo";
import Center from "src/Components/Shared/Center/Center";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import Body from "src/Components/Shared/Body/Body";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FavouriteScreen from "src/Screens/Favourite/FavouriteScreen";
import AccountScreen from "src/Screens/Account/AccountScreen";
import { setAppValue } from "src/HookState/appState";

const MainDrawer = createDrawerNavigator();

function DrawerComponent(
  props: DrawerContentComponentProps<DrawerContentOptions>
) {
  const { navigation, state } = props;
  const activeRoute = state.routes[state.index].name;
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        drawerStyle: {
          flex: 1,
        },
        logoContainerStyle: {
          elevation: 5,
        },
        logoutContainerStyle: {
          elevation: 5,
        },
      }),
    []
  );

  return (
    <Surface style={styles.drawerStyle}>
      <Surface style={styles.logoContainerStyle}>
        <Spacer size={insets.top} />
        <Center>
          <Logo />
        </Center>
      </Surface>
      <Body>
        <Spacer />
        <Drawer.Item
          icon={"home"}
          label={"Home"}
          active={activeRoute === "Home"}
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer();
          }}
        ></Drawer.Item>
        <Drawer.Item
          icon={"account"}
          label={"Account"}
          active={activeRoute === "Account"}
          onPress={() => {
            navigation.navigate("Account");
            navigation.closeDrawer();
          }}
        ></Drawer.Item>
        <Drawer.Item
          icon={"receipt"}
          label={"Orders"}
          active={activeRoute === "OrderList"}
          onPress={() => {
            navigation.navigate("OrderList");
            navigation.closeDrawer();
          }}
        ></Drawer.Item>
        <Drawer.Item
          icon={"heart"}
          label={"Favourites"}
          active={activeRoute === "Favourite"}
          onPress={() => {
            navigation.navigate("Favourite");
            navigation.closeDrawer();
          }}
        ></Drawer.Item>
        <Spacer />
      </Body>
      <Surface style={styles.logoutContainerStyle}>
        <Drawer.Item
          icon={"logout"}
          label={"Logout"}
          theme={{ colors: { primary: theme.colors.error } }}
          onPress={() => {
            setAppValue({ loggedIn: false });
          }}
          active
        ></Drawer.Item>
        <Spacer size={insets.bottom} />
      </Surface>
    </Surface>
  );
}

function MainDrawerNavigator() {
  return (
    <MainDrawer.Navigator
      drawerContent={(props) => <DrawerComponent {...props} />}
    >
      <MainDrawer.Screen name={"Home"} component={HomeScreen} />
    </MainDrawer.Navigator>
  );
}

export default MainDrawerNavigator;
