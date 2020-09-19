import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    REGISTER_FAIL,
    REGISTER_SUCCESS, LOGOUT_SUCCESS,LOGIN_SUCCESS,LOGIN_FAIL
} from '../actions/types';
import {returnErrors} from "./errorActions";
import axios from 'axios';


export const loadUser = () =>  (dispatch,getState)=> {

    dispatch({
        type:USER_LOADING
    });

    axios.get('/api/auth/user',tokenConfig(getState))
        .then(res => dispatch({
            type:USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status , 'REGISTER_FAIL'));
            dispatch({
                type:AUTH_ERROR
        })})


};


// Register User

export const register = ({name,email,password,password2}) => dispatch =>{

    const config ={
        headers:{
            'Content-Type' : 'application/json'
        }
    };

    const body = JSON.stringify({name,email,password,password2});

    axios.post('/api/users' ,body,config)
        .then(res => dispatch({
            type:REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status , 'REGISTER_FAIL'));
            dispatch({
                type:REGISTER_FAIL
            })
        })
};


//Login User

export const login = ({email,password}) => dispatch =>{

    const config ={
        headers:{
            'Content-Type' : 'application/json'
        }
    };

    const body = JSON.stringify({email,password});

    axios.post('/api/auth' ,body,config)
        .then(res => dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status , 'Login_FAIL'));
            dispatch({
                type:LOGIN_FAIL
            })
        })
};






//LogOut
export const logout = ()=>{
    return {
        type:LOGOUT_SUCCESS
    }
};



// setup config/headers and token

export const tokenConfig  = (getState) =>{

    const token = getState().auth.token;

    const config = {
        headers: {
            "content-type": "application/json"
        }
    };

    if(token){
        config.headers['x-auth-token'] = token;
    }

    return config;

};

