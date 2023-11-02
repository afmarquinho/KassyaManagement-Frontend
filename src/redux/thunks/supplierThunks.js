import axios from "axios";
import {
  addSupplier,
  setData,
  getOneSupplier,
  updateSupplier,
  removeSupplier,
  setMsg,
  setStatus,
} from "../slices/supplierSlice";

export const addSupplierAsync = (item) => {
  return async (dispatch) => {
    try {
      //? Enviar la solicitud al backend
      const response = await axios.post(
        "http://localhost:4000/api/supplier/add-supplier",
        item
      );

      //? si la solicitud es exitosa, adiciona el array de data
      dispatch(addSupplier(response.data.data));
      dispatch(setMsg(response.data.msg));
      dispatch(setStatus(response.data.status));
    } catch (error) {
      //? actualizar estado local
      console.log(error);
    }
  };
};
export const listSuppliersAsync = () => {
  return async (dispatch) => {
    try {
      //? Enviar la solicitud al backend
      const response = await axios.get("http://localhost:4000/api/supplier");

      //? si la solicitud es exitosa, actualiza el estado local de data
      dispatch(setData(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOneSuppilerAsync = (id) => {
  return async (dispatch) => {
    try {
      //? Enviar la solicitud al backend
      const response = await axios.get(
        `http://localhost:4000/api/supplier/${id}`
      );

      //? si la solicitud es exitosa, actualiza el estado local de oneSupplier
      dispatch(getOneSupplier(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const editSupplier = (id, updatedSupplier) => {
  return async (dispatch) => {
    try {
      //? Enviar la solicitud al backend
      const response = await axios.put(
        `http://localhost:4000/api/supplier/${id}`,
        updatedSupplier
      );

      //? si la solicitud es exitosa, actualiza el estado local de la data con la edición
      dispatch(updateSupplier(response.data.data));
      dispatch(setMsg(response.data.msg));
      dispatch(setStatus(response.data.status));

    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteSupplier = (id) => {
  return async (dispatch) => {
    try {
      //? Enviar la solicitud al backend
      const response = await axios.delete(
        `http://localhost:4000/api/supplier/delete-supplier/${id}`
      );

      //? si la solicitud es exitosa, elimina de la data el supplier indicado
      dispatch(removeSupplier(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
};
