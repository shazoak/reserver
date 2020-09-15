
import {GET_ORDERS,ORDERS_SET_LOADING,ORDERS_ERROR} from '../actions/types';
const initialState = {
    orders:null,
    current:null,
    loading:false,
    error:null
};



export  default (state = initialState , action) => {
    switch (action.type) {

        case GET_ORDERS:
            return {
                ...state,
                orders :action.payload,
                loading: false
            };

        case ORDERS_SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case ORDERS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            };

        default:
            return state ;

    }
};