import axios from "axios";
import {
  addNew,
  setData,
  setMsg,
  setStatus,
  setCount,
  getOrder,
} from "../slices/purchasingSlice";

export const listPurchasingAsync = () => {
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
      dispatch(addNew(response.data.data));
      dispatch(setMsg(response.data.msg));
      dispatch(setStatus(response.data.status));
    } catch (error) {
      console.log(error);
    }
  };
};
export const countAsync = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/purchasing/count-orders"
      );
      dispatch(setCount(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrderAsync = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/purchasing/get-order/${id}`
      );
      dispatch(getOrder(response.data.data))
    } catch (error) {
      console.log(error);
    }
  };
};
