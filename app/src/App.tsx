import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';


const App = () => {
  return (
  <main>
    <BrowserRouter>
      <Link to="/"><button>Home</button></Link>
        <Route exact path="/">
          <Home />
        </Route>
    </BrowserRouter>
 
  </main>
  );
};

export default App;
