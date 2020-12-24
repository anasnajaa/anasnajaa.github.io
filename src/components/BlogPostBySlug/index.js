import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { getPostBySlug } from "../../api/blog";
import Loading from "../Loading/index";
import Moment from "react-moment";
import { TagsBuilder } from "../TagsUtility/index";
import Alert from '../Alert/index';
import Prism from 'prismjs';
import "./style.scss";

const BlogPostBySlug = ({ match, location, history }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState(null);
  const [loadCommentsEnabled, setLoadingCommentsEnabled] = useState(true);
  const loadComments = () => {
    setLoadingCommentsEnabled(false);
    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = post.id;
    };

    const script = document.createElement("script");
    script.src = "https://hecked-blog.disqus.com/embed.js";
    script.setAttribute("data-timestamp", Date.now().toString());
    document.body.appendChild(script);
  };

  const getBlogPost = async (slug) => {
    try {
      const response = await getPostBySlug(slug);
      setError(null);
      setPost({ ...response });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoaded(true);
      Prism.highlightAll();
    }
  };

  useEffect(() => {
    getBlogPost(match.params.slug);
  }, [match.params.slug]);

  if (error) {
    return (
      <Row>
        <Col className="text-center">
          <Alert title="API Error" message={error.message} type="danger" />
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
            Published <Moment date={post.published_at} fromNow />
          </small>
        </OverlayTrigger>
        <br />
        <small>
          <i>Tags </i>
        </small>
        <TagsBuilder tags={post.tags} />
      </Col>
      <Col xs={12}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Col>
      <Col xs={12} className="mt-3 text-center">
        {loadCommentsEnabled && (
          <Button
            variant="secondary"
            onClick={() => {
              loadComments();
            }}
          >
            Show Comments
          </Button>
        )}
        {!loadCommentsEnabled && (
          <>
            <hr />
            <div id="disqus_thread"></div>
          </>
        )}
      </Col>
    </Row>
  );
};

export default withRouter(BlogPostBySlug);
