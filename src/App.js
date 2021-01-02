import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.scss";

import Blog from "./components/Blog/index";
import Portfolio from "./components/Portfolio/index";
import Home from "./components/Home/index";
import PageNotFound from "./components/PageNotFound/index";
import NavigationBar from "./components/NavBar";
import Services from "./components/Services/index";
import Links from "./components/Links/index";
import Books from "./components/Books/index";
import FormPlaceServiceRequest from "./components/FormPlaceServiceRequest";
import Meta from "./components/Meta/index";
import PlayGround from "./components/PlayGround/index";

const App = () => (
  <Router>
    <Meta />
    <NavigationBar />
    <Container className="p-3 mt-5">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/services/request">
          <FormPlaceServiceRequest />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/links">
          <Links />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/playground">
          <PlayGround />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Container>
  </Router>
);

export default App;
