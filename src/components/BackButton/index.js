import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
export default () => {
    let history = useHistory();
    return (
        <Button onClick={() => history.goBack()}>Back</Button>
    );
};