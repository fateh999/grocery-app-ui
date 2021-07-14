import { useNavigation } from "@react-navigation/core";
import React, { Fragment } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Chip, List, Surface } from "react-native-paper";
import BackHeader from "src/Components/Custom/BackHeader/BackHeader";
import Logo from "src/Components/Custom/Logo/Logo";
import Center from "src/Components/Shared/Center/Center";
import Container from "src/Components/Shared/Container/Container";
import Padding from "src/Components/Shared/Padding/Padding";
import Row from "src/Components/Shared/Row/Row";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import Typography from "src/Components/Shared/Typography/Typography";
import { useOrderValue } from "src/HookState/orderState";
import { Order } from "src/Utils/DataHandler";
import {
  currencyWrapper,
  localOrNetworkImage,
  statusColor,
} from "src/Utils/helpers";

function OrderListScreen() {
  const orders = useOrderValue();
  const keyExtractor = (_item: Order, index: number) => `${index}`;
  const navigation = useNavigation();

  return (
    <Container fullScreen>
      <BackHeader title={"My Orders"} />

      <FlatList
        data={orders}
        renderItem={({ item }: { item: Order }) => (
          <Padding size={[0, 20, 0, 20]}>
            <TouchableOpacity
              style={{ marginBottom: 15 }}
              onPress={() => navigation.navigate("Order", item)}
            >
              <Surface style={{ elevation: 5, borderRadius: 10 }}>
                <Padding size={[10, 10, 10, 10]}>
                  <List.Item
                    left={() => (
                      <Row
                        style={{
                          position: "relative",
                          width: 85,
                        }}
                      >
                        {item.purchasedItems
                          .slice(0, 2)
                          .map((product, index) => (
                            <Avatar.Image
                              key={index}
                              source={localOrNetworkImage(
                                product.variant.images[0]
                              )}
                              style={{
                                position: "absolute",
                                zIndex: item.purchasedItems.length - index,
                                left: index > 0 ? (index + 1) * 10 : 0,
                              }}
                            />
                          ))}
                      </Row>
                    )}
                    title={
                      <Typography fontSize={"paragraph"}>
                        Order# : {item.id}
                      </Typography>
                    }
                    description={() => (
                      <Fragment>
                        <Typography
                          variant={"placeholder"}
                          numberOfLines={1}
                          fontSize={"paragraph"}
                        >
                          {`${item.purchasedItems
                            .map((_) => _.name)
                            .join(", ")}`}
                        </Typography>
                        <Typography
                          variant={"placeholder"}
                          numberOfLines={1}
                          fontSize={"paragraph"}
                        >
                          {currencyWrapper(
                            item.purchasedItems
                              .map((_) => _.variant.sellingPrice)
                              .reduce((a, b) => a + b, 0)
                          )}
                        </Typography>
                        <Spacer />
                        <Row>
                          <Chip
                            textStyle={{ color: "white" }}
                            style={statusColor(item.status)}
                          >
                            {item.status}
                          </Chip>
                        </Row>
                      </Fragment>
                    )}
                  ></List.Item>
                </Padding>
              </Surface>
            </TouchableOpacity>
          </Padding>
        )}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={() => (
          <Center allAxis>
            <Logo />
            <Typography fontSize={"h4"}>No Orders Found</Typography>
          </Center>
        )}
        ListHeaderComponent={() => <Spacer size={30} />}
      />
    </Container>
  );
}

export default OrderListScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
});
