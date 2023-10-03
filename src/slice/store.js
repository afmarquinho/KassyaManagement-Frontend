import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./inventorySlice";


export const store = configureStore({
    reducer: {
      inventory: inventoryReducer,
    },
  });