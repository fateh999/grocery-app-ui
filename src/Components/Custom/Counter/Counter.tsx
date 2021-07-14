import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { IconButton, Surface } from "react-native-paper";
import Center from "src/Components/Shared/Center/Center";
import Padding from "src/Components/Shared/Padding/Padding";
import Row from "src/Components/Shared/Row/Row";
import Typography from "src/Components/Shared/Typography/Typography";
import { useCount, useDataHandler } from "src/Utils/DataHandler";

type CounterProps = {
  id: number | string;
  variantId: number | string;
};

function Counter(props: CounterProps) {
  const { id, variantId } = props;
  const count = useCount(id, variantId);
  const { addToCart, removeFromCart } = useDataHandler();

  return (
    <Surface style={styles.counterStyle}>
      <Row>
        <Center flex={0} vertical>
          <IconButton
            icon={"minus"}
            onPress={() => removeFromCart(id, variantId)}
          >
            -
          </IconButton>
        </Center>
        <Center flex={0} allAxis>
          <Padding>
            <Typography fontSize={"h6"} type={"medium"}>
              {count}
            </Typography>
          </Padding>
        </Center>
        <Center flex={0} vertical>
          <IconButton icon={"plus"} onPress={() => addToCart(id, variantId)}>
            +
          </IconButton>
        </Center>
      </Row>
    </Surface>
  );
}

export default Counter;

const styles = StyleSheet.create({
  counterStyle: {
    borderRadius: 15,
    elevation: 3,
    height: 50,
  },
});
