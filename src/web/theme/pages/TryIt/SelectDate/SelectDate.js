import React from "react";
import PropTypes from "prop-types";
import EnhanceSelectDate from "./EnhanceSelectDate";
import Step from "../Step";
import "react-dates/initialize";
import momentPropTypes from "react-moment-proptypes";
import { DayPickerSingleDateController } from "react-dates";

import Transition from "theme/ui/molecules/Transition";
import "react-dates/lib/css/_datepicker.css";
import "./SelectDate.scss";

const SelectDate = ({
  step = "When",
  currentStep,
  setTryItState,
  getStepIndex,
  setStepIsFilled,
  collapsed = false,
  setDate,
  date,
  setFocused,
  focused
}) => {
  return (
    <div className="select-date">
      <Step
        currentStep={currentStep}
        stepIndex={getStepIndex(step)}
        actionDescription="Select a date on the calendar"
        collapsed={collapsed}
      >
        <Transition type="fadeInTop-half-delayed">
          <div className="select-date__calendar">
            <DayPickerSingleDateController
              date={date}
              onDateChange={date => {
                setStepIsFilled(true);
                setDate(date);
                setTryItState({ date: date._d });
              }}
              focused={true}
              onFocusChange={() => setFocused(true)}
              daySize={50}
              numberOfMonths={1}
            />
          </div>
        </Transition>
      </Step>
    </div>
  );
};

SelectDate.propTypes = {
  step: PropTypes.string,
  currentStep: PropTypes.number,
  getStepIndex: PropTypes.func,
  setStepIsFilled: PropTypes.func,
  collapsed: PropTypes.bool,
  setTryItState: PropTypes.func,
  setDate: PropTypes.func,
  date: momentPropTypes.momentObj,
  setFocused: PropTypes.func,
  focused: PropTypes.bool
};

export default EnhanceSelectDate(SelectDate);
