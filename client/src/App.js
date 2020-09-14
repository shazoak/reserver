import React,{Fragment} from 'react';
import {BrowserRouter as Router ,Route ,Switch} from 'react-router-dom';
import Navigationbar from "./components/layout/Navigationbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Redirect from "react-router-dom/es/Redirect";


const App = ()  =>{

  return (
      <Router>
          <Fragment>
              <Navigationbar/>
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <Route exact={true} path='*'>
                      <Redirect path='/' component={Home}/>
                  </Route>
              </Switch>
          </Fragment>
      </Router>

  );
};

export default App;
