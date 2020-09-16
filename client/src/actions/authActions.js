import {
    USER_LOGIN_ERROR,
    USER_LOGIN_SUCCESS,

} from '../actions/types';


export const userLoginAttempt = ({email , password}) => async dispatch =>{
    try{

        const res = await fetch('api/auth',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type' :'application/json'
            }
        });

        const data = await res.json();

        console.log(data);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload : data
        })


    }catch (e) {
        dispatch({
            type:USER_LOGIN_ERROR,
            payload: e.message
        })
    }
};
