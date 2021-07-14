import { createState, useState } from "@hookstate/core";
import Data from "src/Config/Data";
import { Product } from "src/Utils/DataHandler";

const productState = createState<Array<Product>>(Data.products);

export const useProductValue = () => useState(productState).get();

export const getProductValue = productState.get;

export const setProductValue = productState.set;
