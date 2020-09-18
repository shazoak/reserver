import React,{Fragment} from "react";
import Myopenorders from "./Myopenorders";
import AddNewORder from "./AddNewOrder";

const Home = () => {
    return(
        <Fragment>
            <Myopenorders/>
            <br/>
            <AddNewORder/>
        </Fragment>
    );
};


export default Home ;