import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Avatar, Chip, IconButton, List, Surface } from "react-native-paper";
import BackHeader from "src/Components/Custom/BackHeader/BackHeader";
import Click from "src/Components/Custom/Click/Click";
import Counter from "src/Components/Custom/Counter/Counter";
import Logo from "src/Components/Custom/Logo/Logo";
import LottieViewer from "src/Components/Custom/LottieViewer/LottieViewer";
import Center from "src/Components/Shared/Center/Center";
import Col from "src/Components/Shared/Col/Col";
import Container from "src/Components/Shared/Container/Container";
import Padding from "src/Components/Shared/Padding/Padding";
import Row from "src/Components/Shared/Row/Row";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import Toggle from "src/Components/Shared/Toggle/Toggle";
import Typography from "src/Components/Shared/Typography/Typography";
import { useAddressValue } from "src/HookState/addressState";
import { useCartValue } from "src/HookState/cartState";
import { CartItem, useDataHandler } from "src/Utils/DataHandler";
import { currencyWrapper, localOrNetworkImage } from "src/Utils/helpers";

function CartScreen(props: StackScreenProps<any, any>) {
  const { navigation } = props;
  const { getProductById, deleteFromCart } = useDataHandler();
  const addresses = useAddressValue();
  const cartItems = useCartValue();
  const keyExtractor = (item: CartItem) => `${item.id}`;
  const primaryAddress = addresses.find((_) => _.primary);
  const [success, setShowSuccess] = useState(false);
  const cost = cartItems
    .map((cartItem) => cartItem.count * cartItem.variant.sellingPrice)
    .reduce((count, nextCount) => count + nextCount, 0);

  return (
    <Container fullScreen>
      <BackHeader title={"Cart"} />
      <Toggle visible={primaryAddress ? true : false}>
        <Surface>
          <List.Item
            title={primaryAddress?.name}
            description={`${primaryAddress?.houseNo}, ${primaryAddress?.street}, ${primaryAddress?.city}, ${primaryAddress?.state}, ${primaryAddress?.pincode}`}
            right={() => <List.Icon icon={"menu-down"} />}
            onPress={() => navigation.navigate("AddressList")}
          />
        </Surface>
      </Toggle>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <Padding size={[0, 20, 0, 20]}>
            <Surface
              style={{ marginBottom: 15, elevation: 5, borderRadius: 10 }}
            >
              <Padding size={[10, 10, 10, 10]}>
                <List.Item
                  onPress={async () => {
                    const product = await getProductById(item.productId);
                    navigation.navigate("Detail", { item: product });
                  }}
                  left={() => (
                    <Avatar.Image
                      source={localOrNetworkImage(item.variant.images[0])}
                    />
                  )}
                  title={<Typography fontSize={"h5"}>{item.name}</Typography>}
                  description={item.variant.name}
                  right={() => (
                    <Counter id={item.productId} variantId={item.variant.id} />
                  )}
                ></List.Item>
                <Row>
                  <Col left>
                    <Center vertical>
                      <Toggle visible={item.count > 1}>
                        <Chip>
                          {currencyWrapper(item.variant.sellingPrice)} x{" "}
                          {item.count} ={" "}
                          {currencyWrapper(
                            item.variant.sellingPrice * item.count
                          )}
                        </Chip>
                      </Toggle>
                      <Toggle visible={item.count === 1}>
                        <Chip>
                          {currencyWrapper(item.variant.sellingPrice)}
                        </Chip>
                      </Toggle>
                    </Center>
                  </Col>
                  <Col right>
                    <Center vertical>
                      <IconButton
                        style={{ margin: 0 }}
                        icon={"delete"}
                        onPress={() => {
                          deleteFromCart(item.id);
                        }}
                      />
                    </Center>
                  </Col>
                </Row>
              </Padding>
            </Surface>
          </Padding>
        )}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={() => (
          <Center allAxis>
            <Logo />
            <Typography fontSize={"h4"}>No Data Found</Typography>
          </Center>
        )}
        ListHeaderComponent={() => <Spacer size={30} />}
      />
      <Toggle visible={cartItems.length > 0}>
        <Spacer />
        <Center>
          <Click onPress={() => setShowSuccess(true)}>
            <Typography type={"medium"} variant={"white"} fontSize={"h6"}>
              Pay{"  "}
              {currencyWrapper(cost)}
            </Typography>
          </Click>
        </Center>
        <Spacer />
      </Toggle>

      <LottieViewer
        visible={success}
        onDismiss={() => setShowSuccess(false)}
        onAnimationFinish={() => {
          navigation.navigate("OrderList");
          setShowSuccess(false);
        }}
      />
    </Container>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
});
