import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

import BlogPostBySlug from '../BlogPostBySlug/index';
import BlogPosts from '../BlogPosts/index';
import { Container, Row, Col } from 'react-bootstrap';

function Blog() {
    let { path } = useRouteMatch();
  
    return (
      <div>  
        <Switch>
          <Route exact path={path}>
            <Container>
              <Row>
                <Col xs={12} sm={12} md={12} lg={2} xl={2}/>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                  <BlogPosts/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={2} xl={2}/>
              </Row>
            </Container>
          </Route>
          <Route path={`${path}/post/:slug`}>
            <BlogPostBySlug />
          </Route>
        </Switch>
      </div>
    );
  }

  export default Blog;