import React from 'react';
import { Card, OverlayTrigger, Tooltip, Badge } from 'react-bootstrap';
import Moment from 'react-moment';
import { TagsStyleResolver } from '../TagsUtility/index';
import { LinkContainer } from "react-router-bootstrap";

const BlogPostSimple = ({post}) => {
    return (
        <Card className="mb-2">
            <Card.Img variant="top" src={post.feature_image} />
            <Card.Body className="pb-0">
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    <OverlayTrigger placement="top" overlay={
                        <Tooltip>
                            <Moment date={post.published_at} format="DD/MM/YYYY hh:mm A" />
                        </Tooltip>
                    }>
                        <Moment date={post.published_at} fromNow />
                    </OverlayTrigger>
                </Card.Subtitle>
                <Card.Text>{post.custom_excerpt}</Card.Text>
            </Card.Body>
            {post.tags.length > 0 ?
            <div style={{paddingLeft: "1.25rem"}} className="pb-2">
                <small className="text-muted">
                {post.tags.map(({name, slug, id}) => (
                    <LinkContainer key={id} to={`/blog/topic/${slug}`}>
                        <Badge className="mr-2 cursor-pointer" style={TagsStyleResolver(id)}>{name}</Badge>
                    </LinkContainer>
                ))}
                </small>
            </div> : <></>}
        </Card>
    )
};

export default BlogPostSimple;