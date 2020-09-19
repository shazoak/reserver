import {USER_LOADED,USER_LOADING,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_SUCCESS,REGISTER_FAIL,REGISTER_SUCCESS} from '../actions/types';

const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated : null ,
    isLoading:false,
    error:null,
    user:null
};



export  default (state = initialState , action) => {
    switch (action.type) {

        case USER_LOADING:

            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED :
            return {
                ...state,
                isAuthenticated:true ,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS :
        case REGISTER_SUCCESS :
            localStorage.setItem('token',action.payload.token);
            return {
                ...state,
                isAuthenticated:true ,
                isLoading: false,
                ...action.payload
                //having user and token
            };
        case AUTH_ERROR :
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };

        default:
            return state ;

    }
};