import React from "react";
import { useSelector } from "react-redux";
import { Form } from "semantic-ui-react";
import { Select } from "semantic-ui-react";
import useVisible from "../../hooks/useVisible.js";
import { Transition } from "semantic-ui-react";

const Input = ({ values, handleChange, handleSelect }) => {
  const { data } = useSelector((state) => state.formData);
  const visible = useVisible();
  return (
    <Transition visible={visible} animation="scale" duration={600}>
      <div className="welcome-container">
        <Form>
          <Form.Field>
            <input
              className="input-field"
              placeholder="Age"
              value={values.age}
              name="age"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <input
              className="input-field"
              placeholder="Operation"
              value={values.operation}
              name="operation"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Select
              className="input-field"
              placeholder="Select your Gender"
              options={data.genders}
              onChange={handleSelect}
              value={values.gender}
              name="gender"
            />
          </Form.Field>
          <Form.Field>
            <Select
              onChange={handleSelect}
              className="input-field"
              placeholder="Select your Language"
              options={data.languages}
              value={values.language}
              name="language"
            />
          </Form.Field>
        </Form>
      </div>
    </Transition>
  );
};
export default Input;
