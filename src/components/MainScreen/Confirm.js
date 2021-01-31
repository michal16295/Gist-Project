import React from "react";
import useVisible from "../../hooks/useVisible.js";
import { Transition } from "semantic-ui-react";

const Confirm = ({ values }) => {
  const visible = useVisible();
  return (
    <Transition visible={visible} animation="scale" duration={600}>
      <div className="confirm-container">
        <label className="confirm-heading">Age</label>
        <p className="confirm-text">{values.age}</p>
        <label className="confirm-heading">Operation</label>
        <p className="confirm-text">{values.operation}</p>
        <label className="confirm-heading">Gender</label>
        <p className="confirm-text">{values.gender}</p>
        <label className="confirm-heading">Language</label>
        <p className="confirm-text">{values.language}</p>
      </div>
    </Transition>
  );
};
export default Confirm;
