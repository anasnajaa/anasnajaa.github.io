import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isRequestColdBoot, setIsRequestColdBoot] = useState(false);

    setTimeout(() => {
        if(isMounted){
            setIsRequestColdBoot(true);
        }
    }, 1200);

    useEffect(() => {
        return () => {
            setIsMounted(false);
        };
    }, []);

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