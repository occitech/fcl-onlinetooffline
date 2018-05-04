import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import EnhanceTryItPipe from "./EnhanceTryItPipe";
import Button from "theme/ui/atoms/Button";
const steps = ["When", "Where", "Why"];

let step = ({ currentStep, gotoStepNumber, tryItState, setTryItState }) => {
  switch (currentStep) {
    case steps[0]:
      return <div>Work In Progress</div>;
    case steps[1]:
      return <div>Work In Progress</div>;
    case steps[2]:
      return <div>Work In Progress</div>;
    default:
      return null;
  }
};

let TryItPipe = ({
  currentStep,
  gotoStepNumber,
  tryItState,
  setTryItState,
  getCurrentStepIndex
}) => {
  return (
    <div className="try-it">
      <div className="try-it__header">
        <div className="try-it__header__title">Try it in our store</div>
        <div className="try-it__header__steps-count">{`Step ${getCurrentStepIndex() +
          1}/${steps.length}`}</div>
      </div>
      {step({
        currentStep,
        gotoStepNumber,
        tryItState,
        setTryItState,
        getCurrentStepIndex
      })}
      <div className="try-it__footer">
        <Button
          onClick={() => {
            gotoStepNumber(getCurrentStepIndex() + 1);
          }}
          type="dark"
        >{`Step ${getCurrentStepIndex() + 2} : `}</Button>
      </div>
    </div>
  );
};

TryItPipe.propTypes = { currentStep: PropTypes.string.isRequired };

export default compose(EnhanceTryItPipe(steps))(TryItPipe);
