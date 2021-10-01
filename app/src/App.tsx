import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import JustListen from './components/JustListen';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/justlisten">Just Listen</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/justlisten">
          <JustListen />
        </Route>
      </Switch>


    </BrowserRouter>
  );
}

export default App;
