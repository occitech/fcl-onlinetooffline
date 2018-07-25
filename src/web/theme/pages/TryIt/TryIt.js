import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import EnhanceTryIt from "./EnhanceTryIt";
import Button from "theme/ui/atoms/Button";
import TransitionOnScroll from "theme/ui/molecules/TransitionOnScroll";

import "./TryIt.scss";
import SelectStore from "./SelectStore";
import SelectDate from "./SelectDate";
import Reinsurance from "./Reinsurance";
import Validation from "./Validation";

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
  {
    name: "Validation",
    renderStep: props => <Validation tryItState={props.tryItState} />
  }
];

const nextStepButtonTitle = ({ steps, currentStep, setStepIsFilled }) => {
  if ("Where" === steps[currentStep].name) {
    return `Step ${currentStep + 2} : Pick a date`;
  } else if ("When" === steps[currentStep].name) {
    return `Step ${currentStep + 2} : Confirmation`;
  } else if ("Why" === steps[currentStep].name) {
    return "FINISH MY BOOKING";
  }
  if ("Validation" === steps[currentStep].name) {
    return "BACK TO HOME PAGE";
  } else {
    return `Step ${currentStep + 2}`;
  }
};

const TryIt = props => {
  return (
    <div className="try-it">
      {props.currentStep !== steps.length - 1 ? (
        <div className="try-it__header">
          <div className="try-it__header__title">Try it in our store</div>
          <div className="try-it__header__steps-count">{`Step ${props.currentStep +
            1}/${steps.length}`}</div>
        </div>
      ) : null}
      {steps[props.currentStep].renderStep(props)}
      <TransitionOnScroll type="fade-in-top" delay={0.2} duration={0.5}>
        <div className="try-it__footer">
          <Button
            onClick={() => {
              if (props.stepIsFilled) {
                props.gotoStepNumber(props.currentStep + 1);
              } else if (steps[props.currentStep].name === "Validation") {
                props.history.push("/");
              } else {
                props.setDisplayError(true);
              }
            }}
            type="dark"
          >
            {nextStepButtonTitle({ steps, currentStep: props.currentStep })}
          </Button>
          <div
            className={`try-it__footer__error${
              props.displayError ? "--displayed" : ""
            }`}
          >
            You must fill the current form to be able to go further
          </div>
        </div>
      </TransitionOnScroll>
    </div>
  );
};

TryIt.propTypes = { currentStep: PropTypes.number.isRequired };

export default compose(EnhanceTryIt(steps))(TryIt);
