import React, { useEffect, useReducer } from "react";
import { Row, Col, Button } from "react-bootstrap";

import { Stepper } from "../Stepper/index";
import FormInfo from "./formInfo";
import FormValidate from "./formValidate";

const initialState = {
  serviceRequestId: "",
  name: "",
  email: "",
  mobile: "",
  description: "",
  serviceID: "",
  activeStep: 1,
  isNextDisabled: true,
};

function reducerServiceForm(state, action) {
  switch (action.type) {
    case "nextStep":
      let newState = { ...state };
      newState.activeStep += 1;
      return newState;
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default () => {
  const [serviceFormState, dispatchServiceForm] = useReducer(
    reducerServiceForm,
    initialState
  );
  const steps = [{ title: "" }, { title: "" }, { title: "" }];

  useEffect(() => {}, []);

  const handleOnClickNext = () => {
    dispatchServiceForm({ type: "nextStep" });
  };

  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={2} xl={2} />
      <Col xs={12} sm={12} md={12} lg={8} xl={8}>
        <Stepper
          showNumber={false}
          steps={steps}
          activeStep={serviceFormState.activeStep}
        />
        <Row>
          <Col xs={12}>
            {serviceFormState.activeStep === 1 && <FormValidate dispatch={dispatchServiceForm} />}
            {serviceFormState.activeStep === 2 && <FormInfo dispatch={dispatchServiceForm} />}
            {serviceFormState.activeStep === 3 && <>All Done!</>}
          </Col>
          <Col xs={12}>
            {serviceFormState.activeStep !== 3 && (
              <Button
                variant="success"
                onClick={handleOnClickNext}
                disabled={serviceFormState.isNextDisabled}
              >
                Next
              </Button>
            )}
          </Col>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={12} lg={2} xl={2} />
    </Row>
  );
};
