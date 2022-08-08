import React from 'react';

interface IProps {
  name: string;
  label?: string;
  value: string;
  errorMessage: string;
  onChangeInputValue: (key: string, newValue: string) => void;
}

/* 
  * Input Component
  * @params
  *   
*/
const Input = ({ name, label, value, errorMessage, onChangeInputValue }: IProps) => {
  const inputLabel = label || name;

  return (
    <div>
      {/* label */}
      <label>{inputLabel}</label>
      {/* input field */}
      <input
        name={name}
        type="text" 
        value={value} 
        placeholder={`Enter your ${inputLabel}`}
        onChange={(e) => onChangeInputValue(e.target.name, e.target.value)}
      />
      {/* error text */}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

export default Input