import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <span>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
      className="mr-2"
    />
    Loading, please wait...
        </span>
    )
};

export default Loading;