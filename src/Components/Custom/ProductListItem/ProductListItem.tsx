import { useNavigation } from "@react-navigation/native";
import React, { Fragment, useCallback, useMemo } from "react";
import { View, Image, StyleSheet, useWindowDimensions } from "react-native";
import {
  IconButton,
  Surface,
  TouchableRipple,
  useTheme,
} from "react-native-paper";
import Center from "src/Components/Shared/Center/Center";
import Padding from "src/Components/Shared/Padding/Padding";
import Row from "src/Components/Shared/Row/Row";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import Toggle from "src/Components/Shared/Toggle/Toggle";
import Typography from "src/Components/Shared/Typography/Typography";
import { Product, useCount, useDataHandler } from "src/Utils/DataHandler";
import { currencyWrapper, localOrNetworkImage } from "src/Utils/helpers";

export type ProductListItemProps = {
  item: Product;
  index: number;
};

function ProductListItem(props: ProductListItemProps) {
  const { item, index } = props;
  const [mainVariant] = item.variants;
  const [mainVariantImage] = mainVariant.images;
  const navigation = useNavigation();
  const count = useCount(item.id, mainVariant.id);
  const theme = useTheme();
  const { addToCart, removeFromCart, toggleFavourite } = useDataHandler();

  const onProductClick = useCallback(() => {
    navigation.navigate("Detail", { item });
  }, [navigation]);

  const addToCartFn = useCallback(() => addToCart(item.id, mainVariant.id), []);

  const removeFromCartFn = useCallback(
    () => removeFromCart(item.id, mainVariant.id),
    []
  );

  const toggleFavouriteFn = useCallback(() => toggleFavourite(item.id), []);

  const { width } = useWindowDimensions();

  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        removeStyle: {
          top: count > 0 ? 102 : 51,
        },
        wrapperStyle: {
          width: width / 2,
          marginBottom: 30,
          ["padding" + ((index + 1) % 2 === 0 ? "Right" : "Left")]: 20,
          alignItems: (index + 1) % 2 === 0 ? "flex-end" : "flex-start",
        },
      }),
    [count, width, index]
  );

  return (
    <View style={dynamicStyles.wrapperStyle}>
      <Surface style={styles.containerStyle}>
        <View style={[styles.containerStyle, styles.overflowHidden]}>
          <TouchableRipple
            style={[styles.containerStyle, styles.overflowHidden]}
            onPress={onProductClick}
          >
            <Fragment>
              <View shouldRasterizeIOS>
                <Image
                  source={localOrNetworkImage(mainVariantImage)}
                  style={styles.imageStyle}
                  resizeMode={"cover"}
                />
                <IconButton
                  icon={"plus"}
                  style={styles.addStyle}
                  onPress={addToCartFn}
                  color={theme.colors.black}
                />
                <Toggle visible={count > 0}>
                  <View style={styles.countStyle}>
                    <Center>
                      <Typography variant={"black"} type={"medium"}>
                        {count}
                      </Typography>
                    </Center>
                  </View>
                </Toggle>
                <IconButton
                  icon={"minus"}
                  style={[dynamicStyles.removeStyle, styles.removeStyle]}
                  onPress={removeFromCartFn}
                  color={theme.colors.black}
                />
              </View>
              <Center flex={1} vertical>
                <Padding size={[0, 15, 0, 55]}>
                  <Typography fontSize={"paragraph"} numberOfLines={1}>
                    {item.name} - {mainVariant.name}
                  </Typography>
                  <Row>
                    <Typography fontSize={"caption"} variant={"placeholder"}>
                      {currencyWrapper(mainVariant.sellingPrice)}
                    </Typography>
                    <Spacer horizontal />
                    <Typography
                      fontSize={"caption"}
                      variant={"error"}
                      textDecorationLine={"line-through"}
                    >
                      {currencyWrapper(mainVariant.costPrice)}
                    </Typography>
                  </Row>
                </Padding>
              </Center>
              <IconButton
                key={item.favourite ? 1 : 0}
                icon={item.favourite ? "heart" : "heart-outline"}
                color={item.favourite ? "red" : theme.colors.onSurface}
                style={styles.wishlistStyle}
                onPress={toggleFavouriteFn}
              />
            </Fragment>
          </TouchableRipple>
        </View>
      </Surface>
    </View>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  containerStyle: {
    height: 220,
    width: 170,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  imageStyle: {
    height: 170,
    width: 170,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  addStyle: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 50,
    width: 40,
    backgroundColor: "rgba(255,255,255,0.9)",
    margin: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    justifyContent: "center",
  },
  countStyle: {
    position: "absolute",
    top: 51,
    right: 0,
    height: 50,
    width: 40,
    backgroundColor: "rgba(255,255,255,0.9)",
    margin: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    justifyContent: "center",
  },
  removeStyle: {
    position: "absolute",
    right: 0,
    height: 50,
    width: 40,
    backgroundColor: "rgba(255,255,255,0.9)",
    margin: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
  },
  wishlistStyle: {
    position: "absolute",
    bottom: -2,
    right: 0,
    height: 50,
    width: 40,
    backgroundColor: "rgba(255,0,0,0.1)",
    margin: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 0,
    justifyContent: "center",
  },
  overflowHidden: {
    overflow: "hidden",
    elevation: 0,
  },
});
