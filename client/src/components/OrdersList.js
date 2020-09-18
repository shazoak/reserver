import React,{Component} from "react";
import {Container ,Button ,CardHeader, Card , CardBody,CardColumns , CardText , CardFooter} from 'reactstrap';
import {CSSTransition , TransitionGroup} from "react-transition-group";
import {connect} from 'react-redux';
import {getOrders , deleteOrder} from "../actions/orderActions";
import PropTypes from 'prop-types';
import Badge from "react-bootstrap/Badge";
import Preloader from "./layout/Preloader";



class OrdersList extends Component{

    componentDidMount() {
        this.props.getOrders();
    }

    onDeleteClick = (_id) =>{
        this.props.deleteOrder(_id)
    };

    onEditClick = (id) =>{
        this.props.deleteOrder(id)
    };
    render() {
        const {orders,loading} = this.props.order;

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
            <Container className="border">
                <br/>
                <h5>My Open Orders</h5>
                <hr/>
                {orders.length !==0  ? (
                    <CardColumns style={{marginBottom:'1rem'}}>
                        <TransitionGroup className="orders-list" >
                            {orders.map(({_id,enrolment , status,date,Q,tables,msg})=>(
                                <CSSTransition key={_id} timeout={1000} classNames="fade">

                                    <Card style={{marginBottom:'1rem'}} >
                                        <CardBody>
                                            <CardHeader style={{marginBottom:'1rem'}}>Tables : {tables}</CardHeader>
                                            <CardText>
                                                <Button style={{marginRight:'0.5rem' , marginBottom:'0.5rem'}} >
                                                    Enrolment : <Badge color="dark">{enrolment}</Badge>
                                                </Button>
                                                <Button style={{marginRight:'0.5rem' , marginBottom:'0.5rem'}}>
                                                    status : <Badge color="light">{status}</Badge>
                                                </Button>
                                                <Button style={{marginRight:'0.5rem' , marginBottom:'0.5rem'}}>
                                                    Queue : <Badge color="light">{Q}</Badge>
                                                </Button>
                                                <Button style={{marginRight:'0.5rem' , marginBottom:'0.5rem'}}>
                                                    Msg : <Badge color="light">{msg}</Badge>
                                                </Button>
                                            </CardText>
                                            <Button className="remove-btn" color="danger" size="sm" onClick={this.onDeleteClick.bind(this,_id)}>
                                                close
                                            </Button>
                                            <Button className="edit-btn" color="dark" size="sm" onClick={this.onEditClick.bind(this,_id)}>
                                                Edit
                                            </Button>
                                        </CardBody>
                                        <CardFooter>
                                            Opened Since : {date}
                                        </CardFooter>
                                    </Card>

                                </CSSTransition>
                            ))}

                        </TransitionGroup>

                    </CardColumns>
                ) : (
                    <div>
                        No Orders To Show
                    </div>
                )}

            </Container>
        );
    }
}


OrdersList.propTypes ={
    getOrders:PropTypes.func.isRequired,
    deleteOrder:PropTypes.func.isRequired,
    order:PropTypes.object.isRequired
};

const mapStateToProps = (state) =>({
    order:state.order
});


export default connect(mapStateToProps,{getOrders,deleteOrder})(OrdersList);