import { Routes, Route } from 'react-router-dom';
import Invoice from './routes/Invoice/Invoice';
import InvoicePreview from './routes/InvoicePreview/InvoicePreview';

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Invoice />} />
      <Route path="/invoice" element={<InvoicePreview />} />
    </Routes>
  )
}

export default Main;