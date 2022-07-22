import { createSlice } from "@reduxjs/toolkit"

interface InvoiceState {
  name: string,
  address: string,
}

const initialState: InvoiceState = {
  name: '',
  address: '',
}

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    
  }
})