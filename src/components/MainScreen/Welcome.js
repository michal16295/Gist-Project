import React from "react";
import { Transition } from "semantic-ui-react";
import useVisible from "../../hooks/useVisible.js";

const Welcome = () => {
  const visible = useVisible();
  return (
    <Transition visible={visible} animation="scale" duration={800}>
      <div className="welcome-container">
        <h2>WELCOME</h2>
        <h3>Let's create you profile</h3>
      </div>
    </Transition>
  );
};
export default Welcome;
