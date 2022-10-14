import { createContext, useEffect, useState, useReducer } from "react";
import axios from "axios";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    // user: { name: "Leonan", idade: "32"},
};

const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          user: null,
          isFetching: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
        return {
          user: action.payload,
          isFetching: false,
          error: false,
        };
      case "LOGIN_FAILURE":
        return {
          user: null,
          isFetching: false,
          error: true,
        };
      default:
        return state;
    }
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
        localStorage.setItem("client", JSON.stringify(state.user))
    },[state.user])

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.clear()
        window.location.reload('/')
    }

    return (
    <AuthContext.Provider
        value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
            logout,
        }}
    >
        {children}
    </AuthContext.Provider>
    )
}