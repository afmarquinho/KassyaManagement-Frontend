import { createSlice } from "@reduxjs/toolkit";

export const supplierSlice = createSlice({
  name: "supplier",
  initialState: {
    status: null,
    msg: null,
    data: [],
    oneSupplier: {},
    loading: false, // para agragr el spinner
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    //actualizar el listado de proveedores
    addSupplier: (state, action) => {
      const updatedSupplier = action.payload;
      state.data = [...state.data, updatedSupplier];
    },
    //actualizar el status para personalizar los estilos del componente ALERTTA
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    //actualizar el msg para mostrar en la alerta
    setMsg: (state, action) => {
      state.msg = action.payload;
    },
    //actualizar loaging para mostrar spinner
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    //eliminar proveedor de la lista

    getOneSupplier: (state, action) => {
      state.oneSupplier = action.payload;
    },

    removeSupplier: (state, action) => {
      const updatedSupplier = action.payload;
      state.data = state.data.filter(
        (item) => item._id !== updatedSupplier._id
      );
    },
    //actualizar un proveedor
    updateSupplier: (state, action) => {
      const updatedSupplier = action.payload;
      state.data = state.data.map((item) =>
        item._id === updatedSupplier._id ? updatedSupplier : item
      );
    },
  },
});

export const {
  setData,
  addSupplier,
  setStatus,
  setMsg,
  removeSupplier,
  updateSupplier,
  setLoading,
  getOneSupplier,
} = supplierSlice.actions;
export default supplierSlice.reducer;
