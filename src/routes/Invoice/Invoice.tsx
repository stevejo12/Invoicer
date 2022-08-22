import React, { useState } from "react";

import {
  invoiceFormDefaultErrorValues,
  invoiceFormDefaultValues
} from "../../constants/defaultValues";
import Input from "../../components/Input/Input";
import PhoneInput from "../../components/PhoneInput/PhoneInput";

import "./Invoice.scss";
import Datepicker from "../../components/Datepicker/Datepicker";

const Invoice = () => {
  const [formItems, setFormItems] = useState<InvoiceFormData>(
    invoiceFormDefaultValues
  );
  const [formItemsErrors, setFormItemsErrors] = useState<
    InvoiceFormDataErrorMessage
  >(invoiceFormDefaultErrorValues);

  const handlePreviewInvoice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("handlepreviewinvoice triggered");

    // check all the error
    // if no more error message => redirect
    // else => shake error
  };

  const handleChangeInputValue = (key: string, value: string) => {
    let errorMessage = "Please enter your ";

    if (!value) {
      setFormItemsErrors({
        ...formItemsErrors,
        [key]: errorMessage + key
      });
    } else {
      setFormItemsErrors({
        ...formItemsErrors,
        [key]: ""
      });
    }

    setFormItems({
      ...formItems,
      [key]: value
    });
  };

  const handleChangeDate = (key: string, value: Date | null) => {
    let changeDueDate = false;

    if (key === 'invoiceDate' && value !== null) {
      if (value > formItems.dueDate) {
        changeDueDate = true;
      }
    }

    setFormItems({
      ...formItems,
      [key]: value,
      dueDate: (changeDueDate && value !== null) ? value : formItems.dueDate
    });
  }

  const handleChangePhoneCode = (value: IPhoneCode) => {
    setFormItems({
      ...formItems,
      phoneCode: value
    });
  };

  return (
    <div className="invoice">
      <div className="invoice__titleWrapper">
        <span className="invoice__title">Invoice Form</span>
        <span className="invoice__titleRequired">* required</span>
      </div>

      <form onSubmit={handlePreviewInvoice}>
        <fieldset className="invoice__fieldset">
          <legend>Your Information</legend>
          <article className="invoice__article grid-2">
            <Input
              name="name"
              value={formItems.name}
              errorMessage={formItemsErrors.name}
              onChangeInputValue={(key, value) =>
                handleChangeInputValue(key, value)
              }
            />
            <Input
              name="address"
              value={formItems.address}
              errorMessage={formItemsErrors.address}
              onChangeInputValue={(key, value) =>
                handleChangeInputValue(key, value)
              }
            />
          </article>
          <article className="invoice__article grid-2">
            <Input
              name="email"
              value={formItems.email}
              errorMessage={formItemsErrors.email}
              onChangeInputValue={(key, value) =>
                handleChangeInputValue(key, value)
              }
            />
            <Input
              name="website"
              value={formItems.website}
              errorMessage={formItemsErrors.website}
              onChangeInputValue={(key, value) =>
                handleChangeInputValue(key, value)
              }
            />
          </article>
          <PhoneInput
            phoneCode={formItems.phoneCode}
            phoneNumber={formItems.phoneNumber}
            onChangePhoneCode={(value) => handleChangePhoneCode(value)}
            onChangeValue={(key, value) => handleChangeInputValue(key, value)}
          />
          <article className="invoice__article grid-2">
            <Input
              name="bankName"
              label="bank name"
              value={formItems.bankName}
              errorMessage={formItemsErrors.bankName}
              onChangeInputValue={(key, value) =>
                handleChangeInputValue(key, value)
              }
            />
            {/* considering to become string instead number */}
            {/* to allow zero in front of the number like (0001) */}
            <Input
              name="bankAccount"
              label="bank account"
              value={formItems.bankAccount}
              errorMessage={formItemsErrors.bankAccount}
              onChangeInputValue={(key, value) =>
                handleChangeInputValue(key, value)
              }
            />
          </article>
        </fieldset>
        <fieldset className="invoice__fieldset">
          <legend>Client's Information</legend>
          <article className="invoice__article grid-2">
            <Input
              name="clientName"
              label={`client's name`}
              value={formItems.clientName}
              errorMessage={formItemsErrors.clientName}
              onChangeInputValue={(key, value) =>
                handleChangeInputValue(key, value)
              }
            />
            <Input
              name="address"
              label={`client's address`}
              value={formItems.address}
              errorMessage={formItemsErrors.address}
              onChangeInputValue={(key, value) =>
                handleChangeInputValue(key, value)
              }
            />
          </article>
        </fieldset>
        <fieldset className="invoice__fieldset">
          <legend>Invoice Information</legend>
          <article className="invoice__article grid-3">
            <Input
              name="invoiceNumber"
              label={`invoice number`}
              inputType="number"
              value={formItems.invoiceNumber}
              errorMessage={formItemsErrors.invoiceNumber}
              onChangeInputValue={(key, value) =>
                handleChangeInputValue(key, value)
              }
            />
            <Datepicker 
              placeholderText="invoice date"
              category="invoiceDate"
              selected={formItems.invoiceDate}
              onChange={(key, newDate) => handleChangeDate(key, newDate)}
              minDate={new Date()}
            />
            <Datepicker 
              placeholderText="due date"
              category="dueDate"
              selected={formItems.dueDate}
              onChange={(key, newDate) => handleChangeDate(key, newDate)}
              minDate={formItems.invoiceDate}
            />
          </article>
        </fieldset>
        <input
          type="submit"
          className="invoice__button button--blue"
          value="Preview Invoice"
        />
      </form>
    </div>
  );
};

export default Invoice;
