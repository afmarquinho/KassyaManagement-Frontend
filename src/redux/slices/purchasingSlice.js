import { createSlice } from "@reduxjs/toolkit";

export const purchasingSlice = createSlice({
  name: "purchasing",
  initialState: {
    data: [], //? array que guarda la data traída de la bd
    status: "",
    msg: "",
  },
  reducers: {
    //? actulizar el status de la data
    setData: (state, action) => {
      state.data = action.payload;
    },
    //? listado de proveedores
    addNew: (state, action) => {
      const updatedPurch = action.payload;
      state.data = [...state.data, updatedPurch];
    },

    //? actulizar el status venido del backend o frontend
    setStatus: (state, action) => {
      state.status = action.payload;
    },

    //? actulizar el mdg venido del backend o frontend
    setMsg: (state, action) => {
      state.msg = action.payload;
    },
  },
});

export const { setStatus, setMsg, addNew } = purchasingSlice.actions;
export default purchasingSlice.reducer;
