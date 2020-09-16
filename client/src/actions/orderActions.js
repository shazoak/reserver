import {GET_ORDERS,ORDERS_SET_LOADING,ORDERS_ERROR,ADD_ORDER } from './types';



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


//add new order
export const addOrders = (order) =>async dispatch =>{

    try {

        ordersSetLoading();

        const res = await fetch('api/orders',{
            method:'POST',
            body:JSON.stringify(order),
            headers:{
                'Content-Type' :'application/json',
                'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY1ZGY1ODdjMmU3ZTIyZjk4ZDQ4ZmUxIn0sImlhdCI6MTU5OTk5NDA5NiwiZXhwIjoxNjAwMzU0MDk2fQ.gT5RyPOdKuHVaivLkmw6xWl9489V8FVHlZZ2Q0d9XKw'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_ORDER,
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