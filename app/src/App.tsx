import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

export default App;
