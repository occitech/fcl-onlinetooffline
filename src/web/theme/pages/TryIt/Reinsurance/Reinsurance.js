import React from "react";
import Step from "../Step";
import PropTypes from "prop-types";
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
        <div>
          Please be sure you have selected the right store and date before
          booking the appointment.
        </div>
        <div>
          Last little action required from you: accept our
          <strong> Terms & Conditions</strong>. Then you’re good to go!
        </div>
        <div className="reinsurance__content__form">
          <input
            onChange={setTermConditionChecked}
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

Reinsurance.propTypes = {
  step: PropTypes.string,
  currentStep: PropTypes.number,
  getStepIndex: PropTypes.func,
  setStepIsFilled: PropTypes.func,
  collapsed: PropTypes.bool,
  setTermConditionChecked: PropTypes.func,
  termConditionChecked: PropTypes.bool
};

export default compose(
  withState("termConditionChecked", "setTermConditionChecked", false),
  withHandlers({
    setTermConditionChecked: props => () => {
      props.setStepIsFilled(!props.termConditionChecked);
      props.setTermConditionChecked(!props.termConditionChecked);
    }
  })
)(Reinsurance);
