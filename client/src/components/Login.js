import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";


const Login = () =>{
    return(

        <div className='container border col-md-4 ' style={{
            position: 'absolute', left: '50%', top: '30%',
            transform: 'translate(-50%, -50%)'
        }}>

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </Form>

        </div>
    );
};

export default Login;