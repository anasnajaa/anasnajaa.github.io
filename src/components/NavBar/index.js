import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => (
    <Navbar bg="light" expand="lg">
        <IndexLinkContainer to="/">
            <Navbar.Brand>Anas Najaa</Navbar.Brand>
        </IndexLinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <IndexLinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </IndexLinkContainer>
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
