import {combineReducers} from "redux";
import orderReducer from "./orderReducer";
import authReducers from "./authReducers";
import {reducer as formReducer} from 'redux-form';

export default combineReducers({

    order : orderReducer,
    form : formReducer,
    auth : authReducers

});

