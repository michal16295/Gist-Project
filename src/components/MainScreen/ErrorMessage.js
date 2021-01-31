import React from "react";
import { Message, Transition } from "semantic-ui-react";

const ErrorMessage = ({ visible, error }) => {
  return (
    <Transition.Group animation="zoom" duration={700}>
      {visible && (
        <Message negative>
          <Message.Header>{error}</Message.Header>
        </Message>
      )}
    </Transition.Group>
  );
};
export default ErrorMessage;
