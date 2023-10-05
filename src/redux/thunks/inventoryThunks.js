import { addItem } from "../slices/inventorySlice";
import  axios  from "axios";

export const addItemAsync = (item) => {
    return async (dispatch) => {
        try {
          // Enviar la solicitud al backend
          const response = await axios.post('http://localhost:4000/api/inventory/add-item', item);
    
          // Si la solicitud es exitosa, actualiza el estado local
         console.log(response)
        //  dispatch(addItem(response.data));
        } catch (error) {
          console.error('Error al añadir elemento en el backend:', error);
        }
      };
    };