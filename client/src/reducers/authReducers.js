
import {USER_LOGIN_ERROR, USER_LOGIN_SUCCESS} from '../actions/types';
const initialState = {
    userId:null,
    token:null,
    error:null
};



export  default (state = initialState , action) => {
    switch (action.type) {

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                token:action.payload.token,
                userId: action.payload.userId
            };


        case USER_LOGIN_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload

            };



        default:
            return state ;

    }
};