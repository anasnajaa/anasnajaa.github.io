import React from "react";
import { Form } from "react-bootstrap";

export default () => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Service Required</Form.Label>
        <Form.Control as="select">
          <option>Project Development</option>
          <option>General IT Support</option>
          <option>Programming Training</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Request Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
};
