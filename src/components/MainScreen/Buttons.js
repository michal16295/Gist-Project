import React from "react";
import { Button } from "semantic-ui-react";

const Buttons = ({
  activeStep,
  steps,
  handleBack,
  handleNext,
  handleSubmit,
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      {activeStep < steps.length - 1 && activeStep !== 0 && (
        <>
          <Button onClick={handleBack} secondary>
            Back
          </Button>
          {activeStep === steps.length - 2 ? (
            <Button className="primary-button" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button onClick={handleNext} className="primary-button">
              Next
            </Button>
          )}
        </>
      )}
      {activeStep === 0 && (
        <Button className="primary-button" onClick={handleNext}>
          Let's start
        </Button>
      )}
    </div>
  );
};
export default Buttons;
