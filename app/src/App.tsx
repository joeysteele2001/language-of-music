import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import ColorPalette from './components/ColorPalette';
import Main from './components/new/Main';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Main />
        </Route>

        <Route path="/songpage">
          <Main />
        </Route>

        <Route path="/colors">
          <ColorPalette />
        </Route>
      </Switch>

      <nav className="dev">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/songpage">Song Page</Link></li>
          <li><Link to="/colors">Color Palette</Link></li>
        </ul>
      </nav>
    </BrowserRouter>
  );
};

export default App;
