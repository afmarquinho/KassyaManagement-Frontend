import { createSlice } from "@reduxjs/toolkit";

export const supplierSlice = createSlice({
  name: "supplier",
  initialState: {
    status: null,
    msg: null,
    data: [],
  },
  reducers: {
    addSupplier: (state, action) => {
      const updatedSupplier = action.payload;
      return [...state.data, updatedSupplier];
    },
    setStatus: (state, action) => {
      return (state.status = action.payload);
    },
    removeSupplier: (state, action) => {
      const updatedSupplier = action.payload;
      return state.filter((item) => item._id !== updatedSupplier._id);
    },
    setMsg: (state, action) => {
      return (state.msg = action.payload);
    },
    updateSupplier: (state, action) => {
      const updatedSupplier = action.payload;

      return state.data.map((item) =>
        item._id === updatedSupplier._id ? updatedSupplier : item
      );
    },
  },
});

export const { addSupplier, removeSupplier, updateSupplier } =
  supplierSlice.actions;
export default supplierSlice.reducer;
