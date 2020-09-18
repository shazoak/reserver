import React,{Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from "./components/AppNavbar";
import OrdersList from "./components/OrdersList";
import OrderModal from "./components/OrderModal";
import {Container} from "reactstrap";
import {Provider} from 'react-redux' ;
import store from "./store";


class App extends Component{

    render(){

        return (
            <Provider store={store}>
                <div className="App">
                    <AppNavbar/>
                    <Container>
                        <OrderModal/>
                        <OrdersList/>
                    </Container>
                </div>
            </Provider>

        );
    };
}

export default App;
