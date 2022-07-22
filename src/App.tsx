import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Invoice from './routes/Invoice/Invoice';
import Main from './Main';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Main />
      </div>
    </Router>
  );
}

export default App;
