import {GET_ORDERS,ADD_ORDER,DELETE_ORDER,ORDER_LOADING} from '../actions/types';
const initialState = {
    orders:null,
    current:null,
    loading:false,
    error:null
};


export  default (state = initialState , action) => {
    switch (action.type) {

        case DELETE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(order => order._id !== action.payload)
            };

        case ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders,action.payload],
                loading: false
            };

        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                loading: false
            };
        case ORDER_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state ;

    }
};