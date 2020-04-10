import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../constants";
import axios from "axios";
import { returnError, clearError } from "../actions/errorActions";

export const register = (payload) => async (dispatch) => {
  try {
    const user = await axios.post(
      "http://localhost:4000/users/register",
      payload
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: user.data,
    });
  } catch (err) {
    dispatch(
      returnError({
        msg: err.response.data,
        status: err.response.status,
        id: "REGISTRE_FAIL",
      })
    );
    dispatch({ type: REGISTER_FAIL });
  }
};

export const login = (payload) => async (dispatch) => {
  try {
    const user = await axios.post("http://localhost:4000/users/login", payload);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user.data,
    });
  } catch (err) {
    dispatch(
      returnError({
        msg: err.response.data,
        status: err.response.status,
        id: "LOGIN_FAIL",
      })
    );
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["auth-token"] = token;
  }

  return config;
};
