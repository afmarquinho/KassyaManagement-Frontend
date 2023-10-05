import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const updatedItem = action.payload;
      return [...state, updatedItem];
    },
    removeItem: (state, action) => {
      const updatedItem = action.payload;
      return state.filter((item) => item.ref !== updatedItem.ref);
    },
    updateItem: (state, action) => {
      const updatedItem = action.payload;

      return state.map((item) =>
        item.ref === updatedItem.ref ? updatedItem : item
      );
    },
  },
});

export const { addItem, removeItem, updateItem } = inventorySlice.actions;
export default inventorySlice.reducer;
