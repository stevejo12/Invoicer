import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import InputInvoiceTemplate from '../../components/InputInvoiceTemplate/InputInvoiceTemplate';
import DatepickerInvoiceTemplate from '../../components/DatepickerInvoiceTemplate/DatepickerInvoiceTemplate';

import './Invoice.scss';
import TableForm from '../../components/TableForm/TableForm';
import { invoiceFormDefaultErrorValues, invoiceFormDefaultValues } from '../../constants/defaultValues';
import Input from '../../components/Input/Input';

// make sure the due date is not before the day of invoice date

interface TableData {
  description: string,
  quantity: number,
  price: number,
  amount: number,
}

const Invoice = () => {
  // const formItems: InvoiceFormData = invoiceFormDefaultValues;
  const [formItems, setFormItems] = useState<InvoiceFormData>(invoiceFormDefaultValues);
  const [formItemsErrors, setFormItemsErrors] = useState<InvoiceFormDataErrorMessage>(invoiceFormDefaultErrorValues);

  const handlePreviewInvoice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check all the error
    // if no more error message => redirect
    // else => shake error
  }

  const handleChangeInputValue = (key: string, value: string) => {
    let errorMessage = 'Please enter your ';

    if (!value) {
      setFormItemsErrors({
        ...formItemsErrors,
        [key]: errorMessage + key
      })
    } else {
      setFormItemsErrors({
        ...formItemsErrors,
        [key]: ''
      })
    }

    setFormItems({
      ...formItems,
      [key]: value
    })
  }

  console.log(formItems);

  return (
    <div className="invoice">
      <div className='invoice__titleWrapper'>
        <span className="invoice__title">Invoice Form</span>
        <span className='invoice__titleRequired'>* required</span>
      </div>

      <form onSubmit={handlePreviewInvoice}>
        <fieldset className='invoice__fieldset'>
          <legend>Your Information</legend>
          <Input
            name='name'
            value={formItems.name}
            errorMessage={formItemsErrors.name}
            onChangeInputValue={(key, value) => handleChangeInputValue(key, value)}
          />
        </fieldset>
      </form>
      
      {/* <article className='invoice__article grid-2'>
        <InputInvoiceTemplate
          category="name"
          value={name}
          callbackFunction={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <InputInvoiceTemplate
          category="address"
          value={address}
          callbackFunction={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
        />
      </article>

      <article className='invoice__article grid-3'>
        <InputInvoiceTemplate
          category="email"
          inputType="email"
          value={email}
          callbackFunction={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <InputInvoiceTemplate
          category="website"
          inputType="url"
          isRequired={false}
          value={website}
          callbackFunction={(e: React.ChangeEvent<HTMLInputElement>) => setWebsite(e.target.value)}
        />
        <InputInvoiceTemplate
          category="phone"
          value={phone}
          callbackFunction={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
        />
      </article>

      <article className='invoice__article grid-2'>
        <InputInvoiceTemplate
          placeholderText='bank name'
          category="bankName"
          value={bankName}
          callbackFunction={(e: React.ChangeEvent<HTMLInputElement>) => setBankName(e.target.value)}
        />
        <InputInvoiceTemplate
          placeholderText='bank account'
          category="bankAccount"
          value={bankAccount}
          callbackFunction={(e: React.ChangeEvent<HTMLInputElement>) => setBankAccount(e.target.value)}
        />
      </article>

      <article className='invoice__article grid-2'>
        <InputInvoiceTemplate
          placeholderText="client's name"
          category="clientName"
          value={clientName}
          callbackFunction={(e: React.ChangeEvent<HTMLInputElement>) => setClientName(e.target.value)}
        />
        <InputInvoiceTemplate
          placeholderText="client's address"
          category="clientAddress"
          value={clientAddress}
          callbackFunction={(e: React.ChangeEvent<HTMLInputElement>) => setClientAddress(e.target.value)}
        />
      </article>

      <article className='invoice__article grid-3'>
        <InputInvoiceTemplate
          placeholderText="Invoice Number"
          category="invoiceNumber"
          value={invoiceNumber}
          callbackFunction={(e: React.ChangeEvent<HTMLInputElement>) => setInvoiceNumber(e.target.value)}
        />
        <DatepickerInvoiceTemplate
          placeholderText='invoice date'
          category="invoiceDate"
          selected={invoiceDate}
          minDate={new Date()}
          onChange={(date: Date) => handleChangeDate(date)}
        />
        <DatepickerInvoiceTemplate 
          placeholderText="due date"
          category="dueDate"
          selected={dueDate}
          onChange={(date: Date) => setDueDate(date)}
          minDate={invoiceDate}
        />
      </article>
      

      <TableForm 
        data={allItem} 
        callbackNumberFunction={(index: number, e: React.ChangeEvent<HTMLInputElement>) => handleNumbersChange(index)(e)}
        callbackDescriptionFunction={(index: number, e: React.FormEvent<HTMLSpanElement>) => handleItemChange(index)(e)}
        handleAddItem={handleAddItem}
      />

      <InputInvoiceTemplate
        placeholderText='additional notes'
        category="additionalNotes"
        inputTypeElementTag='textarea'
        value={notes}
        callbackFunction={(e: React.ChangeEvent<HTMLInputElement>) => setNotes(e.target.value)}
      />

      <button onClick={handlePreviewInvoice} className='invoice__button button--blue'>Preview Invoice</button> */}
    </div>
  )
}

export default Invoice