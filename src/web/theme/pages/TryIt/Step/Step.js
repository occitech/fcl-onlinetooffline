import React, { Fragment } from "react";
import "./Step.scss";

const Step = ({
  step,
  currentStep,
  stepIndex,
  actionDescription,
  collapsed,
  children
}) => {
  const stepTitleClasses = `step__title ${
    currentStep === step ? "" : "step__title--validated"
  }`;

  return (
    <Fragment>
      <div className={stepTitleClasses}>
        <span className="step__title__pins">{stepIndex}</span>
        <span className="step__title__content">{actionDescription}</span>
      </div>
      {collapsed ? null : children}
    </Fragment>
  );
};

export default Step;
