import React from "react";
import PropTypes from "prop-types";
import EnhanceSelectDate from "./EnhanceSelectDate";
import Step from "../Step";
import "react-dates/initialize";
import momentPropTypes from "react-moment-proptypes";
import { DayPickerSingleDateController } from "react-dates";
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
        <div className="select-date__calendar">
          <DayPickerSingleDateController
            date={date}
            onDateChange={date => {
              setStepIsFilled(true);
              setDate(date);
              setTryItState({ date: date._d });
            }}
            focused={true}
            onFocusChange={({ focused }) => setFocused(true)}
            daySize={50}
            numberOfMonths={1}
          />
        </div>
      </Step>
    </div>
  );
};

SelectDate.propTypes = {
  date: momentPropTypes.momentObj,
  focused: PropTypes.bool
};

export default EnhanceSelectDate(SelectDate);
