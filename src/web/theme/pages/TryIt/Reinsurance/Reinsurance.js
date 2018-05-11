import React from "react";
import Step from "../Step";
import { compose, withState, withHandlers } from "recompose";
import "./Reinsurance.scss";

const Reinsurance = ({
  step = "Why",
  currentStep,
  getStepIndex,
  setStepIsFilled,
  collapsed = false,
  setTermConditionChecked,
  termConditionChecked
}) => {
  return (
    <Step
      currentStep={currentStep}
      stepIndex={getStepIndex(step)}
      actionDescription="A little confirmation"
      collapsed={collapsed}
    >
      <div className="reinsurance__content">
        <span>
          Please be sure you have selected the right store and date before
          booking the appointment.
        </span>
        <span>
          Last little action required from you : accept our
          <strong> Terms & Conditions</strong>. Then you’re good to go !
        </span>
        <div className="reinsurance__content__form">
          <input
            onChange={() => {
              setTermConditionChecked();
            }}
            type="checkbox"
            id="termCondition"
          />
          <label htmlFor="termCondition">
            I agree with the Terms & Conditions.
          </label>
        </div>
      </div>
    </Step>
  );
};

Reinsurance.propTypes = {};

export default compose(
  withState("termConditionChecked", "setTermConditionChecked", false),
  withHandlers({
    setTermConditionChecked: props => () => {
      props.setStepIsFilled(!props.termConditionChecked);
      props.setTermConditionChecked(!props.termConditionChecked);
    }
  })
)(Reinsurance);
