import React, { useCallback, useMemo } from "react";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import { Surface, TouchableRipple } from "react-native-paper";
import Center from "src/Components/Shared/Center/Center";
//@ts-ignore
import SwiperFlatList from "react-native-swiper-flatlist";
import { Banner } from "src/Utils/DataHandler";
import { localOrNetworkImage } from "src/Utils/helpers";
import { useNavigation } from "@react-navigation/native";

export type BannerSwiperProps = {
  banners: Array<Banner>;
};

function BannerSwiper(props: BannerSwiperProps) {
  const { banners } = props;
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const clickBanner = useCallback((banner) => {
    navigation.navigate("Listing", {
      item: banner,
    });
  }, []);

  const renderBanners = useCallback(
    (banner) => (
      <View style={dynamicStyles.slideStyle} key={banner.id}>
        <TouchableRipple
          style={dynamicStyles.slideStyle}
          onPress={() => clickBanner(banner)}
        >
          <Image
            source={localOrNetworkImage(banner.image)}
            resizeMode={"cover"}
            style={dynamicStyles.slideStyle}
          />
        </TouchableRipple>
      </View>
    ),
    []
  );

  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        containerStyle: {
          width: width - 30,
        },
        slideStyle: {
          width: width - 30,
          height: 200,
          borderRadius: 15,
          overflow: "hidden",
        },
      }),
    []
  );

  return (
    <Center>
      <Surface style={[dynamicStyles.containerStyle, styles.containerStyle]}>
        <SwiperFlatList
          showPagination
          paginationStyleItem={styles.paginationStyle}
          style={styles.swiperStyle}
        >
          {banners.map(renderBanners)}
        </SwiperFlatList>
      </Surface>
    </Center>
  );
}

export default BannerSwiper;

const styles = StyleSheet.create({
  containerStyle: {
    height: 200,
    borderRadius: 15,
    elevation: 10,
  },
  swiperStyle: {
    borderRadius: 15,
    overflow: "hidden",
  },
  paginationStyle: {
    height: 3,
  },
});
