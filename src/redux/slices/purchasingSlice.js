import { createSlice } from "@reduxjs/toolkit";

export const purchasingSlice = createSlice({
  name: "purchasing",
  initialState: {
    data: [], //? array que guarda la data traída de la bd
    status: "",
    msg: "",
    count: 0,
    itemArray: [], //? array que en el front de manera temporal todos los articulos de un nuevo pedido
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
    //? conteno de la data para el consecutivo
    setCount: (state, action) => {
      state.count = action.payload;
    },
    //? guardar en el array los item de un nuevo pedido antes de mandarlo al backend, al procesar el pedido es necesario resetear el array
    setItemArray: (state, action) => {
      const newItem = action.payload;
      state.itemArray = [...state.itemArray, newItem];
    },
    updateItem: (state, action) => {
      const updatedItem = action.payload;
      const updatedItemArray = state.itemArray.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
      state.itemArray = updatedItemArray;
    },

    deleteItem: (state, action) => {
      const deleteItemId = action.payload;
      state.itemArray = state.itemArray.filter(
        (item) => item.id !== deleteItemId
      );
    },
  },
});

export const {
  setStatus,
  setMsg,
  addNew,
  setData,
  setCount,
  setItemArray,
  updateItem,
  deleteItem,
} = purchasingSlice.actions;
export default purchasingSlice.reducer;
