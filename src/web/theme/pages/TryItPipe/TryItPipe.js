import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import EnhanceTryItPipe from "./EnhanceTryItPipe";

const steps = ["When", "Where", "Why"];

const TryItPipe = ({ currentStep }) => {
  switch (currentStep) {
    case steps[0]:
      return <div>Work In Progress</div>;
    case steps[1]:
      return <div>Work In Progress</div>;
    case steps[2]:
      return <div>Work In Progress</div>;
    default:
      return null;
  }
};

TryItPipe.propTypes = { currentStep: PropTypes.string.isRequired };

export default compose(EnhanceTryItPipe(steps))(TryItPipe);
