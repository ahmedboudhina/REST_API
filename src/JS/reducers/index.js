import { combineReducers } from "redux";

import contact from "./contactReducer";
import error from "./errorReducer";
import auth from "./authReducer"

export default combineReducers({
  contact,
  auth,
  error,
 
});
