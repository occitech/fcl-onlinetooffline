import React, { Fragment } from "react";
import "./Step.scss";

const Step = ({
  currentStep,
  stepIndex,
  actionDescription,
  collapsed,
  children
}) => {
  const stepTitleClasses = `step__title ${
    currentStep > stepIndex ? "step__title--validated" : ""
  }`;

  return (
    <Fragment>
      <div className={stepTitleClasses}>
        <span className="step__title__pins">{stepIndex + 1}</span>
        <span className="step__title__content">{actionDescription}</span>
      </div>
      {collapsed ? null : children}
    </Fragment>
  );
};

export default Step;
