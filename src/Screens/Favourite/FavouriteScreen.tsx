import React from "react";
import BackHeader from "src/Components/Custom/BackHeader/BackHeader";
import ProductListing from "src/Components/Custom/ProductListing/ProductListing";
import Container from "src/Components/Shared/Container/Container";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import { useProductValue } from "src/HookState/productState";

function FavouriteScreen() {
  const products = useProductValue();
  const favourites = products.filter((product) => product.favourite);

  return (
    <Container fullScreen>
      <BackHeader title={"My Favourites"} />
      <Spacer size={30} />
      <ProductListing data={favourites} />
    </Container>
  );
}

export default FavouriteScreen;
