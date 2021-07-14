import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import ListingScreen from "src/Screens/Listing/ListingScreen";
import DetailScreen from "src/Screens/Detail/DetailScreen";
import MainDrawerNavigator from "../Drawer/MainDrawerNavigator";
import CartScreen from "src/Screens/Cart/CartScreen";
import OrderScreen from "src/Screens/Order/OrderScreen";
import AddressListScreen from "src/Screens/AddressList/AddressListScreen";
import SettingScreen from "src/Screens/Setting/SettingScreen";
import ProfileScreen from "src/Screens/Profile/ProfileScreen";
import OrderListScreen from "src/Screens/OrderList/OrderListScreen";
import FavouriteScreen from "src/Screens/Favourite/FavouriteScreen";
import AccountScreen from "src/Screens/Account/AccountScreen";

const MainStack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Drawer" component={MainDrawerNavigator} />
      <MainStack.Screen name="Listing" component={ListingScreen} />
      <MainStack.Screen name="Detail" component={DetailScreen} />
      <MainStack.Screen name="Cart" component={CartScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
      <MainStack.Screen
        name="Order"
        component={OrderScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="OrderList"
        component={OrderListScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="AddressList"
        component={AddressListScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
}

export default MainStackNavigator;
