import { createState, useState } from "@hookstate/core";
import Data from "src/Config/Data";
import { Category } from "src/Utils/DataHandler";

const categoryState = createState<Array<Category>>(Data.categories);

export const useCategoryValue = () => useState(categoryState).get();

export const getCategoryValue = categoryState.get;

export const setCategoryValue = categoryState.set;
