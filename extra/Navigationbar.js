import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () =>{

    return(
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Tables | Reservation</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                    {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                    <NavDropdown title="Hamid.R" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#useraccount">User Account</NavDropdown.Item>
                        <NavDropdown.Item href="#action-1">Action-1</NavDropdown.Item>
                        <NavDropdown.Item href="#action-2">Action-2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link eventKey={2} href="/register">
                        Register
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

};

export default Navigationbar;