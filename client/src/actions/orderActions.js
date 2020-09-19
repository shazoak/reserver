import {GET_ORDERS,ORDER_LOADING, ADD_ORDER, DELETE_ORDER} from './types';
import {tokenConfig} from "./authActions";
import {returnErrors} from "./errorActions";
import axios from 'axios';


export const getOrders = () => async dispatch => {
    dispatch(setOrdersLoading());

    axios.get('/api/orders').then(res =>{
        dispatch({
            type:GET_ORDERS,
            payload:res.data
        })
    }).catch(err => dispatch(returnErrors(err.response.data , err.response.status)))

};

export const deleteOrder = (_id) => (dispatch,getState) => {

    axios.delete(`api/orders/${_id}`,tokenConfig(getState)).then(res=>{
        dispatch({
            type:DELETE_ORDER,
            payload:_id
        })
    }).catch(err => dispatch(returnErrors(err.response.data , err.response.status)))

};

export const addOrder = order => (dispatch,getState) => {
    axios.post('/api/orders' ,order ,tokenConfig(getState)).then(res=>{
        dispatch({
            type:ADD_ORDER,
            payload:res.data
        })
    }).catch(err => dispatch(returnErrors(err.response.data , err.response.status)))

};


export const setOrdersLoading = () => {
    return{
        type : ORDER_LOADING
    }
};




// export const getOrders = () =>async dispatch =>{
//
//     try {
//
//         ordersSetLoading();
//
//         const res = await fetch('api/orders');
//         const data = await res.json();
//
//         dispatch({
//             type: GET_ORDERS,
//             payload : data
//         })
//
//
//     }catch (e) {
//         dispatch({
//             type:ORDERS_ERROR,
//             payload: e.message
//         })
//
//     }
//
// };
//
//
// //add new order
// export const addOrders = (order) =>async dispatch =>{
//
//     try {
//
//         ordersSetLoading();
//
//         const res = await fetch('api/orders',{
//             method:'POST',
//             body:JSON.stringify(order),
//             headers:{
//                 'Content-Type' :'application/json',
//                 'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY1ZGY1ODdjMmU3ZTIyZjk4ZDQ4ZmUxIn0sImlhdCI6MTU5OTk5NDA5NiwiZXhwIjoxNjAwMzU0MDk2fQ.gT5RyPOdKuHVaivLkmw6xWl9489V8FVHlZZ2Q0d9XKw'
//             }
//         });
//         const data = await res.json();
//
//         dispatch({
//             type: ADD_ORDER,
//             payload : data
//         })
//
//
//     }catch (e) {
//         dispatch({
//             type:ORDERS_ERROR,
//             payload: e.message
//         })
//
//     }

// };
//
// // set loading to true
//
// export const ordersSetLoading = () => {
//     return {
//         type : ORDERS_SET_LOADING
//     }
// };