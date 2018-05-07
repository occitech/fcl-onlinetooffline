import React from "react";
import Step from "../Step";

const SelectDate = ({
  step = "When",
  currentStep,
  gotoStepNumber,
  tryItState,
  setTryItState,
  getStepIndex,
  collapsed = false
}) => {
  return (
    <div className="select-date">
      <Step
        step={step}
        currentStep={currentStep}
        stepIndex={getStepIndex(step) + 1}
        actionDescription="Select a date on the calendar"
        collapsed={collapsed}
      >
        <div className="select-date__calendar">CALENDAR</div>
      </Step>
    </div>
  );
};

export default SelectDate;
