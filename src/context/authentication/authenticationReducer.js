import {
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_ACTIVE_USER,
} from "../../types";
export default function reducer(state, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authentication: true,
        msg: null,
        loading: false,
      };
    case LOGOUT:
    case LOGIN_ERROR:
    case SIGNUP_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        authentication: false,
        msg: action.payload,
        loading: false,
      };
    case GET_ACTIVE_USER:
      return {
        ...state,
        user: action.payload,
        authentication: true,
        loading: false,
      };
    default:
      return state;
  }
}
