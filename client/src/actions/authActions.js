import {USER_LOADED,USER_LOADING,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_SUCCESS,REGISTER_FAIL,REGISTER_SUCCESS} from '../actions/types';
import {returnErrors} from "./errorActions";


export const loadUser = () => async (dispatch,getState)=> {


    try{
        dispatch({type:USER_LOADING});

        const res = await fetch('/api/auth/user',{headers:{
            "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY2MmY4NTgzODBhOTM0NzQwYWI0ZWRlIn0sImlhdCI6MTYwMDMyMjAxNSwiZXhwIjoxNjAwNjgyMDE1fQ.ODCLvZtjSqcERfBgITpV_R5SpcbayCJLBZJsmaowUjg"
            }});
        const data = res.json();

        dispatch({
            type: USER_LOADED,
            payload : data
        })


    }catch (err) {

        console.error(err);

        // dispatch(returnErrors(err.response.data,err.response.status));
        // dispatch({
        //     type:AUTH_ERROR,
        //     payload: err.message
        // })

    }

    // dispatch({type:USER_LOADING});
    //
    // try{
    //     const config =tokenConfig();
    //
    //     console.log(config);
    //
    //     if(config){
    //
    //         const res = await fetch('/api/auth/user',config);
    //         console.log(res);
    //         const data = await res.json();
    //
    //         dispatch({
    //             type: USER_LOADED,
    //             payload : data
    //         })
    //
    //     }
    //     else {
    //         dispatch(returnErrors("No token , Authorization denied","401"));
    //         dispatch({
    //             type:AUTH_ERROR,
    //             payload: "No token , Authorization denied"
    //         })
    //     }
    //
    //
    // }catch (err) {
    //
    //     if (err.response){
    //
    //         dispatch(returnErrors(err.response.data,err.response.status));
    //         dispatch({
    //             type:AUTH_ERROR,
    //             payload: err.message
    //         })
    //     }
    // }

};

// setup config/headers and token

export const tokenConfig  = getState =>{

    const token = getState().auth.token;

    const config = {
        headers: {
            "content-type": "application/json"
        }
    };
    if(token){
        config.headers['x-auth-token'] = token;
        return config;
    }
    else {
        return config;
    }



};





// dispatch({type:USER_LOADING});
//
// const token = getState().auth.token;
//
// const config = {
//     headers:{
//         "content-type" : "application/json"
//     }
// };
//
// // config.headers['x-auth-token'] = 'its me';
// if(token){
//     config.headers['x-auth-token'] = token;
// }
//
//
// fetch('/api/auth/user',config)
//     .then(res => dispatch({
//         type: USER_LOADED,
//         payload:res.data
//     }))
//     .catch(err =>{
//         dispatch(returnErrors(err.response.data,err.response.status));
//         dispatch({
//             type :AUTH_ERROR
//         });
//     });


// export const userLoginAttempt = ({email , password}) => async dispatch =>{
//     try{
//
//         const res = await fetch('api/auth',{
//             method:'POST',
//             body:JSON.stringify({email,password}),
//             headers:{
//                 'Content-Type' :'application/json'
//             }
//         });
//
//         const data = await res.json();
//
//         console.log(data);
//
//         dispatch({
//             type: USER_LOGIN_SUCCESS,
//             payload : data
//         })
//
//
//     }catch (e) {
//         dispatch({
//             type:USER_LOGIN_ERROR,
//             payload: e.message
//         })
//     }
// };
