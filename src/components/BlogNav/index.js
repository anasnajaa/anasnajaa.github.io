import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";
import { useMediaQuery } from 'react-responsive';

const BlogNav = () => {
  //let { path } = useRouteMatch();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <Row>
        <Col xs={12} className="mb-3">
          <Nav className={isTabletOrMobile?"":"flex-column"} >
            <Nav.Item>
              <IndexLinkContainer to={`/blog`}>
                <Nav.Link>Blog</Nav.Link>
              </IndexLinkContainer>
            </Nav.Item>
            <Nav.Item>
              <IndexLinkContainer to={`/blog/topics`}>
                <Nav.Link>Topics</Nav.Link>
              </IndexLinkContainer>
            </Nav.Item>
            <Nav.Item>
              <IndexLinkContainer to={`/blog/archive`}>
                <Nav.Link>Archive</Nav.Link>
              </IndexLinkContainer>
            </Nav.Item>
          </Nav>
        </Col>
    </Row>
  );
};

export default BlogNav;
