import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import EnhanceTryIt from "./EnhanceTryIt";
import Button from "theme/ui/atoms/Button";

import "./TryIt.scss";
import SelectStore from "./SelectStore";

const steps = ["When", "Where", "Why"];

let step = ({
  currentStep,
  gotoStepNumber,
  tryItState,
  setTryItState,
  getStepIndex,
  setStepIsFilled
}) => {
  switch (currentStep) {
    case steps[0]:
      return (
        <SelectStore
          currentStep={currentStep}
          gotoStepNumber={gotoStepNumber}
          address={tryItState.address}
          setTryItState={setTryItState}
          getStepIndex={getStepIndex}
          setStepIsFilled={setStepIsFilled}
        />
      );
    case steps[1]:
      return (
        <Fragment>
          <SelectStore getStepIndex={getStepIndex} collapsed />Work In Progress
        </Fragment>
      );
    case steps[2]:
      return <div>Work In Progress</div>;
    default:
      return null;
  }
};

let TryIt = ({
  currentStep,
  gotoStepNumber,
  tryItState,
  setTryItState,
  getStepIndex,
  stepIsFilled,
  setStepIsFilled,
  displayError,
  setDisplayError
}) => {
  return (
    <div className="try-it">
      <div className="try-it__header">
        <div className="try-it__header__title">Try it in our store</div>
        <div className="try-it__header__steps-count">{`Step ${getStepIndex() +
          1}/${steps.length}`}</div>
      </div>
      {step({
        currentStep,
        gotoStepNumber,
        tryItState,
        setTryItState,
        getStepIndex,
        setStepIsFilled
      })}
      <div className="try-it__footer">
        <Button
          onClick={() => {
            if (stepIsFilled) {
              gotoStepNumber(getStepIndex() + 1);
            } else {
              setDisplayError(true);
            }
          }}
          type="dark"
        >{`Step ${getStepIndex() + 2} : `}</Button>
        <div
          className={`try-it__footer__error${
            displayError ? "--displayed" : ""
          }`}
        >
          You must fill the current form to be able to go further
        </div>
      </div>
    </div>
  );
};

TryIt.propTypes = { currentStep: PropTypes.string.isRequired };

export default compose(EnhanceTryIt(steps))(TryIt);
