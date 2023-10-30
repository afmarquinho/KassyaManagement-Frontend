import { createSlice } from "@reduxjs/toolkit";

export const supplierSlice = createSlice({
  name: "supplier",
  initialState: {
    status: null, //? status para las alertas
    msg: null, //?msg de la alerta
    data: [], //? array que guarda la data traída de la bd
    oneSupplier: {}, //? objeto que almacena un proveedor para verlo o editarlo
    searchTerm: "", //? state para almacenar la busqueda en el componente seachSupplier
    loading: false, //? para agregr el spinner
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
    //actualizar el status para personalizar los estilos del componente ALERTA
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    //actualizar el msg para mostrar en la alerta
    setMsg: (state, action) => {
      state.msg = action.payload;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
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
      const deletedSupplier = action.payload;
      state.data = state.data.filter(
        (item) => item._id !== deletedSupplier._id
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
  setSearchTerm,
  setLoading,
  getOneSupplier,
} = supplierSlice.actions;
export default supplierSlice.reducer;
