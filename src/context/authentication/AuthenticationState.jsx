import {
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_ACTIVE_USER,
} from "../../types";
import React, { useReducer } from "react";
import authenticationReducer from "./authenticationReducer";
import authenticationContext from "./authenticationCotext";

const AuthenticationState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    authentication: null,
    user: null,
    msg: null,
  };

  const [state, dispatch] = useReducer(authenticationReducer, initialState);
  return (
    <authenticationContext.Provider
      value={{
        token: state.token,
        authentication: state.authentication,
        user: state.user,
        msg: state.msg,
      }}
    >
      {props.children}
    </authenticationContext.Provider>
  );
};

export default AuthenticationState;
