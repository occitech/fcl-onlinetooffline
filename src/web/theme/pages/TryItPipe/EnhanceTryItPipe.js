import { compose, withState, withHandlers } from "recompose";

const EnhanceTryItPipe = steps => {
  const getActiveStep = (currentStep, steps) => {
    if (currentStep !== undefined) {
      return currentStep;
    } else {
      return steps[0];
    }
  };
  return compose(
    withState("tryItState", "setTryItState", {}),
    withState("currentStep", "setCurrentStep", props =>
      getActiveStep(props.currentStep, steps)
    ),
    withHandlers({
      setTryItState: props => stateOverride => {
        props.setTryItState(Object.assign({}, props.tryItState, stateOverride));
      }
    }),
    withHandlers({
      gotoStepNumber: props => index => {
        const stepCandidate = steps[index];
        if (typeof stepCandidate !== "undefined") {
          props.setCurrentStep(stepCandidate);
        }
      }
    })
  );
};

export default EnhanceTryItPipe;
