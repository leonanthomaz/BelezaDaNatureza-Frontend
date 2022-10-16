import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_BACKENDURL
})

export const loginStart = async (credentials, dispatch) => {
    dispatch({ type: 'LOGIN_START'})
    try{
        const response = await api.post("auth/login", credentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    }catch(error){
        dispatch({ type: "LOGIN_FAILURE", payload: error.response.data.msg });
    }
}