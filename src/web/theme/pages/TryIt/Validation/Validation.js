import React from "react";
import "./Validation.scss";
import validation from "./Validation.png";
import TransitionOnScroll from "theme/ui/molecules/TransitionOnScroll";

import PropTypes from "prop-types";

const getMonthName = MonthNumber => {
  switch (MonthNumber) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";

    default:
      console.warning(
        "please provide a correct month number to get a month name"
      );
  }
};
const getDayName = dayNumber => {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      console.warning("please provide a correct day number to get a day name");
  }
};

const Validation = ({ step = "Validation", tryItState }) => {
  return (
    <div className="validation">
      <TransitionOnScroll type="fade-in-top" delay={0.5} duration={0.5}>
        <div className="validation__pic">
          <img alt="validation" src={validation} />
        </div>
      </TransitionOnScroll>
      <TransitionOnScroll type="fade-in-top" delay={0.7} duration={0.5}>
        <div className="validation__confirmation">
          {`We confirm your appointment with us on`}
          <strong>{` ${getDayName(tryItState.date.getDay())}, ${getMonthName(
            tryItState.date.getMonth()
          )} ${tryItState.date.getDate()}th`}</strong>
          {` in our store located at the following address :`}
          <div className="validation__confirmation__address">
            <strong> {tryItState.address} </strong>
          </div>
        </div>
        <div>
          Our team will prepare everything. Just come, test your guitar and take
          your final decision. See you soon !
        </div>
      </TransitionOnScroll>
    </div>
  );
};

Validation.propTypes = { step: PropTypes.string, tryItState: PropTypes.object };

export default Validation;
