import React from "react";
import { useParams } from "react-router-dom";

function BlogPostBySlug() {
  let { slug } = useParams();

  return (
    <div>
      <h3>{slug}</h3>
    </div>
  );
}

export default BlogPostBySlug;