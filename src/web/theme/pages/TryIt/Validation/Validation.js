import React from "react";
import "./Validation.scss";
import validation from "./Validation.png";

const getMonthName = MonthNumber => {
  switch (MonthNumber) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
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
      <div className="validation__pic">
        <img src={validation} />
      </div>
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
        Our team will prepare anything. Just come, test your guitar and take
        your final decision. See you soon !
      </div>
    </div>
  );
};

Validation.propTypes = {};

export default Validation;
