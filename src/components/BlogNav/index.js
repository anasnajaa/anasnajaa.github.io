import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
import { useRouteMatch } from "react-router-dom";

const BlogNav = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <Row className="mb-3">
        <Col>
          <Nav variant="pills" defaultActiveKey={path}>
            <Nav.Item>
              <IndexLinkContainer to={path}>
                <Nav.Link>Blog</Nav.Link>
              </IndexLinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to={`${path}/archive`}>
                <Nav.Link>Archive</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to={`${path}/topics`}>
                <Nav.Link>Topics</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </>
  );
};

export default BlogNav;
