import React, { FunctionComponent } from 'react'
import ReactDatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import './DatepickerInvoiceTemplate.scss';

interface IProps {
  placeholderText?: string,
  category: string,
  selected: Date | null,
  onChange: Function,
  minDate?: Date | null,
  isRequired?: boolean
}

const DatepickerInvoiceTemplate: FunctionComponent<IProps> = ({
  placeholderText,
  category,
  selected,
  onChange,
  minDate,
  isRequired = true,
}) => {
  return (
    <div className="datepickerInvoiceTemplate__wrapper">
       <label className="datepickerInvoiceTemplate__label" htmlFor={category}>
        {placeholderText || category}
        {isRequired && 
          <span className='datepickerInvoiceTemplate__isRequired'>
            *
          </span>
        }
      </label>
      <ReactDatePicker
        className=''
        selected={selected}
        onChange={(date) => onChange(date)}
        minDate={minDate && minDate}
      />
    </div>
  )
}

export default DatepickerInvoiceTemplate;