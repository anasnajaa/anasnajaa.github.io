import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Captcha from "../Captcha/index";

export default ({ dispatch }) => {
    const [isLoading, setLoading] = useState(false);

    const onCaptchaChanged = (value) => {
        console.log(value);
      };
    
      const onFormSubmitted = () => {
        setLoading(true);
      };

    return (
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder="12345678" />
        </Form.Group>
        <Form.Group className="text-center">
          <Captcha
            onChange={(v) => {
              onCaptchaChanged(v);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Button
            variant="info"
            onClick={() => {
              onFormSubmitted();
            }}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Verification Code"}
          </Button>
        </Form.Group>
      </Form>
    )
}
