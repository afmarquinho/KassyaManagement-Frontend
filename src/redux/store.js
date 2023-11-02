import { configureStore, combineReducers } from "@reduxjs/toolkit";
import inventoryReducer from "./slices/inventorySlice";
import supplierReducer from "./slices/supplierSlice";
import purchasingReducer from "./slices/purchasingSlice";

const rootReducer = combineReducers({
  inventory: inventoryReducer,
  supplier: supplierReducer,
  purchasing: purchasingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
