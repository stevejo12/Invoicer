import React from "react";
import { Days } from "../../../constants/Date";

import "./Calendar.scss";

interface IProps {
  show: boolean;
  name: string;
  dateSelected: Date;
  onClose: () => void;
}

const Calendar = ({ name, show, onClose, dateSelected }: IProps) => {
  // usememo dependent on Change dateselected
  // Creating rows of dates of that particular month
  // logic down below
  // get month and then which day is first of that month
  // check the max days in that particular month (use helper function (send year and month))
  // first row include the previous month if it is not on sunday
  // last row include the next month if it is not on saturday
  // highlight when it is the date selected
  //

  return (
    <div className="calendar__absolute">
      <div
        className={`calendar__wrapper 
          ${show ? "show" : ""}
        `}
        onClick={() => onClose()}
      >
        <div className="calendar__header">
          <div className="calendar__headerMonthChange">
            <div className="calendar__headerArrow">&#60;</div>
            <div className="calendar__headerMonthYear">August 2022</div>
            <div>&#62;</div>
          </div>
          <div className="calendar__headerDayOfTheWeek">
            {Days.map((day, index) => (
              <div className="calendar__day" key={index}>
                {day.substring(0, 3)}
              </div>
            ))}
          </div>
        </div>
        <div className="calendar__dates"></div>
      </div>
    </div>
  );
};

export default Calendar;
