import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./Stacks/AuthStackNavigator";
import MainStackNavigator from "./Stacks/MainStackNavigator";
import { useAppValue } from "src/HookState/appState";
import { SafeAreaProvider } from "react-native-safe-area-context";

function AppRouter() {
  const { loggedIn } = useAppValue();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {loggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppRouter;
