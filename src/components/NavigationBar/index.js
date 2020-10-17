import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => (
    <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
            <Navbar.Brand>Anas Najaa</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
                <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
                <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavigationBar;
