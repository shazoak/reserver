import React,{Fragment} from "react";
import NewOrderFrom from "./NewOrderForm";


const AddNewORder = () => {
    return(
        <Fragment>
            <div className="container border">
                <br/>
                <h5>Add New Order</h5>
                <hr/>
                <NewOrderFrom/>
            </div>
        </Fragment>
    );
};


export default AddNewORder;