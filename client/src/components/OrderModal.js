import React,{Component} from "react";
import {Button, Modal, ModalHeader, ModalBody, Form,Row,Col,Badge, FormGroup, Label, Input, Container} from 'reactstrap';
import {connect} from 'react-redux';
import {addOrder} from '../actions/orderActions';
import PropTypes from "prop-types";


class OrderModal extends  Component {
    state = {
        modal:false,
        enrolment:''
    };

    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) =>{
        this.setState({ [e.target.name]:e.target.value });
        console.log(e.target.value)
    };

    onSubmit = (e) =>{
        e.preventDefault();

        const newOrder = {
            enrolment : this.state.enrolment,
            status:'Temp Status',
            Q:'Temp Q',
            Tables:'Temp Tables',
            msg:'Temp Msg',
            date:Date.now()

        };
        //Add Order via addOrder action
        this.props.addOrder(newOrder);

        //Close modal

        this.toggle();
    };

    render() {
        return(
            <div>
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.toggle}>Add Order</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add New Order</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="enrolment">Enrolment</Label>
                                <Input type="number" name="enrolment" id="order" placeholder="Enter Customer Number" onChange={this.onChange}/>
                                <br/>
                                <Label for="A-O">Allocating Order</Label>
                                <hr/>
                                <Container>
                                    <Row xs="3">
                                        <Col>Status: <Badge color="light">{'status'}</Badge></Col>
                                        <Col>Tables: <Badge color="light">{'Tables'}</Badge></Col>
                                        <Col>Queue: <Badge color="light">{'Queue'}</Badge></Col>
                                    </Row>
                                    <Row>
                                        <Col>Msg : <Badge color="light">{'msg'}</Badge></Col>
                                    </Row>
                                </Container>
                                <Button color="dark" style={{marginTop:'2rem'}} block>Add Order</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

OrderModal.propTypes ={
    addOrder:PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
    order: state.order
});


export default connect(mapStateToProps,{addOrder})(OrderModal);