import { createState, useState } from "@hookstate/core";
import Data from "src/Config/Data";
import { Address } from "src/Utils/DataHandler";

//@ts-ignore
const addressState = createState<Array<Address>>(Data.addresses);

export const useAddressValue = () => useState(addressState).get();

export const getAddressValue = addressState.get;

export const setAddressValue = addressState.set;
