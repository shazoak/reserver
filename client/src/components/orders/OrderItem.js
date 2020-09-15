import React from "react";
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";


const OrderItem = ({order}) => {

    const {tables , status , Q , date , enrolment } = order;


    return(
        <Card>
            <Card.Body>
                <Card.Title>Tables : {tables ? (tables): ("T20,T30")}</Card.Title>
                <Card.Text>
                    <Button variant="light">
                        Enrolment :  <Badge variant="light">{enrolment}</Badge>
                    </Button>
                    <Button variant="light">
                        Status :  <Badge variant="light">{status}</Badge>
                    </Button>
                    <Button variant="light">
                        Queue-no :  <Badge variant="light"> {Q}</Badge>
                    </Button>
                </Card.Text>
                <Button variant="danger">Close </Button>{'\n'}
                <Button variant="dark">Edit </Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Opened since {date}</small>
            </Card.Footer>
        </Card>
    );

};

OrderItem.propTypes = {
    order : PropTypes.object.isRequired,
};

export default OrderItem;