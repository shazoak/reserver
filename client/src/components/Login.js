import React from "react";
import  {reduxForm , Field} from "redux-form";
import {renderField} from "./form";
import {connect} from "react-redux";
import {userLoginAttempt} from "../actions/authActions";

const Login = (props) => {

    const onSubmit = (values) =>{
        // console.log(values);
        return props.userLoginAttempt(values);

    };

    const {handleSubmit} = props;

    return(
        <div className='container border col-md-4 ' style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
             <form className="mt-4" onSubmit={handleSubmit(onSubmit.bind())}>
                 <Field name="email" label="Email" type="text" component={renderField} />
                 <Field name="password" label="Password " type="password" component={renderField} />
                 <button type="submit" className="btn btn-primary btn-big btn-block">Login</button>
             </form>
        </div>
    );

};

const mapDispatchToProps = {
    userLoginAttempt
};



export default reduxForm({
    form:'LoginForm'
})(connect(null,mapDispatchToProps)(Login));
