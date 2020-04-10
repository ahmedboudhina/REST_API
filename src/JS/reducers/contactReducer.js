import {
  ADD_CONTACT,
  ADD_FAIL,
  GET_CONTACT,
  DELETE_SUCCESS,
  DELETE_FAIL,
} from "../constants";

const initialeState = {
  contact: [],
  isLoading: false,
};

const contactReducer = (state = initialeState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return { ...state, contact: action.payload };
    case ADD_CONTACT:
      return { ...state, contact: [...state.contact, action.payload] };
    case DELETE_SUCCESS:
      return {
        ...state,
        contact: state.contact.filter((e) => e._id !== action.payload),
      };
    default:
      return state;
  }
};

export default contactReducer;
