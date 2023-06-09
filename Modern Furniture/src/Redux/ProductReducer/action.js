import axios from "axios";
import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";
export const getProducts = (paramobj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .get(`http://localhost:8080/data`, paramobj)
    .then((res) => {
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
      return res.data;
    })
    .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
};

export const getSingleProducts = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .get(`http://localhost:8080/data/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
};
