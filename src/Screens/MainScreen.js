import React, { useState, useEffect } from "react";
import { Icon, Segment, Step } from "semantic-ui-react";
import { getFormData } from "../store/formData";
import { createUser } from "../store/user";
import logo from "../assets/logo.jpeg";
import { useDispatch } from "react-redux";
import {
  getSteps,
  getIcon,
  getStepContent,
  validateForm,
} from "../services/mainScreen.service";
import Buttons from "../components/MainScreen/Buttons";
import ErrorMessage from "../components/MainScreen/ErrorMessage";

const MainScreen = () => {
  const dispatch = useDispatch();
  const steps = getSteps();
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    operation: "",
    gender: "",
    language: "",
    age: "",
  });

  useEffect(() => {
    dispatch(getFormData());
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e, data) => {
    setFormData({
      ...formData,
      [data.name]: data.value,
    });
  };

  const handleNext = () => {
    if (!validateForm(formData)) {
      setError("All fields are required");
      return;
    }
    setError("");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setError("");
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(formData));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className="container">
      <Step.Group widths="seven" attached="top">
        {steps.map((label, index) => (
          <Step
            completed={index < activeStep}
            active={index === activeStep}
            key={label}
          >
            <Icon name={getIcon(index)} />
            <Step.Content>
              <Step.Title>{label}</Step.Title>
            </Step.Content>
          </Step>
        ))}
      </Step.Group>
      <Segment attached>
        <div style={{ textAlign: "center" }}>
          <img className="logo" alt="logo" src={logo} />
        </div>
        {getStepContent(activeStep, formData, handleChange, handleSelect)}
        <ErrorMessage visible={error !== ""} error={error} />
        <Buttons
          activeStep={activeStep}
          steps={steps}
          handleBack={handleBack}
          handleSubmit={handleSubmit}
          handleNext={handleNext}
        />
      </Segment>
    </div>
  );
};
export default MainScreen;
