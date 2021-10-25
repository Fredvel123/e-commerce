import { configureStore } from "@reduxjs/toolkit";
import dataApi from '../slices/DataApi'
import openMenuShopping from "../slices/OpenMenu";

export const store = configureStore({
  reducer: {
    dataApi,
    openMenuShopping
  }
})