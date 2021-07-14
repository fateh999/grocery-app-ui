import React, { Fragment } from "react";
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

type ProductListingMapProps = {
  data: Array<Product>;
  name?: string;
  viewList?: () => void;
};

function ProductListingMap(props: ProductListingMapProps) {
  const { data, name, viewList = () => {} } = props;

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

      {data.length === 0 ? (
        <Center allAxis>
          <Logo />
          <Typography fontSize={"h4"}>No Data Found</Typography>
        </Center>
      ) : (
        <Fragment>
          <Spacer size={30} />
          <Row wrap>
            {data.map((item, index) => (
              <ProductListItem key={item.id} item={item} index={index} />
            ))}
          </Row>
        </Fragment>
      )}
    </Fragment>
  );
}

export default ProductListingMap;
