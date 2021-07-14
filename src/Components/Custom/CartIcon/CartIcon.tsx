import { useNavigation } from "@react-navigation/native";
import React, { Fragment, useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";
import { Appbar, Badge, useTheme } from "react-native-paper";
import { useCartValue } from "src/HookState/cartState";

function CartIcon() {
  const cartItems = useCartValue();
  const navigation = useNavigation();
  const theme = useTheme();

  const goToCart = useCallback(() => navigation.navigate("Cart"), [navigation]);

  return (
    <Fragment>
      <Appbar.Action
        onPress={goToCart}
        color={theme.colors.white}
        icon={"cart"}
      />
      <Badge visible={cartItems.length > 0} style={styles.badgeStyle}>
        {cartItems.length}
      </Badge>
    </Fragment>
  );
}

export default CartIcon;

const styles = StyleSheet.create({
  badgeStyle: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
});
