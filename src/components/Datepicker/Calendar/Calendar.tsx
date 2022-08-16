import React from "react";

import "./Calendar.scss";

interface IProps {
  show: boolean;
  name: string;
  onClose: () => void;
}

const Calendar = ({ name, show, onClose }: IProps) => {
  return (
    <div
      className={`calendar__wrapper 
        ${show ? "show" : ""}
      `}
      onClick={() => onClose()}
    >
      Calendar
    </div>
  );
};

export default Calendar;
