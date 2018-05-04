import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./SelectStore.scss";

const SelectStore = ({
  currentStep,
  gotoStepNumber,
  tryItState,
  setTryItState,
  getStepIndex,
  collapsed = false
}) => {
  return (
    <div className="select-store">
      <div className="select-store__title">
        <span className="select-store__title__pins">
          {getStepIndex("When") + 1}
        </span>
        <span className="select-store__title__content">
          Select a store location on the map
        </span>
      </div>
      {!collapsed ? (
        <Fragment>
          <div className="select-store__searchbar">
            <input />
          </div>
          <div className="select-store__map">Map</div>
        </Fragment>
      ) : null}
    </div>
  );
};

SelectStore.propTypes = { collapsed: PropTypes.bool };

export default SelectStore;
