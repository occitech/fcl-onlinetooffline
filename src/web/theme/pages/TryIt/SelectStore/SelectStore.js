import React from "react";
import PropTypes from "prop-types";
import Step from "../Step";
import "./SelectStore.scss";

const SelectStore = ({
  step = "Where",
  currentStep,
  gotoStepNumber,
  tryItState,
  setTryItState,
  getStepIndex,
  collapsed = false
}) => {
  return (
    <div className="select-store">
      <Step
        step={step}
        currentStep={currentStep}
        stepIndex={getStepIndex(step) + 1}
        actionDescription="Select a store location on the map"
        collapsed={collapsed}
      >
        <div className="select-store__searchbar">
          <input />
        </div>
        <div className="select-store__map">Map</div>
      </Step>
    </div>
  );
};

SelectStore.propTypes = { collapsed: PropTypes.bool };

export default SelectStore;
