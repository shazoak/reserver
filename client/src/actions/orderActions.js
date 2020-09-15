import {GET_ORDERS,ORDERS_SET_LOADING,ORDERS_ERROR} from './types';



export const getOrders = () =>async dispatch =>{

    try {

        ordersSetLoading();

        const res = await fetch('api/orders');
        const data = await res.json();

        dispatch({
            type: GET_ORDERS,
            payload : data
        })


    }catch (e) {
        dispatch({
            type:ORDERS_ERROR,
            payload: e.message
        })

    }

};


// set loading to true

export const ordersSetLoading = () => {
    return {
        type : ORDERS_SET_LOADING
    }
};