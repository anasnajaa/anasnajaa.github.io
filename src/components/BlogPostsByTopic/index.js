import React from "react";
import BlogPosts from '../BlogPosts/index';
import { useParams } from 'react-router-dom';

const BlogPostsByTopic = () => {
    const { topic } = useParams();
    return(<BlogPosts topic={topic} />);
}

export default BlogPostsByTopic;