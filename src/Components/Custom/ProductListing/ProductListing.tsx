import React, { Fragment } from "react";
import { FlatList, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import Center from "src/Components/Shared/Center/Center";
import Col from "src/Components/Shared/Col/Col";
import Padding from "src/Components/Shared/Padding/Padding";
import Row from "src/Components/Shared/Row/Row";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import Toggle from "src/Components/Shared/Toggle/Toggle";
import Typography from "src/Components/Shared/Typography/Typography";
import { Product } from "src/Utils/DataHandler";
import Logo from "../Logo/Logo";

import ProductListItem from "../ProductListItem/ProductListItem";

type ProductListingProps = {
  data: Array<Product>;
  scrollEnabled?: boolean;
  name?: string;
  viewList?: () => void;
};

function ProductListing(props: ProductListingProps) {
  const { data, scrollEnabled, name, viewList = () => {} } = props;
  const keyExtractor = (item: Product) => `${item.id}`;

  return (
    <Fragment>
      <Toggle visible={name ? true : false}>
        <Padding size={[0, 20, 0, 20]}>
          <Row>
            <Col left>
              <Center flex={1} vertical>
                <Typography onPress={viewList} fontSize={"h5"} type={"regular"}>
                  {name}
                </Typography>
              </Center>
            </Col>
            <Col right>
              <Center flex={1} vertical>
                <IconButton
                  onPress={viewList}
                  icon={"arrow-right"}
                ></IconButton>
              </Center>
            </Col>
          </Row>
        </Padding>
      </Toggle>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <ProductListItem item={item} index={index} />
        )}
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
        scrollEnabled={scrollEnabled ?? true}
        ListEmptyComponent={() => (
          <Center allAxis>
            <Logo />
            <Typography fontSize={"h4"}>No Data Found</Typography>
          </Center>
        )}
        ListHeaderComponent={() => <Spacer size={30} />}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  columnWrapperStyle: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});

export default ProductListing;
