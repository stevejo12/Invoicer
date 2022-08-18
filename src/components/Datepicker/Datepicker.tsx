import React, { useState } from "react";
import Calendar from "./Calendar/Calendar";

import "./Datepicker.scss";

interface IProps {
  label: string;
  name: string;
  value: Date;
  onChange: (key: string, newValue: Date) => void;
}

const Datepicker = ({ label, name, value, onChange }: IProps) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleShowCalendar = (changeCalendarStateTo: boolean) => {
    setShowCalendar(changeCalendarStateTo);
  };

  return (
    <div className="datepicker__wrapper">
      <label className="datepicker__label">{label}</label>
      <input
        className="datepicker__inputField"
        type="text"
        value={value.toDateString()}
        onClick={() => handleShowCalendar(true)}
        readOnly
      />
      <Calendar
        onClose={() => handleShowCalendar(false)}
        dateSelected={value}
        show={showCalendar}
        name={name}
      />
    </div>
  );
};

export default Datepicker;
