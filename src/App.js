import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

import "./App.scss";

import Blog from "./components/Blog/index";
import Contact from "./components/Contact/index";
import Portfolio from "./components/Portfolio/index";
import Home from "./components/Home/index";
import PageNotFound from './components/PageNotFound/index';

const App = () => (
  <Router>
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
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Container className="p-3">
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/blog"><Blog /></Route>
        <Route path="/portfolio"><Portfolio /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="*">
            <PageNotFound />
        </Route>
      </Switch>
    </Container>
  </Router>
);

export default App;
