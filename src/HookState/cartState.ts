import { createState, useState } from "@hookstate/core";
import { CartItem } from "src/Utils/DataHandler";

const cartState = createState<Array<CartItem>>([]);

export const useCartState = () => useState(cartState);

export const useCartValue = () => useState(cartState).get();

export const getCartValue = cartState.get;

export const setCartValue = cartState.set;
