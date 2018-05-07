import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import EnhanceTryIt from "./EnhanceTryIt";
import Button from "theme/ui/atoms/Button";

import "./TryIt.scss";
import SelectStore from "./SelectStore";
import SelectDate from "./SelectDate";

const steps = ["Where", "When", "Why"];

let step = ({
  currentStep,
  gotoStepNumber,
  tryItState,
  setTryItState,
  getStepIndex
}) => {
  switch (currentStep) {
    case steps[0]:
      return (
        <SelectStore
          currentStep={currentStep}
          gotoStepNumber={gotoStepNumber}
          tryItState={tryItState}
          setTryItState={setTryItState}
          getStepIndex={getStepIndex}
        />
      );
    case steps[1]:
      return (
        <Fragment>
          <SelectStore
            currentStep={currentStep}
            getStepIndex={getStepIndex}
            collapsed
          />
          <SelectDate
            currentStep={currentStep}
            gotoStepNumber={gotoStepNumber}
            tryItState={tryItState}
            setTryItState={setTryItState}
            getStepIndex={getStepIndex}
          />
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
  getStepIndex
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
        getStepIndex
      })}
      <div className="try-it__footer">
        <Button
          onClick={() => {
            gotoStepNumber(getStepIndex() + 1);
          }}
          type="dark"
        >{`Step ${getStepIndex() + 2} : `}</Button>
      </div>
    </div>
  );
};

TryIt.propTypes = { currentStep: PropTypes.string.isRequired };

export default compose(EnhanceTryIt(steps))(TryIt);
