import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SelectMode from './components/SelectMode';
import ColorPalette from './components/ColorPalette';


const App = () => {
  return (
  <main className='App'>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/colors">Colors</Link>
          </li>
          <li>
            <Link to="/selectmode">SelectMode</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/colors">
          <ColorPalette />
        </Route>

        <Route exact path="/SelectMode">
          <SelectMode />
        </Route>

      </Switch>
    </BrowserRouter>
 
  </main>
  );
};

export default App;
