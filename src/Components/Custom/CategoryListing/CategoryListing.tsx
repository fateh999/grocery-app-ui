import { useNavigation } from "@react-navigation/native";
import React, { Fragment, useCallback, useMemo } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Surface, TouchableRipple } from "react-native-paper";
import Col from "src/Components/Shared/Col/Col";
import Padding from "src/Components/Shared/Padding/Padding";
import Row from "src/Components/Shared/Row/Row";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import Typography from "src/Components/Shared/Typography/Typography";
import { useCategoryValue } from "src/HookState/categoryState";
import { Category } from "src/Utils/DataHandler";
import { localOrNetworkImage } from "src/Utils/helpers";

function CategoryListing() {
  const navigation = useNavigation();
  const categories = useCategoryValue();

  const showCategoryDetail = useCallback((item: Category) => {
    navigation.navigate("Listing", { item, type: "CATEGORY" });
  }, []);

  const renderCategory = useCallback(
    (category) => (
      <Fragment key={category.id}>
        <Col>
          <Surface style={styles.itemStyle}>
            <View style={[styles.imageStyle, styles.overflowHidden]}>
              <TouchableRipple
                style={styles.imageStyle}
                onPress={showCategoryDetail.bind(null, category)}
              >
                <Image
                  source={localOrNetworkImage(category.image)}
                  style={[StyleSheet.absoluteFill, styles.imageStyle]}
                  resizeMode={"cover"}
                />
              </TouchableRipple>
            </View>
          </Surface>
          <Spacer />
          <Padding size={[0, 15, 0, 0]}>
            <Typography
              numberOfLines={1}
              fontSize={"paragraph"}
              type={"regular"}
              textAlign={"center"}
            >
              {category.name}
            </Typography>
          </Padding>
        </Col>
      </Fragment>
    ),
    []
  );

  return (
    <View>
      <Padding size={[0, 15, 0, 15]}>
        <Row>
          <Col left>
            <Typography type={"regular"} fontSize={"h5"}>
              Categories
            </Typography>
          </Col>
        </Row>
        <Spacer />
      </Padding>

      <ScrollView
        contentContainerStyle={styles.containerStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map(renderCategory)}
        <Spacer horizontal size={15} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 120,
    alignItems: "center",
  },
  itemStyle: {
    height: 80,
    width: 80,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginLeft: 15,
    elevation: 10,
  },
  imageStyle: {
    height: 80,
    width: 80,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  overflowHidden: {
    overflow: "hidden",
  },
});

export default CategoryListing;
