import React from "react";
import { Alert } from "react-bootstrap";

export default ({title, message, type}) => {
  return (
    <Alert variant={type} dismissible>
      <Alert.Heading>{title}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};
