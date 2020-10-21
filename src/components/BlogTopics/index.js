import React, { useEffect, useState } from "react";
import { ListGroup, Row, Col, Badge } from "react-bootstrap";
import { getTags } from "../../api/blog";
import Loading from "../Loading/index";
import { LinkContainer } from "react-router-bootstrap";

const BlogTopics = () => {
  const [tags, setTags] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const populateTags = async () => {
    try {
      const response = await getTags();
      setTags(response.tags);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    populateTags();
  }, []);

  if (error) {
    return (
      <Row>
        <Col>Error: {error}</Col>
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
      <Col>
        <ListGroup>
          {tags.map(({ id, description, name, slug, count }) => {
            return (
              <LinkContainer
                className="cursor-pointer"
                key={id}
                to={`/blog/topics/${slug}`}
              >
                <ListGroup.Item>
                  {name}&nbsp;&nbsp;
                  <Badge variant="light">{count.posts}</Badge><br/>
                    <small>{description}</small>
                </ListGroup.Item>
              </LinkContainer>
            );
          })}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default BlogTopics;
