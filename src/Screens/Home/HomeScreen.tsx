import { StackScreenProps } from "@react-navigation/stack";
import React, { useCallback } from "react";
import BannerSwiper from "src/Components/Custom/BannerSwiper/BannerSwiper";
import CategoryListing from "src/Components/Custom/CategoryListing/CategoryListing";
import MainHeader from "src/Components/Custom/MainHeader/MainHeader";
import ProductListingMap from "src/Components/Custom/ProductListingMap/ProductListingMap";
import Body from "src/Components/Shared/Body/Body";
import Container from "src/Components/Shared/Container/Container";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import { useBannerValue } from "src/HookState/bannerState";
import { useCollectionValue } from "src/HookState/collectionState";

function HomeScreen(props: StackScreenProps<any, any>) {
  const { navigation } = props;
  const banners = useBannerValue();
  const collections = useCollectionValue();

  const renderCollections = useCallback(
    (collection) => (
      <ProductListingMap
        key={collection.id}
        name={collection.name}
        data={collection.products}
        viewList={() => {
          navigation.navigate("Listing", {
            item: collection,
            type: "COLLECTION",
          });
        }}
      />
    ),
    []
  );

  return (
    <Container fullScreen>
      <MainHeader title={"E SHOP"} />
      <Body showsVerticalScrollIndicator={false}>
        <Spacer size={30} />
        <BannerSwiper banners={banners} />
        <Spacer size={30} />
        <CategoryListing />
        <Spacer size={30} />
        {collections.map(renderCollections)}
      </Body>
    </Container>
  );
}

export default HomeScreen;
