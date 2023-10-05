import axios from "axios";
import { addSupplier, setMsg, setStatus } from "../slices/supplierSlice";

export const addSupplierAsync = (item) => {
  return async (dispatch) => {
    try {
      // Enviar la solicitud al backend
      const response = await axios.post(
        "http://localhost:4000/api/supplier/add-supplier",
        item
      );

      // Si la solicitud es exitosa, actualiza el estado local de: lista de proveedores, status y msg

      dispatch(addSupplier(response.data.data));
      dispatch(setStatus(response.data.status));
      dispatch(setMsg(response.data.msg));

      //setear a null la alerta
      setTimeout(() => {
        dispatch(setStatus(null));
        dispatch(setMsg(null));
      }, 6000);
    } catch (error) {
      // actualizar estado local
      console.log(error);
      dispatch(setStatus(error.response.data.status));
      dispatch(setMsg(error.response.data.msg));
    } finally {
      // Independientemente del resultado de la solicitud, establecer loading en false después de 3 segundos
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 3000);
    }
  };
};
