import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import EnhanceTryIt from "./EnhanceTryIt";
import Button from "theme/ui/atoms/Button";

import "./TryIt.scss";
import SelectStore from "./SelectStore";
import SelectDate from "./SelectDate";
import Reinsurance from "./Reinsurance";

const steps = [
  {
    name: "Where",
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
    name: "When",
    renderStep: props => (
      <Fragment>
        <SelectStore
          currentStep={props.currentStep}
          getStepIndex={props.getStepIndex}
          collapsed
        />
        <SelectDate
          currentStep={props.currentStep}
          setTryItState={props.setTryItState}
          getStepIndex={props.getStepIndex}
          setStepIsFilled={props.setStepIsFilled}
        />
      </Fragment>
    )
  },
  {
    name: "Why",
    renderStep: props => (
      <Fragment>
        <SelectStore
          currentStep={props.currentStep}
          getStepIndex={props.getStepIndex}
          collapsed
        />
        <SelectDate
          currentStep={props.currentStep}
          getStepIndex={props.getStepIndex}
          collapsed
        />
        <Reinsurance
          setStepIsFilled={props.setStepIsFilled}
          currentStep={props.currentStep}
          getStepIndex={props.getStepIndex}
        />
      </Fragment>
    )
  },
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
