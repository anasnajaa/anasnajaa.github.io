import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import BlogPosts from "../BlogPosts/index";
import { Container, Row, Col } from "react-bootstrap";
import BlogPostsArchive from "../BlogPostsArchive/index";
import BlogNav from '../BlogNav/index';

function Blog() {
  let { path } = useRouteMatch();

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={2} xl={2} />
        <Col>
          <BlogNav/>
          <Switch>
            <Route path={`${path}/archive`}>
              <BlogPostsArchive />
            </Route>
            <Route exact path={path}>
              <BlogPosts />
            </Route>
          </Switch>
        </Col>
        <Col xs={12} sm={12} md={12} lg={2} xl={2} />
      </Row>
    </Container>
  );
}

export default Blog;
