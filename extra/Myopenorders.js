import React, {Fragment, useEffect} from "react";
import {connect} from  'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import PropTypes from 'prop-types';
import {getOrders} from "../actions/orderActions";
import OrderItem from "./orders/OrderItem";
import Preloader from "./layout/Preloader";


const Myopenorders = ({order:{orders,loading},getOrders}) => {

    useEffect(()=>{
        getOrders();
        // eslint-disable-next-line
    },[]);

    if (loading || orders === null){

        return (
            <div className="container border">
                <br/>
                <h5>My Open Orders</h5>
                <hr/>
                <div className="text-center">
                    <Preloader/>
                </div>
            </div>
        );
    }

    return(
        <Fragment>
            <div className="container border">
                <br/>
                <h5>My Open Orders</h5>
                <hr/>
                {!loading && orders.length === 0 ? (
                    <p> No Orders to show...</p>
                ) : (
                    <CardDeck>
                        {orders.map(order => <OrderItem order={order} key={order._id}/>)}
                    </CardDeck>
                )}
            </div>
        </Fragment>

    );
};

Myopenorders.propTypes = {
    order : PropTypes.object.isRequired,
    getOrders: PropTypes.func.isRequired,
};

const mapStateToProps = state =>({
    order : state.order
});

export default connect(mapStateToProps,{getOrders})(Myopenorders);