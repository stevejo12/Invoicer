import React from 'react';

import './Input.scss';

interface IProps {
  name: string;
  label?: string;
  inputType?: "text" | "number";
  value: string | number;
  errorMessage: string;
  onChangeInputValue: (key: string, newValue: string) => void;
}

/* 
  * Input Component (for text and number input type only)
  * @params
  *   name => similar to invoiceForm key name (for input onChange)
  *   label => label's name (opt. if not the same as name)
  *   inputType = ["text", "number"]
  *   value => value displayed
  *   errorMessage => message when there is an error with the value
  *   onChangeInputValue => Function to update the value in input field.
*/
const Input = ({ name, label, inputType="text", value, errorMessage, onChangeInputValue }: IProps) => {
  const inputLabel = label || name;
  const isNumber = inputType === 'number';

  return (
    <div className='input__wrapper'>
      {/* label */}
      <label className='input__label'>{inputLabel}</label>
      {/* input field */}
      <input
        className={`input__inputField ${errorMessage ? '' : 'input__fieldMargin'}`}
        name={name}
        type={inputType} 
        value={value || ''} 
        placeholder={`Enter your ${inputLabel}`}
        onChange={(e) => onChangeInputValue(e.target.name, e.target.value)}
      />
      {/* error text */}
      {errorMessage && <p className='input__errorMessage'>{errorMessage}</p>}
    </div>
  )
}

export default Input