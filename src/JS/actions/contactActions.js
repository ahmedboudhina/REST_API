import {
  ADD_CONTACT,
  ADD_FAIL,
  GET_CONTACT,
  DELETE_SUCCESS,
  DELETE_FAIL,
} from "../constants";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnError } from "./errorActions";

export const getContact = () => async (dispatch, getState) => {
  try {
    const contactList = await axios.get("http://localhost:4000/contact");
    dispatch({
      type: GET_CONTACT,
      payload: contactList.data,
    });
  } catch (err) {
    dispatch(
      returnError({
        msg: err.response.data,
        status: err.response.status,
        id: "GET_CONTACT_FAIL",
      })
    );
  }
};

export const addContact = (payload) => async (dispatch, getState) => {
  try {
    await axios.post(
      "http://localhost:4000/contact/add_contact",
      payload,
      tokenConfig(getState)
    );
    dispatch({
      type: ADD_CONTACT,
      payload,
    });
  } catch (err) {
    dispatch(
      returnError({
        msg: err.response.data,
        status: err.response.status,
        id: "ADD_FAIL",
      })
    );
    dispatch({
      type: ADD_FAIL,
    });
  }
};
export const deleteContact = (payload) => async (dispatch, getState) => {
  try {
    await axios.delete(
      `http://localhost:4000/contact/delete_contact/${payload}`,
      tokenConfig(getState)
    );
    dispatch({
      type: DELETE_SUCCESS,
      payload,
    });
  } catch (err) {
    dispatch(
      returnError({
        msg: err.response.data,
        status: err.response.status,
        id: "DELETE_FAIL",
      })
    );
    dispatch({
      type: DELETE_FAIL,
    });
  }
};
