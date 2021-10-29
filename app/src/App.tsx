import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ColorPalette from './components/ColorPalette';
import SongPage from './components/SongPage';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <nav className="dev">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/colors">Color Palette</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/JustListen">
            <SongPage mode="JustListen" />
          </Route>

          <Route path="/ListenandLearn">
            <SongPage mode="ListenLearn" />
          </Route>

          <Route path="/PlayAlong">
            <SongPage mode="PlayAlong" />
          </Route>

          <Route path="/colors">
            <ColorPalette />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
