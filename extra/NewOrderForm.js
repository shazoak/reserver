import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {connect} from 'react-redux';
import {addOrders} from "../actions/orderActions";
import PropTypes from 'prop-types';


const NewOrderForm = ({addOrders}) => {
    // const[enrolment,setEnrolment] = useState('');

    return(
        <Form>
            <Form.Group >
                <Form.Label>Enrolment</Form.Label>
                <Form.Control type="number" placeholder="Enter Customer number" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary"  onClick={() => console.log("hi there")}>
                Submit
            </Button>
        </Form>
    );

};

NewOrderForm.propTypes = {
    addOrders: PropTypes.func.isRequired,
};



export default connect(null,{addOrders})( NewOrderForm);