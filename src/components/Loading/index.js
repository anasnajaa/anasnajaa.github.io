import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    const [isRequestColdBoot, setIsRequestColdBoot] = useState(false);

    setTimeout(() => {
        setIsRequestColdBoot(true)
    }, 1200);

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
    {isRequestColdBoot &&
    <div><br/>Server is starting up from cold boot, this might take a while...</div>}
        </span>
    )
};

export default Loading;