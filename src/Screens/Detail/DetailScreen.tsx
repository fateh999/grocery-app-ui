import { StackScreenProps } from "@react-navigation/stack";
import React, { useCallback, useMemo, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { Appbar, Surface, TextInput, useTheme } from "react-native-paper";
import Body from "src/Components/Shared/Body/Body";
import Col from "src/Components/Shared/Col/Col";
import { currencyWrapper, localOrNetworkImage } from "src/Utils/helpers";
//@ts-ignore
import { SliderBox } from "react-native-image-slider-box";
import ImageView from "react-native-image-viewing";
import CartIcon from "src/Components/Custom/CartIcon/CartIcon";
import Padding from "src/Components/Shared/Padding/Padding";
import Row from "src/Components/Shared/Row/Row";
import Typography from "src/Components/Shared/Typography/Typography";
import Center from "src/Components/Shared/Center/Center";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import DropDown from "react-native-paper-dropdown";
import Counter from "src/Components/Custom/Counter/Counter";
//@ts-ignore
import ReadMore from "@fawazahmed/react-native-read-more";
import { useCount, useDataHandler, Variant } from "src/Utils/DataHandler";
import Click from "src/Components/Custom/Click/Click";
import Toggle from "src/Components/Shared/Toggle/Toggle";

function DetailScreen(props: StackScreenProps<any, any>) {
  const { route, navigation } = props;
  const { params }: any = route;
  const { item } = params;
  const [firstVariant] = item.variants;
  const [activeVariant, setActiveVariant] = useState<Variant>(firstVariant);
  const [index, setIndex] = useState(0);
  const [visible, setIsVisible] = useState(false);
  const variantList = item.variants.map((_: Variant) => ({
    label: _.name,
    value: _.id,
  }));
  const [showDropDown, setShowDropDown] = useState(false);

  const { width, height } = useWindowDimensions();
  const theme = useTheme();
  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        headerWrapperStyle: {
          width,
        },
        detailStyle: {
          height: height + 70,
        },
        dropDownStyle: {
          backgroundColor: "transparent",
          fontSize: theme.fontSizes.body,
        },
      }),
    [theme.fontSizes.body]
  );

  const inputProps = {
    style: dynamicStyles.dropDownStyle,
    underlineColor: "transparent",
    right: <TextInput.Icon name={"menu-down"} />,
  };

  const onCurrentImagePressed = useCallback((value: number) => {
    setIndex(value);
    setIsVisible(true);
  }, []);
  const onRequestClose = useCallback(() => setIsVisible(false), []);
  const setValue = useCallback(
    (value) => {
      setActiveVariant(item.variants.find((_: Variant) => _.id === value));
    },
    [item]
  );
  const displayDropDown = useCallback(() => setShowDropDown(true), []);
  const hideDropDown = useCallback(() => setShowDropDown(false), []);
  const goToCart = useCallback(() => navigation.navigate("Cart"), [navigation]);
  const count = useCount(item.id, activeVariant.id);
  const { addToCart } = useDataHandler();

  return (
    <Col flex={1}>
      <View
        style={[dynamicStyles.headerWrapperStyle, styles.headerWrapperStyle]}
      >
        <Appbar.Header dark style={styles.headerStyle}>
          <Appbar.BackAction onPress={navigation.goBack} />
          <Appbar.Content
            title={
              <Typography variant={"white"} type={"regular"} fontSize={"h5"}>
                {item.name}
              </Typography>
            }
          />
          <CartIcon />
        </Appbar.Header>
      </View>

      <Body bounces={false} showsVerticalScrollIndicator={false}>
        <SliderBox
          images={activeVariant.images}
          sliderBoxHeight={400}
          onCurrentImagePressed={onCurrentImagePressed}
          paginationBoxStyle={styles.paginationBoxStyle}
        />
        <ImageView
          //@ts-ignore
          images={activeVariant.images.map(localOrNetworkImage)}
          imageIndex={index}
          visible={visible}
          onRequestClose={onRequestClose}
        />
        <SafeAreaView>
          <Surface style={[dynamicStyles.detailStyle, styles.detailStyle]}>
            <Padding size={[0, 25, 0, 25]}>
              <Row>
                <Col>
                  <Center flex={1} vertical>
                    <Typography type={"regular"} fontSize={"h5"}>
                      {item.name}
                    </Typography>
                  </Center>
                </Col>
                <Col right>
                  <Counter id={item.id} variantId={activeVariant.id} />
                </Col>
              </Row>
              <Spacer />
              <Row>
                <Center flex={1} vertical>
                  <Row>
                    <Typography
                      type={"medium"}
                      variant={"placeholder"}
                      fontSize={"body"}
                    >
                      {currencyWrapper(activeVariant.sellingPrice)}
                    </Typography>
                    <Spacer horizontal />
                    <Typography
                      type={"medium"}
                      variant={"error"}
                      fontSize={"body"}
                      textDecorationLine={"line-through"}
                    >
                      {currencyWrapper(activeVariant.costPrice)}
                    </Typography>
                  </Row>
                </Center>
                <Col flex={0.6}>
                  <DropDown
                    mode={"flat"}
                    value={activeVariant.id}
                    setValue={setValue}
                    theme={theme}
                    list={variantList}
                    visible={showDropDown}
                    showDropDown={displayDropDown}
                    onDismiss={hideDropDown}
                    inputProps={inputProps}
                  />
                </Col>
              </Row>
              <Spacer />
              <ReadMore
                backgroundColor={theme.colors.surface}
                customTextComponent={Typography}
              >
                {item.description}
              </ReadMore>
              <Spacer size={50} />
              <Click
                uppercase={false}
                onPress={() => addToCart(item.id, activeVariant.id)}
              >
                <Typography type={"medium"} variant={"white"} fontSize={"h6"}>
                  Add to Cart
                </Typography>
              </Click>
              <Toggle visible={count > 0}>
                <Spacer size={15} />
                <Click uppercase={false} mode={"outlined"} onPress={goToCart}>
                  <Typography
                    type={"medium"}
                    variant={"primary"}
                    fontSize={"h6"}
                  >
                    Go to Cart
                  </Typography>
                </Click>
              </Toggle>
              <Spacer size={30} />
            </Padding>
          </Surface>
        </SafeAreaView>
      </Body>
    </Col>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  headerWrapperStyle: {
    position: "absolute",
    top: 0,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  headerStyle: {
    backgroundColor: "transparent",
  },
  detailStyle: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -50,
    paddingTop: 25,
    elevation: 5,
  },
  paginationBoxStyle: {
    marginBottom: 50,
  },
});
