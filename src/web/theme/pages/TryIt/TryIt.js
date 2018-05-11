import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import EnhanceTryIt from "./EnhanceTryIt";
import Button from "theme/ui/atoms/Button";

import "./TryIt.scss";
import SelectStore from "./SelectStore";

const steps = [
  {
    name: "When",
    renderStep: props => (
      <SelectStore
        currentStep={props.currentStep}
        gotoStepNumber={props.gotoStepNumber}
        address={props.tryItState.address}
        setTryItState={props.setTryItState}
        getStepIndex={props.getStepIndex}
        setStepIsFilled={props.setStepIsFilled}
      />
    )
  },
  {
    name: "Where",
    renderStep: props => (
      <Fragment>
        <SelectStore getStepIndex={props.getStepIndex} collapsed />Work In
        Progress
      </Fragment>
    )
  },
  { name: "Why", renderStep: () => <div>Work In Progress</div> }
];

const TryIt = props => {
  return (
    <div className="try-it">
      <div className="try-it__header">
        <div className="try-it__header__title">Try it in our store</div>
        <div className="try-it__header__steps-count">{`Step ${props.currentStep +
          1}/${steps.length}`}</div>
      </div>
      {steps[props.currentStep].renderStep(props)}
      <div className="try-it__footer">
        <Button
          onClick={() => {
            if (props.stepIsFilled) {
              props.gotoStepNumber(props.currentStep + 1);
            } else {
              props.setDisplayError(true);
            }
          }}
          type="dark"
        >{`Step ${props.currentStep + 2} : `}</Button>
        <div
          className={`try-it__footer__error${
            props.displayError ? "--displayed" : ""
          }`}
        >
          You must fill the current form to be able to go further
        </div>
      </div>
    </div>
  );
};

TryIt.propTypes = { currentStep: PropTypes.number.isRequired };

export default compose(EnhanceTryIt(steps))(TryIt);
