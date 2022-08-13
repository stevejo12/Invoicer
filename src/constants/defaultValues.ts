const today = new Date();

const invoiceFormItemsDefaultValues: InvoiceFormTableData = {
  description:'',
  quantity: 0,
  price: 0,
  amount: 0
}

const invoiceFormItemsDefaultErrorValues: InvoiceFormTableDataErrorMessage = {
  description:'',
  quantity: '',
  price: '',
  amount: ''
}

const PhoneCodeDefaultValues: IPhoneCode = {
  id: 1,
  name: '',
  phone_code: '',
}

const invoiceFormDefaultValues: InvoiceFormData = {
  name: '',
  address: '',
  email: '',
  phoneCode: PhoneCodeDefaultValues,
  phoneNumber: '',
  bankName: '',
  bankAccount: '',
  website: '',
  clientName: '',
  clientAddress: '',
  invoiceNumber: '',
  invoiceDate: today,
  dueDate: today,
  items: [invoiceFormItemsDefaultValues],
  notes: ''
}

const invoiceFormDefaultErrorValues: InvoiceFormDataErrorMessage = {
  name: '',
  address: '',
  email: '',
  phoneCode: '',
  phoneNumber: '',
  bankName: '',
  bankAccount: '',
  website: '',
  clientName: '',
  clientAddress: '',
  invoiceNumber: '',
  invoiceDate: '',
  dueDate: '',
  items: [invoiceFormItemsDefaultErrorValues],
  notes: ''
}

export { invoiceFormDefaultValues, invoiceFormDefaultErrorValues };