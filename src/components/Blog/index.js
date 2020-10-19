import React from "react";
import { Switch, Route } from "react-router-dom";

import BlogPosts from "../BlogPosts/index";
import { Row, Col } from "react-bootstrap";
import BlogPostsArchive from "../BlogPostsArchive/index";
import BlogTopics from "../BlogTopics/index";
import BlogNav from "../BlogNav/index";
import BlogPostBySlug from "../BlogPostBySlug/index";
import BlogPostsByTopic from '../BlogPostsByTopic/index';

function Blog() {
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={2} xl={2}>
        <BlogNav />
      </Col>
      <Col xs={12} sm={12} md={12} lg={10} xl={10}>
        <Switch>
          <Route path={`/blog/topics/:topic`}>
            <BlogPostsByTopic />
          </Route>
          <Route path={`/blog/archive`}>
            <BlogPostsArchive />
          </Route>
          <Route path={`/blog/topics`}>
            <BlogTopics />
          </Route>
          <Route path={`/blog/posts/:slug`}>
            <BlogPostBySlug />
          </Route>
          <Route exact path={`/blog`}>
            <BlogPosts />
          </Route>
        </Switch>
      </Col>
    </Row>
  );
}

export default Blog;
