import React from 'react';
import {
    Link
  } from "react-router-dom";

const BlogPosts = () => {
    return (
        <>
        <h2>BLOG</h2>
        <ul>
          <li>
            <Link to={`blog/post/test-post`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`blog/post/components`}>Components</Link>
          </li>
          <li>
            <Link to={`blog/post/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
        </>
    )
};

export default BlogPosts;