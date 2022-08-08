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

const invoiceFormDefaultValues: InvoiceFormData = {
  name: '',
  address: '',
  email: '',
  phone: 0,
  bankName: '',
  bankAccount: '',
  website: '',
  clientName: '',
  clientAddress: '',
  invoiceNumber: 0,
  invoiceDate: today,
  dueDate: today,
  items: [invoiceFormItemsDefaultValues],
  notes: ''
}

const invoiceFormDefaultErrorValues: InvoiceFormDataErrorMessage = {
  name: '',
  address: '',
  email: '',
  phone: '',
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