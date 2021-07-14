import { createState, useState } from "@hookstate/core";
import Data from "src/Config/Data";
import { Order } from "src/Utils/DataHandler";

//@ts-ignore
const orderState = createState<Array<Order>>(Data.orders);

export const useOrderValue = () => useState(orderState).get();

export const getOrderValue = orderState.get;

export const setOrderValue = orderState.set;
