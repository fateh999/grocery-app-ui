import { useRoute } from "@react-navigation/core";
import React from "react";
import { DataTable, Divider, Surface } from "react-native-paper";
import BackHeader from "src/Components/Custom/BackHeader/BackHeader";
import Body from "src/Components/Shared/Body/Body";
import Col from "src/Components/Shared/Col/Col";
import Container from "src/Components/Shared/Container/Container";
import Padding from "src/Components/Shared/Padding/Padding";
import Row from "src/Components/Shared/Row/Row";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import Typography from "src/Components/Shared/Typography/Typography";
import { PurchasedItem } from "src/Utils/DataHandler";
import { currencyWrapper, statusColor } from "src/Utils/helpers";

function OrderScreen() {
  const route = useRoute<any>();
  const order = route.params;

  return (
    <Container fullScreen>
      <BackHeader title={"Order Detail"} />
      <Body>
        <Padding size={15}>
          <Row>
            <Col flex={0.5} left>
              <Typography fontSize={"h6"} type={"medium"}>
                Order Id
              </Typography>
            </Col>
            <Col right>
              <Typography fontSize={"h6"} type={"light"}>
                #{order.id}
              </Typography>
            </Col>
          </Row>
          <Spacer />
          <Divider />
          <Spacer />
          <Row>
            <Col flex={0.5} left>
              <Typography fontSize={"h6"} type={"medium"}>
                Status
              </Typography>
            </Col>
            <Col right>
              <Typography
                color={statusColor(order.status).backgroundColor}
                fontSize={"h6"}
                type={"medium"}
                textTransform={"capitalize"}
              >
                {order.status}
              </Typography>
            </Col>
          </Row>
          <Spacer />
          <Divider />
          <Spacer />
          <Row>
            <Col flex={0.5} left>
              <Typography fontSize={"h6"} type={"medium"}>
                Address
              </Typography>
            </Col>
            <Col right>
              <Typography fontSize={"h6"}>
                {order.address.houseNo}, {order.address.street},{" "}
                {order.address.state}, {order.address.pincode}
              </Typography>
            </Col>
          </Row>
          <Spacer />
          <Divider />
          <Spacer />
          <Row>
            <Col left>
              <Typography fontSize={"h6"} type={"medium"}>
                Phone Number
              </Typography>
            </Col>
            <Col right>
              <Typography fontSize={"h6"}>
                {order.address.phoneNumber}
              </Typography>
            </Col>
          </Row>
          <Spacer />
          <Divider />
          <Spacer />
        </Padding>
        <Padding size={15}>
          <Surface style={{ elevation: 5 }}>
            <DataTable.Header>
              <DataTable.Cell>Name</DataTable.Cell>
              <DataTable.Cell>Quantity</DataTable.Cell>
              <DataTable.Cell numeric>Price</DataTable.Cell>
            </DataTable.Header>
            {order.purchasedItems.map((_: PurchasedItem) => {
              return (
                <DataTable.Row key={_.id}>
                  <DataTable.Cell>{_.name}</DataTable.Cell>
                  <DataTable.Cell>
                    {_.count}
                    {_.variant.name}
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    {currencyWrapper(_.variant.sellingPrice * _.count)}
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })}
            <Divider />
            <Divider />
            <Divider />
            <DataTable.Row>
              <DataTable.Cell numeric>
                Total ={"  "}
                {currencyWrapper(
                  order.purchasedItems
                    .map((_: PurchasedItem) => _.count * _.variant.sellingPrice)
                    .reduce((a: number, b: number) => a + b, 0)
                )}
              </DataTable.Cell>
            </DataTable.Row>
          </Surface>
        </Padding>
      </Body>
    </Container>
  );
}

export default OrderScreen;
