import Welcome from "../components/MainScreen/Welcome";
import Input from "../components/MainScreen/Input";
import Confirm from "../components/MainScreen/Confirm";
import Success from "../components/MainScreen/Succees";

export const getSteps = () => {
  return ["WELCOME", "FORM", "CONFIRM", "SUCCESS"];
};

export const getStepContent = (
  stepIndex,
  values,
  handleChange,
  handleSelect
) => {
  switch (stepIndex) {
    case 0:
      return <Welcome />;
    case 1:
      return (
        <Input
          values={values}
          handleChange={handleChange}
          handleSelect={handleSelect}
        />
      );
    case 2:
      return <Confirm values={values} />;
    case 3:
      return <Success />;
    default:
      return "Unknown stepIndex";
  }
};
export const getIcon = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return "user circle outline";
    case 1:
      return "address card outline";
    case 2:
      return "question";
    case 3:
      return "winner";
    default:
      return "Unknown stepIndex";
  }
};

export const validateForm = (activeStep, formData) => {
  if (
    activeStep === 1 &&
    (formData.operation === "" ||
      formData.gender === "" ||
      formData.language === "" ||
      formData.age === "")
  ) {
    return false;
  }
  return true;
};
