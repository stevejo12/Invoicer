// interfaces used in multiple tsx files

interface InvoiceFormTableData {
  description: string;
  quantity: number;
  price: number;
  amount: number;
}

interface InvoiceFormTableDataErrorMessage {
  description: string;
  quantity: string;
  price: string;
  amount: string;
}

interface InvoiceFormData {
  name: string;
  address: string;
  email: string;
  phone: number;
  bankName: string;
  bankAccount: string;
  website: string;
  clientName: string;
  clientAddress: string;
  invoiceNumber: number;
  invoiceDate: Date;
  dueDate: Date;
  items: InvoiceFormTableData[];
  notes: string;
}

interface InvoiceFormDataErrorMessage {
  name: string;
  address: string;
  email: string;
  phone: string;
  bankName: string;
  bankAccount: string;
  website: string;
  clientName: string;
  clientAddress: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  items: InvoiceFormTableDataErrorMessage[];
  notes: string;
}

interface IPhoneCodeandCountry {
  id: number;
  name: string;
  phone_code: string;
}
