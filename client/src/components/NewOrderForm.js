import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const NewOrderForm = () => {

    return(
        <Form>
            <Form.Group >
                <Form.Label>Enrolment</Form.Label>
                <Form.Control type="number" placeholder="Enter Customer number" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );

};


export default NewOrderForm;