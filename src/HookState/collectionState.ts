import { createState, useState } from "@hookstate/core";
import Data from "src/Config/Data";
import { Collection } from "src/Utils/DataHandler";

const collectionState = createState<Array<Collection>>(Data.collections);

export const useCollectionValue = () => useState(collectionState).get();

export const getCollectionValue = collectionState.get;

export const setCollectionValue = collectionState.set;
