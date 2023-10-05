import { configureStore, combineReducers } from "@reduxjs/toolkit";
import inventoryReducer from "./slices/inventorySlice";
import supplierReducer from "./slices/supplierSlice";



const rootReducer = combineReducers({
  inventory: inventoryReducer,
  supplier: supplierReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});