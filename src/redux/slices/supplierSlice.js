import { createSlice } from "@reduxjs/toolkit";

export const supplierSlice = createSlice({
  name: "supplier",
  initialState: {
    data: [], //? array que guarda la data traída de la bd
    oneSupplier: {}, //? objeto que almacena un proveedor para verlo o editarlo
    searchTerm: "", //? state para almacenar la busqueda en el componente seachSupplier
    status: "",
    msg: "",
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },

    //? listado de proveedores
    addSupplier: (state, action) => {
      const updatedSupplier = action.payload;
      state.data = [...state.data, updatedSupplier];
    },

    //? valor del input de buscar en el listado de proveedores
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    //? obtener un proveedor de la lista
    getOneSupplier: (state, action) => {
      state.oneSupplier = action.payload;
    },

    //? eliminar un proveedor de la lista
    removeSupplier: (state, action) => {
      const deletedSupplier = action.payload;
      state.data = state.data.filter(
        (item) => item._id !== deletedSupplier._id
      );
    },

    //? actualizar un proveedor de la lista
    updateSupplier: (state, action) => {
      const updatedSupplier = action.payload;
      state.data = state.data.map((item) =>
        item._id === updatedSupplier._id ? updatedSupplier : item
      );
    },

        //? actulizar el status venido del backend o frontend
    setStatus: (state, action) => {
      state.status = action.payload;
    },

        //? actulizar el msg venido del backend o frontend
    setMsg: (state, action) => {
      state.msg = action.payload;
    },
  },
});

export const {
  setData,
  addSupplier,
  removeSupplier,
  updateSupplier,
  setSearchTerm,
  getOneSupplier,
  setMsg,
  setStatus,
} = supplierSlice.actions;
export default supplierSlice.reducer;
