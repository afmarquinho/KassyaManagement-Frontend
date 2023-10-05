import axios from "axios";
import { addSupplier } from "../slices/supplierSlice";

export const addSupplierAsync = (item) => {
  return async (dispatch) => {
    try {
      // Enviar la solicitud al backend
      const response = await axios.post(
        "http://localhost:4000/api/supplier/add-supplier",
        item
      );

      // Si la solicitud es exitosa, actualiza el estado local
      console.log(response)
      
      //dispatch(addSupplier(response.data.data));
    } catch (error) {
      console.error("Error al añadir elemento en el backend:", error);
    }
  };
};
