import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

import BlogPostBySlug from '../BlogPostBySlug/index';
import BlogPosts from '../BlogPosts/index';

function Blog() {
    let { path } = useRouteMatch();
  
    return (
      <div>  
        <Switch>
          <Route exact path={path}>
            <BlogPosts/>
          </Route>
          <Route path={`${path}/post/:slug`}>
            <BlogPostBySlug />
          </Route>
        </Switch>
      </div>
    );
  }

  export default Blog;