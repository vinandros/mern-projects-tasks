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
import axiosCliente from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

const AuthenticationState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    authentication: null,
    user: null,
    msg: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(authenticationReducer, initialState);

  const signupUser = async (data) => {
    try {
      const res = await axiosCliente.post("/users", data);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });

      //get user Data
      getAuthenticatedUser();
    } catch (error) {
      const alert = { msg: error.response.data.msg, category: "alerta-error" };
      dispatch({
        type: SIGNUP_FAIL,
        payload: alert,
      });
    }
  };

  const getAuthenticatedUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      //send token by headers
      tokenAuth(token);
    }
    try {
      const res = await axiosCliente.get("/auth");
      dispatch({
        type: GET_ACTIVE_USER,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const login = async (data) => {
    try {
      const res = await axiosCliente.post("/auth", data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      //get user Data
      getAuthenticatedUser();
    } catch (error) {
      const alert = { msg: error.response.data.msg, category: "alerta-error" };
      dispatch({
        type: LOGIN_ERROR,
        payload: alert,
      });
    }
  };

  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <authenticationContext.Provider
      value={{
        token: state.token,
        authentication: state.authentication,
        user: state.user,
        msg: state.msg,
        loading: state.loading,
        signupUser,
        login,
        getAuthenticatedUser,
        logout,
      }}
    >
      {props.children}
    </authenticationContext.Provider>
  );
};

export default AuthenticationState;
