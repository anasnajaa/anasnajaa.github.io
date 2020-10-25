import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Captcha from '../Captcha/index';

export default () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {

    }
  }, [isLoading]);

  const onCaptchaChanged = (value) => {
    console.log(value);
  };

  const onFormSubmitted = () => {
    setLoading(true);
  }

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Service Required</Form.Label>
        <Form.Control as="select">
          <option>Web / App Development</option>
          <option>General IT Support</option>
          <option>Programming Training</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Request Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group>
        <Captcha onChange={(v)=>{onCaptchaChanged(v)}} />
      </Form.Group>
      <Form.Group>
        <Button 
        variant="info" 
        onClick={()=>{onFormSubmitted()}}
        disabled={isLoading}
        >{isLoading ? 'Loading…' : 'Submit'}</Button>
      </Form.Group>
    </Form>
  );
};
