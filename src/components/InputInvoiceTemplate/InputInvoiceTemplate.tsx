import React, { FunctionComponent } from 'react';

import './InputInvoiceTemplate.scss';

interface IProps {
  placeholderText?: string,
  isRequired?: boolean,
  isDisabled?: boolean,
  category: string,
  inputType?: string,
  inputTypeElementTag?: string,
  value: string | number,
  callbackFunction: Function
}

const InputInvoiceTemplate: FunctionComponent<IProps> = ({
  placeholderText,
  isRequired = true,
  isDisabled = false,
  category,
  inputType = "text",
  inputTypeElementTag = "input",
  value,
  callbackFunction = () => {}
}: IProps) => {
  // https://reactdatepicker.com/#example-custom-header

  return (
    <div className="inputInvoiceTemplate__wrapper">
      <label className="inputInvoiceTemplate__label" htmlFor={category}>
        {placeholderText || category}
        {isRequired && 
          <span className='inputInvoiceTemplate__isRequired'>
            *
          </span>
        }
      </label>
      {inputTypeElementTag === 'input' && (
        <input
          className='inputInvoiceTemplate__input'
          type={inputType}
          name={category}
          id={category}
          placeholder={`Enter your ${placeholderText || category}`}
          autoComplete="off"
          value={value}
          onChange={(e) => callbackFunction(e)}
          min={0}
        />
      )}
      {inputTypeElementTag === 'textarea' && (
        <textarea
          className='inputInvoiceTemplate__input'
          name={category}
          id={category}
          placeholder={`Enter your ${placeholderText || category}`}
          autoComplete="off"
          value={value}
          onChange={(e) => callbackFunction(e)}
        />
      )}
    </div>
  )
}

export default InputInvoiceTemplate