import React, { FunctionComponent } from 'react'
import ReactDatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import './Datepicker.scss';

interface IProps {
  placeholderText?: string,
  category: string,
  selected: Date | null,
  onChange: (key: string, newValue: Date | null) => void,
  minDate?: Date | null,
  isRequired?: boolean
}

const Datepicker: FunctionComponent<IProps> = ({
  placeholderText,
  category,
  selected,
  onChange,
  minDate,
  isRequired = true,
}) => {
  return (
    <div className="datepicker__wrapper">
       <label className="datepicker__label" htmlFor={category}>
        {placeholderText || category}
        {isRequired && 
          <span className='datepicker__isRequired'>
            *
          </span>
        }
      </label>
      <ReactDatePicker
        name={category}
        className=''
        selected={selected}
        dateFormat="dd-MMM-yyyy"
        onChange={(date) => onChange(category, date)}
        minDate={minDate && minDate}
      />
    </div>
  )
}

export default Datepicker;