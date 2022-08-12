import React, { useState } from "react";

import {
  invoiceFormDefaultErrorValues,
  invoiceFormDefaultValues
} from "../../constants/defaultValues";
import Input from "../../components/Input/Input";
import PhoneInput from "../../components/PhoneInput/PhoneInput";

import "./Invoice.scss";

// make sure the due date is not before the day of invoice date

interface TableData {
  description: string;
  quantity: number;
  price: number;
  amount: number;
}

const Invoice = () => {
  // const formItems: InvoiceFormData = invoiceFormDefaultValues;
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

  const handleChangeInputValue = (
    key: string,
    value: string,
    isNumber: boolean
  ) => {
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
      [key]: isNumber ? parseInt(value, 10) : value
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
              onChangeInputValue={(key, value, isNumber) =>
                handleChangeInputValue(key, value, isNumber)
              }
            />
            <Input
              name="address"
              value={formItems.address}
              errorMessage={formItemsErrors.address}
              onChangeInputValue={(key, value, isNumber) =>
                handleChangeInputValue(key, value, isNumber)
              }
            />
          </article>
          <article className="invoice__article grid-2">
            <Input
              name="email"
              value={formItems.email}
              errorMessage={formItemsErrors.email}
              onChangeInputValue={(key, value, isNumber) =>
                handleChangeInputValue(key, value, isNumber)
              }
            />
            <Input
              name="website"
              value={formItems.website}
              errorMessage={formItemsErrors.website}
              onChangeInputValue={(key, value, isNumber) =>
                handleChangeInputValue(key, value, isNumber)
              }
            />
          </article>
          <PhoneInput />
          <article className="invoice__article grid-2">
            <Input
              name="bankName"
              value={formItems.bankName}
              errorMessage={formItemsErrors.bankName}
              onChangeInputValue={(key, value, isNumber) =>
                handleChangeInputValue(key, value, isNumber)
              }
            />
            {/* considering to become string instead number */}
            {/* to allow zero in front of the number like (0001) */}
            <Input
              name="bankAccount"
              value={formItems.bankAccount}
              errorMessage={formItemsErrors.bankAccount}
              onChangeInputValue={(key, value, isNumber) =>
                handleChangeInputValue(key, value, isNumber)
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
              onChangeInputValue={(key, value, isNumber) =>
                handleChangeInputValue(key, value, isNumber)
              }
            />
            <Input
              name="address"
              label={`client's address`}
              value={formItems.address}
              errorMessage={formItemsErrors.address}
              onChangeInputValue={(key, value, isNumber) =>
                handleChangeInputValue(key, value, isNumber)
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
              onChangeInputValue={(key, value, isNumber) =>
                handleChangeInputValue(key, value, isNumber)
              }
            />
            {/* need to change to seperate datepicker component */}
            <Input
              name="invoiceDate"
              label={`invoice date`}
              value={formItems.invoiceDate.toDateString()}
              errorMessage={formItemsErrors.invoiceDate}
              onChangeInputValue={(key, value, isNumber) =>
                handleChangeInputValue(key, value, isNumber)
              }
            />
            <Input
              name="dueDate"
              label={`due date`}
              value={formItems.dueDate.toDateString()}
              errorMessage={formItemsErrors.dueDate}
              onChangeInputValue={(key, value, isNumber) =>
                handleChangeInputValue(key, value, isNumber)
              }
            />
          </article>
        </fieldset>
        <input
          type="submit"
          className="invoice__button button--blue"
          value="Preview Invoice"
        />
        {/* <PhoneInput /> */}
      </form>
    </div>
  );
};

export default Invoice;
