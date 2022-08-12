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

// phoneNumber => uses string because of join possibility with phoneCode
// invoiceNumber => uses string because of allowing "0" in front with list of numbers
// both phoneNumber and invoiceNumber will not allow any alphabets
interface InvoiceFormData {
  name: string;
  address: string;
  email: string;
  phoneCode: IPhoneCode,
  phoneNumber: string,
  bankName: string;
  bankAccount: string;
  website: string;
  clientName: string;
  clientAddress: string;
  invoiceNumber: string;
  invoiceDate: Date;
  dueDate: Date;
  items: InvoiceFormTableData[];
  notes: string;
}

interface InvoiceFormDataErrorMessage {
  name: string;
  address: string;
  email: string;
  phoneCode: string;
  phoneNumber:string;
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

interface IPhoneCode {
  id: number;
  name: string;
  phone_code: string;
}
