import { compose, withState, withHandlers } from "recompose";

const EnhanceTryIt = steps => {
  return compose(
    withState("stepIsFilled", "setStepIsFilled", false),
    withState("displayError", "setDisplayError", false),
    withState("tryItState", "setTryItState", { address: "" }),
    withState(
      "currentStep",
      "setCurrentStep",
      props => (props.currentStep ? props.currentStep : 0)
    ),
    withHandlers({
      setTryItState: props => stateOverride => {
        props.setTryItState({
          ...props.tryItState,
          ...stateOverride
        });
      }
    }),
    withHandlers({
      getStepIndex: props => name =>
        steps.findIndex(step => step.name === name),
      gotoStepNumber: props => index => {
        props.setStepIsFilled(false);
        props.setDisplayError(false);
        if (steps[index]) {
          props.setCurrentStep(index);
        }
      }
    })
  );
};

export default EnhanceTryIt;
