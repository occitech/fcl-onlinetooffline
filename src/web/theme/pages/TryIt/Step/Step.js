import React, { Fragment } from "react";
import Transition from "theme/ui/molecules/Transition";
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
      <Transition type="fade-in-top" delay={0.5} duration={0.5}>
        <div className={stepTitleClasses}>
          <span className="step__title__pins">{stepIndex + 1}</span>
          <span className="step__title__content">{actionDescription}</span>
        </div>
      </Transition>
      {collapsed ? null : children}
    </Fragment>
  );
};

export default Step;
