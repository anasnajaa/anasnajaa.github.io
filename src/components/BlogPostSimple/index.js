import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import Moment from "react-moment";
import { LinkContainer } from "react-router-bootstrap";
import { TagsBuilder } from "../TagsUtility/index";

const BlogPostSimple = ({ post }) => {
  return (
    <Card className="mb-2">
      <LinkContainer className="cursor-pointer" to={`/blog/posts/${post.slug}`}>
        <Card.Img variant="top" src={post.feature_image} />
      </LinkContainer>
      <LinkContainer className="cursor-pointer" to={`/blog/posts/${post.slug}`}>
        <Card.Body className="pb-0">
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  <Moment
                    date={post.published_at}
                    format="DD/MM/YYYY hh:mm A"
                  />
                </Tooltip>
              }
            >
              <Moment date={post.published_at} fromNow />
            </OverlayTrigger>
          </Card.Subtitle>
          <Card.Text>{post.custom_excerpt}</Card.Text>
        </Card.Body>
      </LinkContainer>
      <TagsBuilder tags={post.tags} />
    </Card>
  );
};

export default BlogPostSimple;
