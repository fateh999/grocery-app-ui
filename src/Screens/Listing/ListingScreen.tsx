import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import BackHeader from "src/Components/Custom/BackHeader/BackHeader";
import ProductListing from "src/Components/Custom/ProductListing/ProductListing";
import Container from "src/Components/Shared/Container/Container";
import { useCategoryValue } from "src/HookState/categoryState";
import { useCollectionValue } from "src/HookState/collectionState";
import { Category, Collection } from "src/Utils/DataHandler";

function ListingScreen(props: StackScreenProps<any, any>) {
  const { route } = props;
  const { params }: any = route;
  const collections = useCollectionValue();
  const categories = useCategoryValue();
  const {
    item,
    type,
  }: { type: "COLLECTION" | "CATEGORY"; item: Category | Collection } = params;
  const collectionProducts =
    collections.find((_) => _.id === item.id)?.products ?? [];
  const categoryProducts =
    categories.find((_) => _.id === item.id)?.products ?? [];
  const finalProducts =
    type === "CATEGORY" ? categoryProducts : collectionProducts;
  const title = item.name;

  return (
    <Container fullScreen>
      <BackHeader title={title} />
      <ProductListing data={finalProducts} />
    </Container>
  );
}

export default ListingScreen;
