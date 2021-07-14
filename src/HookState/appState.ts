import { createState, useState } from "@hookstate/core";

type AppState = {
  loggedIn: boolean;
};

const initialState: AppState = {
  loggedIn: false,
};

export const appState = createState(initialState);

export const useAppValue = () => useState(appState).get();

export const getAppValue = appState.get;

export const setAppValue = appState.set;

export const resetAppValue = () => appState.set(initialState);
