import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import InputInvoiceTemplate from '../../components/InputInvoiceTemplate/InputInvoiceTemplate';
import DatepickerInvoiceTemplate from '../../components/DatepickerInvoiceTemplate/DatepickerInvoiceTemplate';

import './Invoice.scss';
import TableForm from '../../components/TableForm/TableForm';

// make sure the due date is not before the day of invoice date

interface TableData {
  description: string,
  quantity: number,
  price: number,
  amount: number,
}

const Invoice = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState<Date | null>(new Date());
  const [dueDate, setDueDate] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState("");
  const [allItem, setAllItem] = useState<TableData[]>([{
    description: '',
    quantity: 0,
    price: 0,
    amount: 0,
  }]);

  const handleChangeDate = (date: Date) => {
    setInvoiceDate(date);

    if (dueDate && date > dueDate) {
      setDueDate(date);
    }
  }

  const handleNumbersChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newArr: TableData[] = [...allItem];
    const newItem: TableData = newArr[index];
    const numberFieldOptions = ["quantity", "price"];

    // to make sure input[type:number] value not 0 in front
    if (
      event.target.value.charAt(0) === "0" &&
      numberFieldOptions.indexOf(event.target.name) > -1
    ) {
      event.target.value = event.target.value.substring(1);
    }

    switch(event.target.name) {
      case "quantity":
        newItem["quantity"] = +event.target.value || 0;
        break;
      case "price":
        newItem["price"] = +event.target.value || 0;
    }

    newItem["amount"] = newItem["quantity"] * newItem["price"];

    setAllItem(newArr);
  }

  const handleItemChange = (index: number) => (event: React.FormEvent<HTMLSpanElement>) => {
    event.preventDefault();
    const newArr: TableData[] = [...allItem];
    const newItem: TableData = newArr[index];
   
    newItem["description"] = event.currentTarget.textContent || "";

    setAllItem(newArr);
  } 

  const handleAddItem = () => {
    const newArr: TableData[] = [...allItem];
    const newItem: TableData = {
      description: '',
      quantity: 0,
      price: 0,
      amount: 0,
    }

    newArr.push(newItem);
    
    setAllItem(newArr); 
  }

  const handlePreviewInvoice = () => {
    navigate('/invoice');
  }

  return (
    <div className="invoice">
      <span className="invoice__title">Invoice Form</span>
      <span>* required</span>
      
      <article className='invoice__article grid-2'>
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

      <button onClick={handlePreviewInvoice} className='invoice__button button--blue'>Preview Invoice</button>
    </div>
  )
}

export default Invoice