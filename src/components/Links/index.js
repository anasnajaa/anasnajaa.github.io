import React, { useEffect, useState } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { getLinks } from "../../api/main";
import Loading from "../Loading/index";

const Links = () => {
  const [links, setLinks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const populateTags = async () => {
    try {
      const response = await getLinks();
      setLinks(response.links);
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
        <Col xs="12">
        <h3>Links</h3>
        <p>Websites that I found useful that talk about many topics, mostly realted to programming.</p>
        </Col>
      <Col xs="12">
        <ListGroup>
          {links.map(({ _id, url, likes, title, tags, date_created }) => {
            return (
              <a
                key={_id}
                target="_blank"
                rel="noopener noreferrer"
                href={url}
              >
                <ListGroup.Item>
                  {url}&nbsp;&nbsp;
                </ListGroup.Item>
              </a>
            );
          })}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Links;
