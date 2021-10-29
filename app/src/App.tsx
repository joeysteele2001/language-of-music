import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ColorPalette from './components/ColorPalette';
import SongPage from './components/SongPage';
import ToggleSwitch from './components/new/ToggleSwitch';
import NewHome from './components/new/Home';
import NewSongPage from './components/new/SongPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-home">
          <NewHome />
        </Route>

        <Route path="/new-songpage">
          <NewSongPage />
        </Route>
      </Switch>

      <nav className="dev">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/colors">Color Palette</Link></li>
          <li><Link to="/components">Components Demo</Link></li>
          <li><Link to="/new-home">New Home</Link></li>
          <li><Link to="/new-songpage">New Song Page</Link></li>
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

        <Route path="/components">
          <ToggleSwitch onChange={(checked) => console.log(`checked: ${checked}`)} label="Click me!" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
