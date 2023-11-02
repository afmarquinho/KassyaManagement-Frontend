import axios from "axios";
import { addNew, setData, setMsg, setStatus } from "../slices/purchasingSlice";

export const listPurchasingAsync = (item) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:4000/api/purchasing");

      //? enviar al state
      dispatch(setData(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const addNewAsync = (item) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/purchasing/add-purchasing",
        item
      );

      //? actualizar el state

      dispatch(setMsg(response.data.msg));
      dispatch(setStatus(response.data.status));
      dispatch(addNew(response.data.data));
    } catch (error) {}
  };
};
