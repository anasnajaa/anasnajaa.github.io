import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { getPostBySlug } from "../../api/blog";
import Loading from "../Loading/index";
import Moment from "react-moment";
import { TagsBuilder } from '../TagsUtility/index';

const BlogPostBySlug = ({ match, location, history }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState(null);

  // width: 100%;
  // margin: 20px 0;
  //   function loadComments(post: PostType) {
  //     setEnableLoadComments(false);
  //     (window as any).disqus_config = function () {
  //         this.page.url = window.location.href;
  //         this.page.identifier = post.id;
  //     };

  //     const script = document.createElement('script');
  //     script.src = 'https://hecked-blog.disqus.com/embed.js';
  //     script.setAttribute('data-timestamp', Date.now().toString());
  //     document.body.appendChild(script);
  // }

  const getBlogPost = async (slug) => {
    try {
      const response = await getPostBySlug(slug);
      console.log(response);
      setError(null);
      setPost({ ...response });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    getBlogPost(match.params.slug);
  }, [match.params.slug]);

  if (error) {
    return (
      <Row>
        <Col className="text-center">
          <div>Error: {error.message}</div>
        </Col>
      </Row>
    );
  }

  if (!isLoaded) {
    return (
      <Row>
        <Col className="text-center">
          <Loading />
        </Col>
      </Row>
    );
  }

  return (
    <Row>
      <Col className="mb-4">
        <h1>
          <b>{post.title}</b>
        </h1>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                <Moment date={post.published_at} format="DD/MM/YYYY hh:mm A" />
              </Tooltip>
            }
          >
            <small>
            Published  <Moment date={post.published_at} fromNow />
            </small>
          </OverlayTrigger><br/>
        <small><i>Tags </i></small><TagsBuilder tags={post.tags} />
      </Col>
      <Col xs={12}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Col>
    </Row>
  );
};

export default withRouter(BlogPostBySlug);
