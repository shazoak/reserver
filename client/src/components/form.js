import React from "react";

export const renderField = ({input , label , type , meta:{error}}) => {
    return(
        <div className="form-group">
            <label className="form-check-label">{label}</label>
            <input {...input} type={type} className="form-control"/>
        </div>
    );
};
