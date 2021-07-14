import { createState, useState } from "@hookstate/core";
import Data from "src/Config/Data";
import { Banner } from "src/Utils/DataHandler";

const bannerState = createState<Array<Banner>>(Data.banners);

export const useBannerValue = () => useState(bannerState).get();

export const getBannerValue = bannerState.get;

export const setBannerValue = bannerState.set;
