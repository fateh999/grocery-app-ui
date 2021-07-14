import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import LandingScreen from "src/Screens/Landing/LandingScreen";
import AuthScreen from "src/Screens/Auth/AuthScreen";
import ForgetPasswordScreen from "src/Screens/ForgetPassword/ForgetPasswordScreen";

const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Landing" component={LandingScreen} />
      <AuthStack.Screen name="Auth" component={AuthScreen} />
      <AuthStack.Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
