import React,{Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from "react-bootstrap/Badge";


const Myopenorders = () => {

    return(
        <Fragment>
            <div className="container border">
                <br/>
                <h5>My Open Orders</h5>
                <hr/>
                <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tables : T1 T2</Card.Title>
                            <Card.Text>
                                <Button variant="light">
                                    Enrolment :  <Badge variant="light">9</Badge>
                                </Button>
                                <Button variant="light">
                                    Status :  <Badge variant="light">Open</Badge>
                                </Button>
                                <Button variant="light">
                                    Queue-no :  <Badge variant="light"> </Badge>
                                </Button>
                            </Card.Text>
                            <Button variant="danger">Close </Button>{'\n'}
                            <Button variant="dark">Edit </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Opened since 9-14-2020 16:47:21</small>
                        </Card.Footer>
                    </Card>
                    <Card >
                        <Card.Body>
                            <Card.Title>Tables : T5 T4 T7</Card.Title>
                            <Card.Text>
                                <Button variant="light">
                                    Enrolment :  <Badge variant="light">12</Badge>
                                </Button>
                                <Button variant="light">
                                    Status :  <Badge variant="light">In-Q</Badge>
                                </Button>
                                <Button variant="light">
                                    Queue-no :  <Badge variant="light">101</Badge>
                                </Button>
                            </Card.Text>
                            <Button variant="danger">Close </Button>{'\n'}
                            <Button variant="dark">Edit </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Opened since 9-14-2020 16:47:21</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tables : T10 T20 T30</Card.Title>
                            <Card.Text>
                                <Button variant="light">
                                    Enrolment :  <Badge variant="light">19</Badge>
                                </Button>
                                <Button variant="light">
                                    Status :  <Badge variant="light">In-Q</Badge>
                                </Button>
                                <Button variant="light">
                                    Queue-no :  <Badge variant="light">104</Badge>
                                </Button>
                            </Card.Text>
                            <Button variant="danger">Close </Button>{'\n'}
                            <Button variant="dark">Edit </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Opened since 9-14-2020 16:47:21</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        </Fragment>

    );
};

export default Myopenorders;