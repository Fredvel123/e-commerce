import { configureStore } from "@reduxjs/toolkit";
import dataApi from '../slices/DataApi'

export const store = configureStore({
  reducer: {
    dataApi
  }
})