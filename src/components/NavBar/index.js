import React, { useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
import { useMediaQuery } from "react-responsive";

const NavigationBar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const navMenuToggle = useRef(null);

  const handleHideMenu = () => {
    if (isTabletOrMobile) {
      navMenuToggle.current.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
          buttons: 1,
        })
      );
    }
  };

  return (
    <Navbar className="fixed-top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Anas Najaa</Navbar.Brand>
        <Navbar.Toggle ref={navMenuToggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <IndexLinkContainer to="/" onClick={handleHideMenu}>
              <Nav.Link>Home</Nav.Link>
            </IndexLinkContainer>
            <LinkContainer to="/blog" onClick={handleHideMenu}>
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services" onClick={handleHideMenu}>
              <Nav.Link>Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio" onClick={handleHideMenu}>
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/links" onClick={handleHideMenu}>
              <Nav.Link>Links</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/books" onClick={handleHideMenu}>
              <Nav.Link>Books</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/playground" onClick={handleHideMenu}>
              <Nav.Link>Playground</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
