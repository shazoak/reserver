import {combineReducers} from "redux";
import orderReducer from "./orderReducer";
import authReducers from "./authReducers";
import errorReducer from "./errorReducer";
import {reducer as formReducer} from 'redux-form';

export default combineReducers({

    order : orderReducer,
    form : formReducer,
    auth : authReducers,
    error: errorReducer

});

