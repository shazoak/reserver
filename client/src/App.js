import React,{Fragment} from 'react';
import Navigationbar from "./components/layout/Navigationbar";
import Myopenorders from "./components/Myopenorders";
import AddNewORder from "./components/AddNewOrder";

const App = ()  =>{

  return (
      <Fragment>
          <Navigationbar/>
          <Myopenorders/>
          <br/>
          <AddNewORder/>
      </Fragment>

  );
};

export default App;
