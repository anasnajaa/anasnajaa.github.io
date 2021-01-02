import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";

function PlayGround() {
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <IndexLinkContainer to={`/playground/covid`}>
          <Nav.Link>Covid Cases</Nav.Link>
        </IndexLinkContainer>
      </Col>
    </Row>
  );
}

export default PlayGround;
