import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.scss";

import Blog from "./components/Blog/index";
import Portfolio from "./components/Portfolio/index";
import Home from "./components/Home/index";
import PageNotFound from './components/PageNotFound/index';
import NavigationBar from './components/NavigationBar';

const App = () => (
  <Router>
    <NavigationBar/>
    <Container className="p-3">
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/blog"><Blog /></Route>
        <Route path="/portfolio"><Portfolio /></Route>
        <Route path="*">
            <PageNotFound />
        </Route>
      </Switch>
    </Container>
  </Router>
);

export default App;
