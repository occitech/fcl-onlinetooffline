import { compose, withState, withHandlers } from "recompose";

const EnhanceTryIt = steps => {
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
        props.setTryItState({
          ...props.tryItState,
          ...stateOverride
        });
      }
    }),
    withHandlers({
      getStepIndex: props => (specificStep = "current") => {
        return specificStep === "current"
          ? steps.findIndex(step => {
              return step === props.currentStep;
            })
          : steps.findIndex(step => {
              return step === specificStep;
            });
      },
      gotoStepNumber: props => index => {
        const stepCandidate = steps[index];
        if (typeof stepCandidate !== "undefined") {
          props.setCurrentStep(stepCandidate);
        }
      }
    })
  );
};

export default EnhanceTryIt;
